"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot, doc, updateDoc, addDoc, serverTimestamp, deleteDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Slot {
  id: string;
  slotId: string;
  date: string;
  time: string;
  location: string;
  maxStudents: number;
  currentBookings: number;
  status: string;
  createdAt: any;
}

export default function PengurusanSlot() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingSlot, setEditingSlot] = useState<Slot | null>(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    maxStudents: 10
  });
  const [updating, setUpdating] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterLocation, setFilterLocation] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");

  useEffect(() => {
    const q = query(collection(db, "slots"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const slotList: Slot[] = [];
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      snapshot.forEach((docSnapshot) => {
        const slotData = { id: docSnapshot.id, ...docSnapshot.data() } as Slot;
        slotList.push(slotData);

        // Check if slot date has passed and update status to disabled
        if (slotData.date && slotData.status === "available") {
          const slotDate = new Date(slotData.date);
          slotDate.setHours(0, 0, 0, 0);
          
          if (slotDate < today) {
            updateDoc(doc(db, "slots", slotData.id), {
              status: "disabled",
              updatedAt: serverTimestamp()
            }).catch((error) => {
              console.error("Error updating expired slot status:", error);
            });
          }
        }
      });
      setSlots(slotList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingSlot) {
        // Update existing slot
        await updateDoc(doc(db, "slots", editingSlot.id), {
          ...formData,
          updatedAt: serverTimestamp()
        });
      } else {
        // Generate slotId
        const slotId = `SLOT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        
        // Add new slot
        await addDoc(collection(db, "slots"), {
          slotId,
          ...formData,
          currentBookings: 0,
          status: "available",
          createdAt: serverTimestamp()
        });
      }

      resetForm();
    } catch (error) {
      console.error("Error saving slot:", error);
      alert("Gagal menyimpan slot");
    }
  };

  const resetForm = () => {
    setFormData({
      date: "",
      time: "",
      location: "",
      maxStudents: 10
    });
    setEditingSlot(null);
    setShowForm(false);
  };

  const handleEdit = (slot: Slot) => {
    setFormData({
      date: slot.date,
      time: slot.time,
      location: slot.location,
      maxStudents: slot.maxStudents
    });
    setEditingSlot(slot);
    setShowForm(true);
  };

  const handleDelete = async (slotId: string) => {
    if (!confirm("Adakah anda pasti ingin memadam slot ini?")) return;

    try {
      await deleteDoc(doc(db, "slots", slotId));
    } catch (error) {
      console.error("Error deleting slot:", error);
      alert("Gagal memadam slot");
    }
  };

  const toggleSlotStatus = async (slotId: string, currentStatus: string) => {
    setUpdating(slotId);
    try {
      const newStatus = currentStatus === "available" ? "disabled" : "available";
      await updateDoc(doc(db, "slots", slotId), {
        status: newStatus,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Error updating slot status:", error);
      alert("Gagal mengemaskini status slot");
    } finally {
      setUpdating(null);
    }
  };

  const getStatusColor = (status: string, currentBookings: number, maxStudents: number) => {
    if (currentBookings >= maxStudents) {
      return "bg-red-100 text-red-800 border-red-300";
    }
    switch (status) {
      case "available":
      case "active":
        return "bg-green-100 text-green-800 border-green-300";
      case "disabled":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusText = (status: string, currentBookings: number, maxStudents: number) => {
    if (currentBookings >= maxStudents) {
      return "Penuh";
    }
    switch (status) {
      case "available":
      case "active":
        return "Aktif";
      case "disabled":
        return "Tidak Aktif";
      default:
        return status;
    }
  };

  const getFilteredAndSortedSlots = () => {
    let filtered = slots;
    
    // Filter by location (partial matching)
    if (filterLocation) {
      filtered = filtered.filter(slot => slot.location.includes(filterLocation));
    }
    
    // Filter by status
    if (filterStatus) {
      filtered = filtered.filter(slot => {
        if (filterStatus === "Penuh") {
          return slot.currentBookings >= slot.maxStudents;
        }
        if (filterStatus === "Aktif") {
          return slot.status === "available" && slot.currentBookings < slot.maxStudents;
        }
        if (filterStatus === "Tidak Aktif") {
          return slot.status === "disabled";
        }
        return true;
      });
    }
    
    // Sort by date
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Pengurusan Slot</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Pengurusan Slot</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Tambah Slot
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi</label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Semua Lokasi</option>
                <option value="Dapur Siswa Madani UMK Bachok">Dapur Siswa Madani UMK Bachok</option>
                <option value="Dapur Siswa Madani UMK Kampus Kota">Dapur Siswa Madani UMK Kampus Kota</option>
                <option value="Dapur Siswa Madani UMK Jeli">Dapur Siswa Madani UMK Jeli</option>
                <option value="Pejabat HEP UMK Kampus Bachok">Pejabat HEP UMK Kampus Bachok</option>
                <option value="Pejabat HEP UMK Kampus Kota">Pejabat HEP UMK Kampus Kota</option>
                <option value="Pejabat HEP UMK Kampus Jeli">Pejabat HEP UMK Kampus Jeli</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Semua Status</option>
                <option value="Aktif">Aktif</option>
                <option value="Penuh">Penuh</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dialog/Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h2 className="text-lg font-semibold mb-4">
                {editingSlot ? "Edit Slot" : "Tambah Slot Baru"}
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tarikh</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Masa</label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  >
                    <option value="">Pilih lokasi</option>
                    <option value="Dapur Siswa Madani UMK Bachok">Dapur Siswa Madani UMK Bachok</option>
                    <option value="Dapur Siswa Madani UMK Kampus Kota">Dapur Siswa Madani UMK Kampus Kota</option>
                    <option value="Dapur Siswa Madani UMK Jeli">Dapur Siswa Madani UMK Jeli</option>
                    <option value="Pejabat HEP UMK Kampus Bachok">Pejabat HEP UMK Kampus Bachok</option>
                    <option value="Pejabat HEP UMK Kampus Kota">Pejabat HEP UMK Kampus Kota</option>
                    <option value="Pejabat HEP UMK Kampus Jeli">Pejabat HEP UMK Kampus Jeli</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Maksimum Pelajar</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={formData.maxStudents}
                    onChange={(e) => setFormData({...formData, maxStudents: parseInt(e.target.value)})}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    {editingSlot ? "Kemas Kini" : "Tambah"}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Batal
                  </button>
                </div>
                {editingSlot && (
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Adakah anda pasti ingin memadam slot ini?")) {
                        handleDelete(editingSlot.id);
                        resetForm();
                      }
                    }}
                    className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Padam Slot
                  </button>
                )}
              </form>
            </div>
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID Slot
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  >
                    Tarikh {sortOrder === 'asc' ? '↑' : '↓'}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Masa
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lokasi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kapasiti
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tindakan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {getFilteredAndSortedSlots().map((slot) => (
                  <tr key={slot.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {slot.slotId || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {slot.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {slot.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {slot.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {slot.currentBookings}/{slot.maxStudents}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          slot.status,
                          slot.currentBookings,
                          slot.maxStudents
                        )}`}
                      >
                        {getStatusText(slot.status, slot.currentBookings, slot.maxStudents)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(slot)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
                        >
                          Edit
                        </button>
                        {slot.currentBookings < slot.maxStudents && (
                          <button
                            onClick={() => toggleSlotStatus(slot.id, slot.status)}
                            disabled={updating === slot.id}
                            className={`px-3 py-1 rounded text-xs disabled:opacity-50 ${
                              slot.status === "available" || slot.status === "active"
                                ? "bg-red-600 hover:bg-red-700 text-white"
                                : "bg-green-600 hover:bg-green-700 text-white"
                            }`}
                          >
                            {updating === slot.id
                              ? "..."
                              : slot.status === "available" || slot.status === "active"
                              ? "Tidak Aktif"
                              : "Aktif"}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

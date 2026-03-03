"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface StockItem {
  id: string;
  jenisMakanan: string;
  nama: string;
  kuantiti: number;
  unit: string;
  ambangRendah: number;
  status: string;
  tarikhMasuk: any;
  tarikhKemaskini: any;
  penerangan: string;
}

export default function PengurusanStok() {
  const [stocks, setStocks] = useState<StockItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingStock, setEditingStock] = useState<StockItem | null>(null);
  const [formData, setFormData] = useState({
    jenisMakanan: "",
    nama: "",
    kuantiti: 0,
    unit: "kg",
    ambangRendah: 10,
    penerangan: ""
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "stocks"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const stockList: StockItem[] = [];
      snapshot.forEach((doc) => {
        stockList.push({ id: doc.id, ...doc.data() } as StockItem);
      });
      setStocks(stockList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!auth.currentUser) return;

    setSaving(true);
    try {
      if (editingStock) {
        // Update existing stock
        await updateDoc(doc(db, "stocks", editingStock.id), {
          ...formData,
          tarikhKemaskini: serverTimestamp()
        });
      } else {
        // Add new stock
        await addDoc(collection(db, "stocks"), {
          ...formData,
          status: "available",
          tarikhMasuk: serverTimestamp(),
          tarikhKemaskini: serverTimestamp()
        });
      }

      resetForm();
    } catch (error) {
      console.error("Error saving stock:", error);
      alert("Gagal menyimpan stok. Sila cuba lagi.");
    } finally {
      setSaving(false);
    }
  };

  const resetForm = () => {
    setFormData({
      jenisMakanan: "",
      nama: "",
      kuantiti: 0,
      unit: "kg",
      ambangRendah: 10,
      penerangan: ""
    });
    setEditingStock(null);
    setShowForm(false);
  };

  const handleEdit = (stock: StockItem) => {
    setFormData({
      jenisMakanan: stock.jenisMakanan,
      nama: stock.nama,
      kuantiti: stock.kuantiti,
      unit: stock.unit,
      ambangRendah: stock.ambangRendah,
      penerangan: stock.penerangan
    });
    setEditingStock(stock);
    setShowForm(true);
  };

  const handleDelete = async (stockId: string) => {
    if (!confirm("Adakah anda pasti ingin memadam stok ini?")) return;

    try {
      await deleteDoc(doc(db, "stocks", stockId));
    } catch (error) {
      console.error("Error deleting stock:", error);
      alert("Gagal memadam stok. Sila cuba lagi.");
    }
  };

  const isStockLow = (stock: StockItem) => {
    return stock.kuantiti <= stock.ambangRendah;
  };

  const getJenisMakananText = (jenis: string) => {
    switch (jenis) {
      case "beras": return "Beras";
      case "mee_segera": return "Mee Segera";
      case "roti": return "Roti";
      case "susu": return "Susu";
      case "makanan_kering": return "Makanan Kering";
      default: return jenis;
    }
  };

  const getStatusColor = (stock: StockItem) => {
    if (isStockLow(stock)) {
      return "bg-red-100 text-red-800 border-red-300";
    }
    return "bg-green-100 text-green-800 border-green-300";
  };

  const getStatusText = (stock: StockItem) => {
    if (isStockLow(stock)) {
      return "Stok Rendah";
    }
    return "Stok Cukup";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Pengurusan Stok</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Pengurusan Stok</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Tambah Stok
          </button>
        </div>

        {/* Stock Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Jumlah Stok</h3>
            <p className="text-3xl font-bold text-blue-600">{stocks.length}</p>
            <p className="text-sm text-gray-600">Jenis item</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Stok Rendah</h3>
            <p className="text-3xl font-bold text-red-600">
              {stocks.filter(stock => isStockLow(stock)).length}
            </p>
            <p className="text-sm text-gray-600">Perlu diisi semula</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Stok Normal</h3>
            <p className="text-3xl font-bold text-green-600">
              {stocks.filter(stock => !isStockLow(stock)).length}
            </p>
            <p className="text-sm text-gray-600">Tahap normal</p>
          </div>
        </div>

        {showForm && (
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">
              {editingStock ? "Kemaskini Stok" : "Tambah Stok Baru"}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Makanan</label>
                <select
                  value={formData.jenisMakanan}
                  onChange={(e) => setFormData({...formData, jenisMakanan: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                >
                  <option value="">Pilih jenis makanan</option>
                  <option value="beras">Beras</option>
                  <option value="mee_segera">Mee Segera</option>
                  <option value="roti">Roti</option>
                  <option value="susu">Susu</option>
                  <option value="makanan_kering">Makanan Kering</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Item</label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({...formData, nama: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Contoh: Beras Wangi 5kg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kuantiti</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={formData.kuantiti}
                    onChange={(e) => setFormData({...formData, kuantiti: parseInt(e.target.value)})}
                    min="0"
                    className="flex-1 border border-gray-300 rounded px-3 py-2"
                    required
                  />
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({...formData, unit: e.target.value})}
                    className="border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="kg">kg</option>
                    <option value="pcs">pcs</option>
                    <option value="box">box</option>
                    <option value="botol">botol</option>
                    <option value="liter">liter</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ambang Stok Rendah</label>
                <input
                  type="number"
                  value={formData.ambangRendah}
                  onChange={(e) => setFormData({...formData, ambangRendah: parseInt(e.target.value)})}
                  min="1"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Penerangan</label>
                <textarea
                  value={formData.penerangan}
                  onChange={(e) => setFormData({...formData, penerangan: e.target.value})}
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Maklumat tambahan mengenai item"
                />
              </div>
              <div className="md:col-span-2 flex space-x-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {saving ? "Menyimpan..." : (editingStock ? "Kemas Kini" : "Tambah")}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jenis Makanan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nama Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kuantiti
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ambang Rendah
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tarikh Masuk
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tindakan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stocks.map((stock) => (
                  <tr key={stock.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {getJenisMakananText(stock.jenisMakanan)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {stock.nama}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {stock.kuantiti} {stock.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {stock.ambangRendah} {stock.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          stock
                        )}`}
                      >
                        {getStatusText(stock)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {stock.tarikhMasuk && typeof stock.tarikhMasuk.toDate === 'function' 
                        ? stock.tarikhMasuk.toDate().toLocaleDateString("ms-MY") 
                        : stock.tarikhMasuk || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(stock)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(stock.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                        >
                          Padam
                        </button>
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

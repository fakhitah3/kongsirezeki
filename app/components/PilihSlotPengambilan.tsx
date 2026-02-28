"use client";

import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, doc, updateDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Slot {
  id: string;
  date: string;
  time: string;
  location: string;
  maxStudents: number;
  currentBookings: number;
  status: string;
  createdAt: any;
}

interface Booking {
  id: string;
  slotId: string;
  userId: string;
  status: string;
  createdAt: any;
}

export default function PilihSlotPengambilan() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [userBookings, setUserBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState<string | null>(null);

  useEffect(() => {
    if (!auth.currentUser) return;

    // Fetch available slots
    const slotsQuery = query(
      collection(db, "slots"),
      where("status", "==", "available")
    );

    const unsubscribeSlots = onSnapshot(slotsQuery, (snapshot) => {
      const slotList: Slot[] = [];
      snapshot.forEach((doc) => {
        slotList.push({ id: doc.id, ...doc.data() } as Slot);
      });
      setSlots(slotList);
    });

    // Fetch user's existing bookings
    const bookingsQuery = query(
      collection(db, "bookings"),
      where("userId", "==", auth.currentUser.uid)
    );

    const unsubscribeBookings = onSnapshot(bookingsQuery, (snapshot) => {
      const bookingList: Booking[] = [];
      snapshot.forEach((doc) => {
        bookingList.push({ id: doc.id, ...doc.data() } as Booking);
      });
      setUserBookings(bookingList);
      setLoading(false);
    });

    return () => {
      unsubscribeSlots();
      unsubscribeBookings();
    };
  }, []);

  const handleBookSlot = async (slotId: string) => {
    if (!auth.currentUser) return;

    // Check if user already has a booking
    const hasBooking = userBookings.some(booking => 
      booking.status === "approved" && booking.slotId === slotId
    );

    if (hasBooking) {
      alert("Anda sudah memilih slot ini.");
      return;
    }

    setBooking(slotId);
    try {
      // Add booking
      await addDoc(collection(db, "bookings"), {
        slotId,
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        status: "pending",
        createdAt: serverTimestamp()
      });

      // Update slot current bookings
      const slotRef = doc(db, "slots", slotId);
      const slot = slots.find(s => s.id === slotId);
      if (slot) {
        await updateDoc(slotRef, {
          currentBookings: slot.currentBookings + 1
        });
      }

      alert("Slot berjaya dipilih! Menunggu pengesahan.");
      setBooking(null);
    } catch (error) {
      console.error("Error booking slot:", error);
      alert("Gagal memilih slot. Sila cuba lagi.");
      setBooking(null);
    }
  };

  const isSlotBooked = (slotId: string) => {
    return userBookings.some(booking => 
      booking.status === "approved" && booking.slotId === slotId
    );
  };

  const isSlotFull = (slot: Slot) => {
    return slot.currentBookings >= slot.maxStudents;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Pilih Slot Pengambilan</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Pilih Slot Pengambilan</h1>

        {userBookings.some(b => b.status === "approved") && (
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6">
            <p className="font-medium">Slot yang dipilih:</p>
            <div className="mt-2">
              {userBookings
                .filter(b => b.status === "approved")
                .map(booking => {
                  const slot = slots.find(s => s.id === booking.slotId);
                  return slot ? (
                    <div key={booking.id} className="bg-white p-3 rounded mt-2">
                      <p className="text-sm">
                        <strong>{slot.date}</strong> | {slot.time} | {slot.location}
                      </p>
                    </div>
                  ) : null;
                })}
            </div>
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Slot Tersedia</h2>
          
          {slots.length === 0 ? (
            <p className="text-gray-600">Tiada slot tersedia pada masa ini.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {slots.map((slot) => (
                <div
                  key={slot.id}
                  className={`border rounded-lg p-4 ${
                    isSlotBooked(slot.id)
                      ? "border-gray-300 bg-gray-50"
                      : isSlotFull(slot)
                      ? "border-red-300 bg-red-50"
                      : "border-blue-300 bg-blue-50 hover:bg-blue-100"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{slot.location}</h3>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        isSlotFull(slot)
                          ? "bg-red-100 text-red-800"
                          : isSlotBooked(slot.id)
                          ? "bg-gray-100 text-gray-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {isSlotFull(slot)
                        ? "Penuh"
                        : isSlotBooked(slot.id)
                        ? "Dipilih"
                        : "Tersedia"}
                    </span>
                  </div>
                  
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Tarikh:</strong> {slot.date}</p>
                    <p><strong>Masa:</strong> {slot.time}</p>
                    <p><strong>Kapasiti:</strong> {slot.currentBookings}/{slot.maxStudents} pelajar</p>
                  </div>

                  <button
                    onClick={() => handleBookSlot(slot.id)}
                    disabled={isSlotBooked(slot.id) || isSlotFull(slot) || booking === slot.id}
                    className={`mt-3 w-full py-2 px-4 rounded text-sm font-medium transition-colors ${
                      isSlotBooked(slot.id) || isSlotFull(slot)
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : booking === slot.id
                        ? "bg-yellow-500 text-white"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {booking === slot.id
                      ? "Memproses..."
                      : isSlotBooked(slot.id)
                      ? "Sudah Dipilih"
                      : isSlotFull(slot)
                      ? "Penuh"
                      : "Pilih Slot"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

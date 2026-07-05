"use client";

import { useState, useEffect, useRef } from "react";
import { collection, query, where, onSnapshot, doc, updateDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { QRCodeCanvas } from "qrcode.react";

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
  const [hasApprovedApplication, setHasApprovedApplication] = useState(false);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState<string | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!auth.currentUser) return;

    // Fetch user's approved applications
    const applicationsQuery = query(
      collection(db, "applications"),
      where("userEmail", "==", auth.currentUser.email),
      where("status", "==", "approved")
    );

    const unsubscribeApplications = onSnapshot(applicationsQuery, (snapshot) => {
      setHasApprovedApplication(!snapshot.empty);
    });

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
      unsubscribeApplications();
      unsubscribeSlots();
      unsubscribeBookings();
    };
  }, []);

  const handleBookSlot = async (slotId: string) => {
    if (!auth.currentUser) return;

    // Check if user already has a booking
    const existingBooking = userBookings.find(booking => 
      booking.status === "approved" || booking.status === "pending"
    );

    if (existingBooking) {
      // Show QR code for existing booking instead of alerting
      const bookedSlot = slots.find(s => s.id === existingBooking.slotId);
      if (bookedSlot) {
        setSelectedSlot(bookedSlot);
        setShowQRCode(true);
      }
      return;
    }

    setBooking(slotId);
    try {
      // Add booking
      const bookingRef = await addDoc(collection(db, "bookings"), {
        slotId,
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        status: "approved",
        createdAt: serverTimestamp()
      });

      // Update slot current bookings
      const slotRef = doc(db, "slots", slotId);
      const slot = slots.find(s => s.id === slotId);
      if (slot) {
        await updateDoc(slotRef, {
          currentBookings: slot.currentBookings + 1
        });
        setSelectedSlot(slot);
        setShowQRCode(true);
      }

      setBooking(null);
    } catch (error) {
      console.error("Error booking slot:", error);
      alert("Gagal memilih slot. Sila cuba lagi.");
      setBooking(null);
    }
  };

  const downloadQRCode = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = `qr-code-${selectedSlot?.date}-${selectedSlot?.time}.png`;
      link.click();
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

  if (!hasApprovedApplication) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Pilih Slot Pengambilan</h1>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-600">Tiada permohonan yang telah lulus.</p>
          </div>
        </div>
      </div>
    );
  }

  // Check if user already has a booking
  const existingBooking = userBookings.find(b => b.status === "approved" || b.status === "pending");
  if (existingBooking && !showQRCode) {
    const bookedSlot = slots.find(s => s.id === existingBooking.slotId);
    if (bookedSlot) {
      setSelectedSlot(bookedSlot);
      setShowQRCode(true);
    }
  }

  if (showQRCode && selectedSlot) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Pilih Slot Pengambilan</h1>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="mb-6">
              <div ref={qrRef} className="flex justify-center mb-4">
                <QRCodeCanvas 
                  value={`BOOKING:${auth.currentUser?.email}:${selectedSlot.id}:${selectedSlot.date}:${selectedSlot.time}:${selectedSlot.location}`}
                  size={200}
                  level="H"
                />
              </div>
              <button
                onClick={downloadQRCode}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mb-6"
              >
                Muat Turun Kod QR
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Butiran Pengambilan</h2>
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-medium">Tarikh:</span> {selectedSlot.date}</p>
                <p className="text-gray-700"><span className="font-medium">Masa:</span> {selectedSlot.time}</p>
                <p className="text-gray-700"><span className="font-medium">Lokasi:</span> {selectedSlot.location}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Sila tunjukkan kod QR ini semasa pengambilan.
            </p>
          </div>
        </div>
      </div>
    );
  }

return (
  <div className="min-h-screen bg-gray-100 py-10 px-4">
    <div className="max-w-6xl mx-auto">

      {/* Page Header Box */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600">
          Pilih Slot Pengambilan
        </h1>
        <p className="text-gray-500 mt-1">
          Sila pilih slot yang sesuai untuk pengambilan
        </p>
      </div>

      {/* Selected Slot */}
      {userBookings.some(b => b.status === "approved") && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
          <p className="font-semibold text-green-700 mb-2">
            Slot Dipilih
          </p>
          {userBookings
            .filter(b => b.status === "approved")
            .map(booking => {
              const slot = slots.find(s => s.id === booking.slotId);
              return slot ? (
                <div key={booking.id} className="text-sm text-gray-700">
                  {slot.date} | {slot.time} | {slot.location}
                </div>
              ) : null;
            })}
        </div>
      )}

      {/* Main Content Box */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Slot Tersedia
        </h2>

        {slots.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            Tiada slot tersedia
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {slots.map((slot) => {
              const full = isSlotFull(slot);
              const booked = isSlotBooked(slot.id);
              const percent =
                (slot.currentBookings / slot.maxStudents) * 100;

              return (
                <div
                  key={slot.id}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5 hover:shadow-md transition"
                >
                  {/* Header */}
                  <div className="flex justify-between mb-3">
                    <h3 className="font-semibold text-gray-800">
                      {slot.location}
                    </h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        full
                          ? "bg-red-100 text-red-600"
                          : booked
                          ? "bg-gray-200 text-gray-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {full ? "Penuh" : booked ? "Dipilih" : "Tersedia"}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <p>Tarikh: {slot.date}</p>
                    <p>Masa: {slot.time}</p>
                  </div>

                  {/* Capacity Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Kapasiti</span>
                      <span>
                        {slot.currentBookings}/{slot.maxStudents}
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-blue-600"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => {
                      if (booked) {
                        // Show QR code for existing booking
                        setSelectedSlot(slot);
                        setShowQRCode(true);
                      } else {
                        handleBookSlot(slot.id);
                      }
                    }}
                    disabled={full || booking === slot.id}
                    className={`w-full py-2.5 rounded-lg font-medium ${
                      full
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : booked
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : booking === slot.id
                        ? "bg-yellow-500 text-white"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {booking === slot.id
                      ? "Memproses..."
                      : booked
                      ? "Lihat Butiran"
                      : full
                      ? "Penuh"
                      : "Pilih Slot"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  </div>
);
}

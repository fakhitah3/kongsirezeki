"use client";

import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, doc, updateDoc, addDoc, serverTimestamp, getDocs } from "firebase/firestore";
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

interface Booking {
  id: string;
  slotId: string;
  userId: string;
  applicationId: string;
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
      // Find user's approved or assigned application to get applicationId
      const applicationsQuery = query(
        collection(db, "applications"),
        where("userEmail", "==", auth.currentUser.email),
        where("status", "in", ["approved", "assigned"])
      );
      const applicationsSnapshot = await getDocs(applicationsQuery);
      const approvedApplication = applicationsSnapshot.docs[0];
      
      if (!approvedApplication) {
        alert("Tiada permohonan yang diluluskan dijumpai.");
        setBooking(null);
        return;
      }

      const applicationId = approvedApplication.data().applicationId || approvedApplication.id;
      const applicationStatus = approvedApplication.data().status;

      // If application is already assigned, show existing booking instead
      if (applicationStatus === "assigned") {
        alert("Anda telah memilih slot untuk permohonan ini. Sila lihat kupon sedia ada.");
        setBooking(null);
        
        // Show existing booking coupon
        const existingBooking = userBookings.find(b => b.applicationId === applicationId);
        if (existingBooking) {
          const bookedSlot = slots.find(s => s.id === existingBooking.slotId);
          if (bookedSlot) {
            setSelectedSlot(bookedSlot);
            setShowQRCode(true);
          }
        }
        return;
      }

      // Add booking with applicationId
      const bookingRef = await addDoc(collection(db, "bookings"), {
        slotId,
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        applicationId,
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
      }

      // Update application status to assigned
      await updateDoc(doc(db, "applications", approvedApplication.id), {
        status: "assigned",
        updatedAt: serverTimestamp()
      });

      if (slot) {
        setSelectedSlot(slot);
      }
      setShowQRCode(true);
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
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Coupon Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <h2 className="text-2xl font-bold text-center">Kupon Pengambilan</h2>
              <p className="text-center text-blue-100 mt-1">Kongsi Rezeki</p>
            </div>
            
            {/* Coupon Body */}
            <div className="p-8">
              {/* Dashed line */}
              <div className="border-t-2 border-dashed border-gray-300 my-6 relative">
                <div className="absolute -left-3 -top-3 w-6 h-6 bg-gray-50 rounded-full"></div>
                <div className="absolute -right-3 -top-3 w-6 h-6 bg-gray-50 rounded-full"></div>
              </div>

              {/* Booking Details */}
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Butiran Pengambilan</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tarikh:</span>
                    <span className="font-medium text-gray-900">{selectedSlot.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Masa:</span>
                    <span className="font-medium text-gray-900">{selectedSlot.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lokasi:</span>
                    <span className="font-medium text-gray-900">{selectedSlot.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium text-gray-900">{auth.currentUser?.email}</span>
                  </div>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
                <p className="text-sm text-gray-600 mb-2">Kod Kupon</p>
                <p className="text-xl font-mono font-bold text-gray-900 tracking-wider">
                  {auth.currentUser?.email?.split('@')[0].toUpperCase()}-{selectedSlot.date.replace(/-/g, '')}-{selectedSlot.time.replace(':', '')}
                </p>
              </div>

              {/* Instructions */}
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Sila tunjukkan kupon ini semasa pengambilan.
                </p>
              </div>
            </div>

            {/* Coupon Footer */}
            <div className="bg-gray-100 p-4 text-center">
              <button
                onClick={() => {
                  setShowQRCode(false);
                  setSelectedSlot(null);
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Kembali
              </button>
            </div>
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

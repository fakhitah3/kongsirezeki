"use client";

import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, doc, updateDoc, addDoc, serverTimestamp, getDocs, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { QRCodeSVG } from "qrcode.react";
import { useRouter } from "next/navigation";

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
  const [completedSlot, setCompletedSlot] = useState<{ location: string; date: string; time: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState<string | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [studentName, setStudentName] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) return;

    // Fetch student name from Firestore
    getDoc(doc(db, "users", auth.currentUser.uid)).then((snap) => {
      if (snap.exists()) setStudentName(snap.data().name || auth.currentUser?.displayName || "");
    });

    // Fetch user's approved applications
    const applicationsQuery = query(
      collection(db, "applications"),
      where("userEmail", "==", auth.currentUser.email),
      where("status", "==", "approved")
    );

    const unsubscribeApplications = onSnapshot(applicationsQuery, (snapshot) => {
      setHasApprovedApplication(!snapshot.empty);
    });

    // Fetch completed application with slot details (already picked a slot)
    const completedQuery = query(
      collection(db, "applications"),
      where("userEmail", "==", auth.currentUser.email),
      where("status", "==", "completed")
    );

    const unsubscribeCompleted = onSnapshot(completedQuery, (snapshot) => {
      if (!snapshot.empty) {
        const data = snapshot.docs[0].data();
        if (data.slotLocation && data.slotDate && data.slotTime) {
          setCompletedSlot({ location: data.slotLocation, date: data.slotDate, time: data.slotTime });
        }
      } else {
        setCompletedSlot(null);
      }
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
      unsubscribeCompleted();
      unsubscribeSlots();
      unsubscribeBookings();
    };
  }, []);

  const handleBookSlot = async (slotId: string) => {
    if (!auth.currentUser) return;

    setBooking(slotId);
    try {
      // Find user's approved or assigned application to get applicationId
      const applicationsQuery = query(
        collection(db, "applications"),
        where("userEmail", "==", auth.currentUser.email),
        where("status", "==", "approved")
      );
      const applicationsSnapshot = await getDocs(applicationsQuery);
      const approvedApplication = applicationsSnapshot.docs[0];
      
      if (!approvedApplication) {
        alert("Tiada permohonan yang diluluskan dijumpai.");
        setBooking(null);
        return;
      }

      const applicationId = approvedApplication.data().applicationId || approvedApplication.id;

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

      // Update application status to completed and store slot details
      await updateDoc(doc(db, "applications", approvedApplication.id), {
        status: "completed",
        slotId,
        slotLocation: slot?.location ?? "",
        slotDate: slot?.date ?? "",
        slotTime: slot?.time ?? "",
        updatedAt: serverTimestamp()
      });

      if (slot) {
        setSelectedSlot(slot);
      }
      setShowSuccessDialog(true);
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
          {completedSlot ? (
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">Slot Telah Dipilih</h2>
                  <p className="text-sm text-gray-500">Anda telah berjaya memilih slot pengambilan</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Lokasi</span>
                  <span className="font-semibold text-gray-800">{completedSlot.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Tarikh</span>
                  <span className="font-semibold text-gray-800">{completedSlot.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Masa</span>
                  <span className="font-semibold text-gray-800">{completedSlot.time}</span>
                </div>
              </div>
              <button
                onClick={() => router.push("/records")}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Lihat Rekod Bantuan
              </button>
            </div>
          ) : (
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <p className="text-gray-600">Tiada permohonan yang telah lulus.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (showQRCode && selectedSlot) {
    const qrData = JSON.stringify({
      nama: studentName || auth.currentUser?.email,
      lokasi: selectedSlot.location,
      tarikh: selectedSlot.date,
      masa: selectedSlot.time,
    });

    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">Pilih Slot Pengambilan</h1>
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            {/* Coupon Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <h2 className="text-2xl font-bold text-center">Kupon Pengambilan</h2>
              <p className="text-center text-blue-100 mt-1">Kongsi Rezeki</p>
            </div>

            {/* Coupon Body */}
            <div className="p-8">
              {/* QR Code */}
              <div className="flex justify-center mb-6">
                <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100">
                  <QRCodeSVG value={qrData} size={180} />
                </div>
              </div>
              <p className="text-center text-xs text-gray-400 mb-6">Imbas kod QR ini semasa pengambilan</p>

              {/* Dashed divider */}
              <div className="border-t-2 border-dashed border-gray-300 my-6 relative">
                <div className="absolute -left-8 -top-3 w-6 h-6 bg-gray-50 rounded-full border border-gray-200"></div>
                <div className="absolute -right-8 -top-3 w-6 h-6 bg-gray-50 rounded-full border border-gray-200"></div>
              </div>

              {/* Booking Details */}
              <div className="bg-blue-50 rounded-xl p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Nama Pelajar</span>
                  <span className="font-semibold text-gray-900">{studentName || auth.currentUser?.email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Lokasi</span>
                  <span className="font-semibold text-gray-900">{selectedSlot.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Tarikh</span>
                  <span className="font-semibold text-gray-900">{selectedSlot.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Masa</span>
                  <span className="font-semibold text-gray-900">{selectedSlot.time}</span>
                </div>
              </div>

              <p className="text-center text-sm text-gray-500 mt-6">
                Sila tunjukkan kupon ini semasa pengambilan.
              </p>
            </div>

            {/* Coupon Footer */}
            <div className="bg-gray-100 p-4 text-center">
              <button
                onClick={() => router.push("/records")}
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
  <>
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

  {/* Success Dialog */}
  {showSuccessDialog && selectedSlot && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
        <div className="p-6 text-center">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Slot Berjaya Dipilih!</h2>
          <p className="text-sm text-gray-500 mb-5">Butiran slot pengambilan anda:</p>
          <div className="bg-blue-50 rounded-xl p-4 text-left space-y-2.5 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Lokasi</span>
              <span className="font-semibold text-gray-800">{selectedSlot.location}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tarikh</span>
              <span className="font-semibold text-gray-800">{selectedSlot.date}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Masa</span>
              <span className="font-semibold text-gray-800">{selectedSlot.time}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => { setShowSuccessDialog(false); setShowQRCode(true); }}
              className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Lihat Kupon
            </button>
            <button
              onClick={() => router.push("/records")}
              className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Rekod Bantuan
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
  </>
);
}

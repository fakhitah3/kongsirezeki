"use client";

import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, orderBy, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  createdAt: any;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, "notifications"),
      where("userId", "==", auth.currentUser.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notifList: Notification[] = [];
      snapshot.forEach((doc) => {
        notifList.push({ id: doc.id, ...doc.data() } as Notification);
      });
      setNotifications(notifList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const markAsRead = async (notificationId: string) => {
    try {
      await updateDoc(doc(db, "notifications", notificationId), {
        read: true
      });
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const markAllAsRead = async () => {
    try {
      const unreadNotifications = notifications.filter(n => !n.read);
      await Promise.all(
        unreadNotifications.map(n => updateDoc(doc(db, "notifications", n.id), { read: true }))
      );
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "approved":
        return "bg-green-50 border-green-200";
      case "rejected":
        return "bg-red-50 border-red-200";
      default:
        return "bg-blue-50 border-blue-200";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Notifikasi</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Notifikasi</h1>
          {notifications.some(n => !n.read) && (
            <button
              onClick={markAllAsRead}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
            >
              Tandakan Semua Dibaca
            </button>
          )}
        </div>

        {notifications.length === 0 ? (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-500">
              Tiada notifikasi.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border ${
                  notification.read ? "border-gray-200 opacity-70" : "border-blue-300"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {!notification.read && (
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      )}
                      <h3 className="text-lg font-bold text-gray-900">
                        {notification.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500">
                      {notification.createdAt?.toDate()?.toLocaleDateString("ms-MY", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </p>
                  </div>
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="ml-4 bg-gray-100 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200 text-sm"
                    >
                      Tandakan Dibaca
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

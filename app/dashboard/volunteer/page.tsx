"use client";

import { useState, useEffect } from "react";
import { collection, query, where, orderBy, getDocs, onSnapshot, limit } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Task {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  status: "assigned" | "in_progress" | "completed";
  assignedTo?: string;
  assignedToName?: string;
  createdAt: any;
}

interface Attendance {
  id: string;
  taskId: string;
  volunteerId: string;
  volunteerName: string;
  status: "hadir" | "tidak_hadir" | "menunggu";
  checkInTime?: string;
  notes?: string;
  date: string;
}

interface Schedule {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  volunteers: string[];
  maxVolunteers: number;
  status: "upcoming" | "ongoing" | "completed";
}

export default function VolunteerDashboard() {
  const [activeTasks, setActiveTasks] = useState<Task[]>([]);
  const [attendance, setAttendance] = useState<Attendance[]>([]);
  const [schedule, setSchedule] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        // Fetch active tasks
        const tasksQuery = query(
          collection(db, "tasks"),
          where("assignedTo", "==", user.uid),
          where("status", "in", ["assigned", "in_progress"]),
          orderBy("date", "asc")
        );
        const tasksSnapshot = await getDocs(tasksQuery);
        const tasksData = tasksSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Task));
        setActiveTasks(tasksData);

        // Fetch attendance records
        const attendanceQuery = query(
          collection(db, "attendance"),
          where("volunteerId", "==", user.uid),
          orderBy("date", "desc"),
          limit(10)
        );
        const attendanceSnapshot = await getDocs(attendanceQuery);
        const attendanceData = attendanceSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Attendance));
        setAttendance(attendanceData);

        // Fetch distribution schedule
        const scheduleQuery = query(
          collection(db, "schedule"),
          where("volunteers", "array-contains", user.uid),
          orderBy("date", "asc"),
          limit(5)
        );
        const scheduleSnapshot = await getDocs(scheduleQuery);
        const scheduleData = scheduleSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Schedule));
        setSchedule(scheduleData);

      } catch (error) {
        console.error("Error fetching volunteer data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "assigned":
        return "bg-blue-100 text-blue-800";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "hadir":
        return "bg-green-100 text-green-800";
      case "tidak_hadir":
        return "bg-red-100 text-red-800";
      case "menunggu":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "assigned":
        return "Diberikan";
      case "in_progress":
        return "Sedang Dijalankan";
      case "completed":
        return "Selesai";
      case "hadir":
        return "Hadir";
      case "tidak_hadir":
        return "Tidak Hadir";
      case "menunggu":
        return "Menunggu";
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ms-MY', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-10 px-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-3">
            Dashboard Sukarelawan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pengurusan tugasan, status kehadiran, dan jadual pengagihan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tugasan Aktif */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1h8a1 1 0 011 1v1H7a1 1 0 00-1 1V3z" clipRule="evenodd" />
              </svg>
              Tugasan Aktif
            </h2>
            
            <div className="space-y-4">
              {activeTasks.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 000-2h2a1 1 0 000 2v2a1 1 0 001.414 1.414L10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                  </svg>
                  Tiada tugasan aktif
                </div>
              ) : (
                activeTasks.map((task) => (
                  <div key={task.id} className="border-l-4 border-blue-600 pl-4 py-3">
                    <div className="font-semibold text-gray-800 mb-1">{task.title}</div>
                    <div className="text-sm text-gray-600 mb-2">{task.description}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        📍 {task.location} • 📅 {formatDate(task.date)} • 🕐 {task.time}
                      </div>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(task.status)}`}>
                        {getStatusText(task.status)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Status Kehadiran */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
              </svg>
              Status Kehadiran
            </h2>
            
            <div className="space-y-3">
              {attendance.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 000-2h2a1 1 0 000 2v2a1 1 0 001.414 1.414L10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                  </svg>
                  Tiada rekod kehadiran
                </div>
              ) : (
                attendance.map((record) => (
                  <div key={record.id} className="border-l-4 border-green-600 pl-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-gray-800">{record.taskId}</div>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(record.status)}`}>
                        {getStatusText(record.status)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      📅 {formatDate(record.date)}
                      {record.checkInTime && ` • 🕐 ${record.checkInTime}`}
                    </div>
                    {record.notes && (
                      <div className="text-sm text-gray-500 mt-1">📝 {record.notes}</div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Jadual Pengagihan */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1h8a1 1 0 011 1v1H7a1 1 0 00-1 1V3z" clipRule="evenodd" />
              </svg>
              Jadual Pengagihan
            </h2>
            
            <div className="space-y-4">
              {schedule.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 000-2h2a1 1 0 000 2v2a1 1 0 001.414 1.414L10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                  </svg>
                  Tiada jadual pengagihan
                </div>
              ) : (
                schedule.map((item) => (
                  <div key={item.id} className="border-l-4 border-purple-600 pl-4 py-3">
                    <div className="font-semibold text-gray-800 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600 mb-2">{item.description}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        📍 {item.location} • 📅 {formatDate(item.date)} • 🕐 {item.time}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                          {getStatusText(item.status)}
                        </span>
                        <span className="text-xs text-gray-500">
                          {item.volunteers.length}/{item.maxVolunteers} sukarelawan
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

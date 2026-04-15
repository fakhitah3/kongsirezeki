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
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Selamat Datang, Sukarelawan
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Terima kasih kerana menjadi sebahagian daripada komuniti kami. Di sini anda boleh mengurus tugasan, semak status kehadiran, dan lihat jadual pengagihan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tugasan Aktif */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-6">
              Tugasan Aktif
            </h2>
            
            <div className="space-y-4">
              {activeTasks.length === 0 ? (
                <div className="text-center py-8 bg-blue-50 rounded-lg">
                  <div className="text-lg mb-3 text-blue-500 font-medium">Tiada tugasan</div>
                  <p className="text-gray-600 font-medium">Tiada tugasan aktif buat masa ini</p>
                  <p className="text-sm text-gray-500 mt-1">Rehat seketika, tugasan baharu akan datang!</p>
                </div>
              ) : (
                activeTasks.map((task) => (
                  <div key={task.id} className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors">
                    <div className="font-bold text-gray-900 mb-2 text-lg">{task.title}</div>
                    <div className="text-gray-700 mb-3">{task.description}</div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Lokasi:</span> {task.location}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Tarikh:</span> {formatDate(task.date)}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Masa:</span> {task.time}
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(task.status)}`}>
                        {getStatusText(task.status)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Status Kehadiran */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <h2 className="text-xl font-bold text-green-700 mb-6">
              Status Kehadiran
            </h2>
            
            <div className="space-y-3">
              {attendance.length === 0 ? (
                <div className="text-center py-8 bg-green-50 rounded-lg">
                  <div className="text-lg mb-3 text-green-500 font-medium">Tiada rekod</div>
                  <p className="text-gray-600 font-medium">Belum ada rekod kehadiran</p>
                  <p className="text-sm text-gray-500 mt-1">Rekod akan dipaparkan di sini</p>
                </div>
              ) : (
                attendance.map((record) => (
                  <div key={record.id} className="bg-green-50 rounded-lg p-4 hover:bg-green-100 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-gray-900">{record.taskId}</div>
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(record.status)}`}>
                        {getStatusText(record.status)}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Tarikh:</span> {formatDate(record.date)}
                      </div>
                      {record.checkInTime && (
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Masa Check-in:</span> {record.checkInTime}
                        </div>
                      )}
                      {record.notes && (
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Catatan:</span> {record.notes}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Jadual Pengagihan */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <h2 className="text-xl font-bold text-purple-700 mb-6">
              Jadual Pengagihan
            </h2>
            
            <div className="space-y-4">
              {schedule.length === 0 ? (
                <div className="text-center py-8 bg-purple-50 rounded-lg">
                  <div className="text-lg mb-3 text-purple-500 font-medium">Tiada jadual</div>
                  <p className="text-gray-600 font-medium">Tiada jadual pengagihan</p>
                  <p className="text-sm text-gray-500 mt-1">Jadual akan dikemaskini dari masa ke semasa</p>
                </div>
              ) : (
                schedule.map((item) => (
                  <div key={item.id} className="bg-purple-50 rounded-lg p-4 hover:bg-purple-100 transition-colors">
                    <div className="font-bold text-gray-900 mb-2 text-lg">{item.title}</div>
                    <div className="text-gray-700 mb-3">{item.description}</div>
                    <div className="space-y-2 mb-3">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Lokasi:</span> {item.location}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Tarikh:</span> {formatDate(item.date)}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Masa:</span> {item.time}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                      <span className="text-sm text-gray-600 font-medium">
                        {item.volunteers.length}/{item.maxVolunteers} sukarelawan
                      </span>
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

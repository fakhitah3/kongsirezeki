"use client";

import { useState, useEffect } from "react";
import { collection, query, where, orderBy, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Task {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  duration: string;
  requirements: string;
  maxVolunteers: number;
  currentVolunteers: number;
  status: "open" | "closed" | "completed";
  createdAt: any;
}

interface Application {
  id: string;
  taskId: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  status: "pending" | "approved" | "rejected";
  appliedAt: any;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [userApplications, setUserApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [applying, setApplying] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch available tasks
        const tasksQuery = query(
          collection(db, "tasks"),
          where("status", "in", ["open", "closed"]),
          orderBy("date", "asc")
        );
        const tasksSnapshot = await getDocs(tasksQuery);
        const tasksData = tasksSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Task));
        setTasks(tasksData);

        // Fetch user's applications if logged in
        if (user) {
          const applicationsQuery = query(
            collection(db, "taskApplications"),
            where("studentId", "==", user.uid),
            orderBy("appliedAt", "desc")
          );
          const applicationsSnapshot = await getDocs(applicationsQuery);
          const applicationsData = applicationsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          } as Application));
          setUserApplications(applicationsData);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleApply = async (taskId: string) => {
    if (!user) {
      alert("Sila log masuk terlebih dahulu untuk memohon tugasan.");
      return;
    }

    try {
      setApplying(taskId);
      
      // Check if already applied
      const alreadyApplied = userApplications.some(app => app.taskId === taskId);
      if (alreadyApplied) {
        alert("Anda sudah memohon tugasan ini.");
        setApplying(null);
        return;
      }

      // Create application
      await addDoc(collection(db, "taskApplications"), {
        taskId,
        studentId: user.uid,
        studentName: user.displayName || "Pelajar",
        studentEmail: user.email || "",
        status: "pending",
        appliedAt: serverTimestamp()
      });

      alert("Permohonan tugasan berjaya dihantar!");
      setApplying(null);
      
      // Refresh applications
      const applicationsQuery = query(
        collection(db, "taskApplications"),
        where("studentId", "==", user.uid),
        orderBy("appliedAt", "desc")
      );
      const applicationsSnapshot = await getDocs(applicationsQuery);
      const applicationsData = applicationsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Application));
      setUserApplications(applicationsData);
      
    } catch (error) {
      console.error("Error applying for task:", error);
      alert("Gagal menghantar permohonan. Sila cuba lagi.");
      setApplying(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-red-100 text-red-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "approved":
        return "bg-blue-100 text-blue-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "Buka";
      case "closed":
        return "Ditutup";
      case "completed":
        return "Selesai";
      case "pending":
        return "Menunggu";
      case "approved":
        return "Diluluskan";
      case "rejected":
        return "Ditolak";
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

  const hasApplied = (taskId: string) => {
    return userApplications.some(app => app.taskId === taskId);
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
            Senarai Tugasan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Paparan tugasan sukarelawan yang tersedia untuk pelajar.
          </p>
        </div>

        {!user && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-6 py-4 rounded-lg mb-8 text-center">
            <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
            </svg>
            Sila log masuk untuk memohon tugasan
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Available Tasks */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-xl rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1h8a1 1 0 011 1v1H7a1 1 0 00-1 1V3z" clipRule="evenodd" />
                </svg>
                Tugasan Tersedia
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tasks.length === 0 ? (
                  <div className="col-span-full text-center py-12 text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 2a1 1 0 000-2h2a1 1 0 000 2v2a1 1 0 001.414 1.414L10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                    </svg>
                    Tiada tugasan tersedia pada masa ini
                  </div>
                ) : (
                  tasks.map((task) => (
                    <div key={task.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-800 flex-1">{task.title}</h3>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(task.status)}`}>
                          {getStatusText(task.status)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div>📍 {task.location}</div>
                        <div>📅 {formatDate(task.date)}</div>
                        <div>🕐 {task.time}</div>
                        <div>⏱️ {task.duration}</div>
                        <div>👥 {task.currentVolunteers}/{task.maxVolunteers} sukarelawan</div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{task.description}</p>
                      
                      {task.requirements && (
                        <div className="bg-blue-50 p-3 rounded-lg mb-4">
                          <div className="text-sm font-semibold text-blue-800 mb-1">Keperluan:</div>
                          <div className="text-sm text-blue-700">{task.requirements}</div>
                        </div>
                      )}
                      
                      {user && (
                        <button
                          onClick={() => handleApply(task.id)}
                          disabled={hasApplied(task.id) || applying === task.id || task.status !== "open"}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        >
                          {applying === task.id ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Memohon...
                            </span>
                          ) : hasApplied(task.id) ? (
                            <span className="flex items-center justify-center">
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010-1.414l-8-8a1 1 0 00-1.414 0L8.586 4.293a1 1 0 101.414 1.414L10 6.586l7.293 7.293a1 1 0 001.414 0z" clipRule="evenodd" />
                              </svg>
                              Telah Dipohon
                            </span>
                          ) : task.status !== "open" ? (
                            <span className="flex items-center justify-center">
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                              </svg>
                              Tugasan Ditutup
                            </span>
                          ) : (
                            <span className="flex items-center justify-center">
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                              </svg>
                              Mohon Sekarang
                            </span>
                          )}
                        </button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* My Applications */}
          {user && (
            <div className="lg:col-span-1">
              <div className="bg-white shadow-xl rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                  </svg>
                  Permohonan Saya
                </h2>
                
                <div className="space-y-3">
                  {userApplications.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 2a1 1 0 000-2h2a1 1 0 000 2v2a1 1 0 001.414 1.414L10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                      </svg>
                      Belum memohon sebarang tugasan
                    </div>
                  ) : (
                    userApplications.map((application) => (
                      <div key={application.id} className="border-l-4 border-purple-600 pl-4 py-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-gray-800">Tugasan #{application.taskId}</div>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(application.status)}`}>
                            {getStatusText(application.status)}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          📅 Dipohon pada: {application.appliedAt?.toDate?.() ? 
                            application.appliedAt.toDate().toLocaleDateString("ms-MY") : 
                            new Date(application.appliedAt).toLocaleDateString("ms-MY")
                          }
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

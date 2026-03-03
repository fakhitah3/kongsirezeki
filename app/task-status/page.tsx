"use client";

import { useState, useEffect } from "react";
import { collection, query, where, orderBy, getDocs, updateDoc, doc, serverTimestamp } from "firebase/firestore";
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

export default function TaskStatusPage() {
  const [approvedApplications, setApprovedApplications] = useState<Application[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [updating, setUpdating] = useState<string | null>(null);

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
        // Fetch approved applications for this user
        const applicationsQuery = query(
          collection(db, "taskApplications"),
          where("studentId", "==", user.uid),
          where("status", "==", "approved"),
          orderBy("appliedAt", "desc")
        );
        const applicationsSnapshot = await getDocs(applicationsQuery);
        const applicationsData = applicationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Application));
        setApprovedApplications(applicationsData);

        // Fetch task details for approved applications
        const taskIds = applicationsData.map(app => app.taskId);
        if (taskIds.length > 0) {
          const tasksQuery = query(
            collection(db, "tasks"),
            where("__name__", "in", taskIds)
          );
          const tasksSnapshot = await getDocs(tasksQuery);
          const tasksData = tasksSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          } as Task));
          setTasks(tasksData);
        }
      } catch (error) {
        console.error("Error fetching task data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleStatusUpdate = async (applicationId: string, newStatus: "completed") => {
    try {
      setUpdating(applicationId);
      
      await updateDoc(doc(db, "taskApplications", applicationId), {
        status: newStatus,
        updatedAt: serverTimestamp()
      });

      alert("Status tugasan berjaya dikemaskini!");
      setUpdating(null);
      
      // Refresh the applications list
      const applicationsQuery = query(
        collection(db, "taskApplications"),
        where("studentId", "==", user.uid),
        where("status", "==", "approved"),
        orderBy("appliedAt", "desc")
      );
      const applicationsSnapshot = await getDocs(applicationsQuery);
      const applicationsData = applicationsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Application));
      setApprovedApplications(applicationsData);
      
    } catch (error) {
      console.error("Error updating task status:", error);
      alert("Gagal mengemaskini status. Sila cuba lagi.");
      setUpdating(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "approved":
        return "Diluluskan";
      case "completed":
        return "Selesai";
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

  const getTaskDetails = (taskId: string) => {
    return tasks.find(task => task.id === taskId);
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
            Update Status Tugasan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kemaskini status tugasan yang telah diluluskan.
          </p>
        </div>

        {!user && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-6 py-4 rounded-lg mb-8 text-center">
            <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
            </svg>
            Sila log masuk untuk mengemaskini status tugasan
          </div>
        )}

        {approvedApplications.length === 0 ? (
          <div className="bg-white shadow-xl rounded-2xl p-12 text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9 2a1 1 0 000-2h2a1 1 0 000 2v2a1 1 0 001.414 1.414L10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Tiada Tugasan Diluluskan</h3>
            <p className="text-gray-600">
              Anda belum mempunyai tugasan yang diluluskan. Sila memohon tugasan terlebih dahulu.
            </p>
            <button
              onClick={() => window.location.href = '/tasks'}
              className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Lihat Tugasan Tersedia
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
              </svg>
              Tugasan Diluluskan
            </h2>
            
            <div className="space-y-6">
              {approvedApplications.map((application) => {
                const task = getTaskDetails(application.taskId);
                return (
                  <div key={application.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {task?.title || `Tugasan #${application.taskId}`}
                        </h3>
                        <div className="flex items-center space-x-3 text-sm">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(application.status)}`}>
                            {getStatusText(application.status)}
                          </span>
                          <span className="text-gray-500">
                            Dipohon pada: {application.appliedAt?.toDate?.() ? 
                              application.appliedAt.toDate().toLocaleDateString("ms-MY") : 
                              new Date(application.appliedAt).toLocaleDateString("ms-MY")
                            }
                          </span>
                        </div>
                      </div>
                      
                      {application.status === "approved" && (
                        <button
                          onClick={() => handleStatusUpdate(application.id, "completed")}
                          disabled={updating === application.id}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          {updating === application.id ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Mengemaskini...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010-1.414l-8-8a1 1 0 00-1.414 0L8.586 4.293a1 1 0 101.414 1.414L10 6.586l7.293 7.293a1 1 0 001.414 0z" clipRule="evenodd" />
                              </svg>
                              Tandakan Selesai
                            </span>
                          )}
                        </button>
                      )}
                    </div>
                    
                    {task && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium text-gray-700">Lokasi:</span> {task.location}
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Tarikh:</span> {formatDate(task.date)}
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Masa:</span> {task.time}
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Tempoh:</span> {task.duration}
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Sukarelawan:</span> {task.currentVolunteers}/{task.maxVolunteers}
                        </div>
                      </div>
                    )}
                    
                    {task?.description && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="font-medium text-gray-700 mb-2">Penerangan:</div>
                        <p className="text-gray-600">{task.description}</p>
                      </div>
                    )}
                    
                    {task?.requirements && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="font-medium text-gray-700 mb-2">Keperluan:</div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="text-sm text-blue-700">{task.requirements}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

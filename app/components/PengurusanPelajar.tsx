"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy, where, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Student {
  id: string;
  email: string;
  role: string;
  name?: string;
  phone?: string;
  address?: string;
  faculty?: string;
  semester?: string;
  createdAt: any;
  lastLogin?: any;
  status?: string;
}

export default function PengurusanPelajar() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    faculty: "all",
    semester: "all",
    status: "all"
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "users"),
      where("role", "==", "pelajar")
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const studentList: Student[] = [];
      snapshot.forEach((doc) => {
        studentList.push({ id: doc.id, ...doc.data() } as Student);
      });
      setStudents(studentList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredStudents = students.filter(student => {
    const facultyMatch = filter.faculty === "all" || student.faculty === filter.faculty;
    const semesterMatch = filter.semester === "all" || student.semester === filter.semester;
    const statusMatch = filter.status === "all" || student.status === filter.status;
    const searchMatch = searchTerm === "" || 
      student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.phone?.includes(searchTerm);
    
    return facultyMatch && semesterMatch && statusMatch && searchMatch;
  });

  const handleStatusUpdate = async (studentId: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, "users", studentId), {
        status: newStatus,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error("Error updating student status:", error);
      alert("Gagal mengemaskini status pelajar.");
    }
  };

  const handleDelete = async (studentId: string) => {
    if (!confirm("Adakah anda pasti ingin memadam pelajar ini? Tindakan ini tidak boleh dibatalkan.")) return;

    try {
      await deleteDoc(doc(db, "users", studentId));
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Gagal memadam pelajar. Sila cuba lagi.");
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "aktif":
        return "bg-green-100 text-green-800 border-green-300";
      case "tidak_aktif":
        return "bg-red-100 text-red-800 border-red-300";
      case "ditangguhkan":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case "aktif": return "Aktif";
      case "tidak_aktif": return "Tidak Aktif";
      case "ditangguhkan": return "Ditangguhkan";
      default: return "Tidak Diketahui";
    }
  };

  const getFacultyList = () => {
    const faculties = [...new Set(students.map(s => s.faculty).filter(Boolean))];
    return faculties;
  };

  const getSemesterList = () => {
    const semesters = [...new Set(students.map(s => s.semester).filter(Boolean))];
    return semesters;
  };

  const totalStudents = filteredStudents.length;
  const activeStudents = filteredStudents.filter(s => s.status === "aktif").length;
  const inactiveStudents = filteredStudents.filter(s => s.status === "tidak_aktif").length;
  const suspendedStudents = filteredStudents.filter(s => s.status === "ditangguhkan").length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Pengurusan Pelajar</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Pengurusan Pelajar</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Jumlah Pelajar</h3>
            <p className="text-3xl font-bold text-blue-600">{totalStudents}</p>
            <p className="text-sm text-gray-600">Keseluruhan</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Aktif</h3>
            <p className="text-3xl font-bold text-green-600">{activeStudents}</p>
            <p className="text-sm text-gray-600">Pelajar aktif</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tidak Aktif</h3>
            <p className="text-3xl font-bold text-red-600">{inactiveStudents}</p>
            <p className="text-sm text-gray-600">Pelajar tidak aktif</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Ditangguhkan</h3>
            <p className="text-3xl font-bold text-yellow-600">{suspendedStudents}</p>
            <p className="text-sm text-gray-600">Pelajar ditangguhkan</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Carian</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Nama, email, atau telefon"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fakulti</label>
              <select
                value={filter.faculty}
                onChange={(e) => setFilter({...filter, faculty: e.target.value})}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="all">Semua Fakulti</option>
                {getFacultyList().map(faculty => (
                  <option key={faculty} value={faculty}>{faculty}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
              <select
                value={filter.semester}
                onChange={(e) => setFilter({...filter, semester: e.target.value})}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="all">Semua Semester</option>
                {getSemesterList().map(semester => (
                  <option key={semester} value={semester}>Semester {semester}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filter.status}
                onChange={(e) => setFilter({...filter, status: e.target.value})}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="all">Semua Status</option>
                <option value="aktif">Aktif</option>
                <option value="tidak_aktif">Tidak Aktif</option>
                <option value="ditangguhkan">Ditangguhkan</option>
              </select>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Maklumat Pelajar
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hubungan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Akademik
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tarikh Daftar
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tindakan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {student.name || "Tiada nama"}
                        </p>
                        <p className="text-xs text-gray-500">{student.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>
                        <p>{student.phone || "Tiada telefon"}</p>
                        <p className="text-xs text-gray-500 truncate max-w-[200px]">
                          {student.address || "Tiada alamat"}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>
                        <p>{student.faculty || "Tiada fakulti"}</p>
                        <p className="text-xs text-gray-500">
                          {student.semester ? `Semester ${student.semester}` : "Tiada semester"}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          student.status
                        )}`}
                      >
                        {getStatusText(student.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.createdAt?.toDate()?.toLocaleDateString("ms-MY")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <select
                          value={student.status || "tidak_aktif"}
                          onChange={(e) => handleStatusUpdate(student.id, e.target.value)}
                          className="border border-gray-300 rounded px-2 py-1 text-xs"
                        >
                          <option value="aktif">Aktif</option>
                          <option value="tidak_aktif">Tidak Aktif</option>
                          <option value="ditangguhkan">Ditangguhkan</option>
                        </select>
                        <button
                          onClick={() => handleDelete(student.id)}
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

        {filteredStudents.length === 0 && (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-600">Tiada pelajar dijumpai.</p>
          </div>
        )}
      </div>
    </div>
  );
}

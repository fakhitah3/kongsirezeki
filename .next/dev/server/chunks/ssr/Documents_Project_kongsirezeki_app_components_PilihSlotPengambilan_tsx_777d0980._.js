module.exports = [
"[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PilihSlotPengambilan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/lib/firebase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function PilihSlotPengambilan() {
    const [slots, setSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userBookings, setUserBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [booking, setBooking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser) return;
        // Fetch available slots
        const slotsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "slots"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])("status", "==", "available"));
        const unsubscribeSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(slotsQuery, (snapshot)=>{
            const slotList = [];
            snapshot.forEach((doc)=>{
                slotList.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setSlots(slotList);
        });
        // Fetch user's existing bookings
        const bookingsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "bookings"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])("userId", "==", __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser.uid));
        const unsubscribeBookings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(bookingsQuery, (snapshot)=>{
            const bookingList = [];
            snapshot.forEach((doc)=>{
                bookingList.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setUserBookings(bookingList);
            setLoading(false);
        });
        return ()=>{
            unsubscribeSlots();
            unsubscribeBookings();
        };
    }, []);
    const handleBookSlot = async (slotId)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser) return;
        // Check if user already has a booking
        const hasBooking = userBookings.some((booking)=>booking.status === "approved" && booking.slotId === slotId);
        if (hasBooking) {
            alert("Anda sudah memilih slot ini.");
            return;
        }
        setBooking(slotId);
        try {
            // Add booking
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "bookings"), {
                slotId,
                userId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser.uid,
                userEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser.email,
                status: "pending",
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            });
            // Update slot current bookings
            const slotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "slots", slotId);
            const slot = slots.find((s)=>s.id === slotId);
            if (slot) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(slotRef, {
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
    const isSlotBooked = (slotId)=>{
        return userBookings.some((booking)=>booking.status === "approved" && booking.slotId === slotId);
    };
    const isSlotFull = (slot)=>{
        return slot.currentBookings >= slot.maxStudents;
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-10 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-blue-700 mb-6",
                        children: "Pilih Slot Pengambilan"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Memuatkan..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-10 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-blue-700 mb-6",
                    children: "Pilih Slot Pengambilan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                userBookings.some((b)=>b.status === "approved") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-medium",
                            children: "Slot yang dipilih:"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: userBookings.filter((b)=>b.status === "approved").map((booking)=>{
                                const slot = slots.find((s)=>s.id === booking.slotId);
                                return slot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-3 rounded mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: slot.date
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                lineNumber: 149,
                                                columnNumber: 25
                                            }, this),
                                            " | ",
                                            slot.time,
                                            " | ",
                                            slot.location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                        lineNumber: 148,
                                        columnNumber: 23
                                    }, this)
                                }, booking.id, false, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                    lineNumber: 147,
                                    columnNumber: 21
                                }, this) : null;
                            })
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white shadow-lg rounded-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold mb-4",
                            children: "Slot Tersedia"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        slots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Tiada slot tersedia pada masa ini."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: slots.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `border rounded-lg p-4 ${isSlotBooked(slot.id) ? "border-gray-300 bg-gray-50" : isSlotFull(slot) ? "border-red-300 bg-red-50" : "border-blue-300 bg-blue-50 hover:bg-blue-100"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-gray-800",
                                                    children: slot.location
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-1 text-xs rounded-full ${isSlotFull(slot) ? "bg-red-100 text-red-800" : isSlotBooked(slot.id) ? "bg-gray-100 text-gray-800" : "bg-green-100 text-green-800"}`,
                                                    children: isSlotFull(slot) ? "Penuh" : isSlotBooked(slot.id) ? "Dipilih" : "Tersedia"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Tarikh:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        slot.date
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Masa:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        slot.time
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Kapasiti:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        slot.currentBookings,
                                                        "/",
                                                        slot.maxStudents,
                                                        " pelajar"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleBookSlot(slot.id),
                                            disabled: isSlotBooked(slot.id) || isSlotFull(slot) || booking === slot.id,
                                            className: `mt-3 w-full py-2 px-4 rounded text-sm font-medium transition-colors ${isSlotBooked(slot.id) || isSlotFull(slot) ? "bg-gray-300 text-gray-500 cursor-not-allowed" : booking === slot.id ? "bg-yellow-500 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}`,
                                            children: booking === slot.id ? "Memproses..." : isSlotBooked(slot.id) ? "Sudah Dipilih" : isSlotFull(slot) ? "Penuh" : "Pilih Slot"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, slot.id, true, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_Project_kongsirezeki_app_components_PilihSlotPengambilan_tsx_777d0980._.js.map
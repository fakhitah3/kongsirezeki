(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PilihSlotPengambilan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/lib/firebase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PilihSlotPengambilan() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "f9562980c4ac0b512f0c4ac9f141c0e600303980c58f86f42d8823ba38fcd092") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f9562980c4ac0b512f0c4ac9f141c0e600303980c58f86f42d8823ba38fcd092";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [slots, setSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [userBookings, setUserBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [booking, setBooking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "PilihSlotPengambilan[useEffect()]": ()=>{
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser) {
                    return;
                }
                const slotsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "slots"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("status", "==", "available"));
                const unsubscribeSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(slotsQuery, {
                    "PilihSlotPengambilan[useEffect() > onSnapshot()]": (snapshot)=>{
                        const slotList = [];
                        snapshot.forEach({
                            "PilihSlotPengambilan[useEffect() > onSnapshot() > snapshot.forEach()]": (doc$0)=>{
                                slotList.push({
                                    id: doc$0.id,
                                    ...doc$0.data()
                                });
                            }
                        }["PilihSlotPengambilan[useEffect() > onSnapshot() > snapshot.forEach()]"]);
                        setSlots(slotList);
                    }
                }["PilihSlotPengambilan[useEffect() > onSnapshot()]"]);
                const bookingsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "bookings"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("userId", "==", __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser.uid));
                const unsubscribeBookings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(bookingsQuery, {
                    "PilihSlotPengambilan[useEffect() > onSnapshot()]": (snapshot_0)=>{
                        const bookingList = [];
                        snapshot_0.forEach({
                            "PilihSlotPengambilan[useEffect() > onSnapshot() > snapshot_0.forEach()]": (doc_0)=>{
                                bookingList.push({
                                    id: doc_0.id,
                                    ...doc_0.data()
                                });
                            }
                        }["PilihSlotPengambilan[useEffect() > onSnapshot() > snapshot_0.forEach()]"]);
                        setUserBookings(bookingList);
                        setLoading(false);
                    }
                }["PilihSlotPengambilan[useEffect() > onSnapshot()]"]);
                return ()=>{
                    unsubscribeSlots();
                    unsubscribeBookings();
                };
            }
        })["PilihSlotPengambilan[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] !== slots || $[6] !== userBookings) {
        t4 = ({
            "PilihSlotPengambilan[handleBookSlot]": async (slotId)=>{
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser) {
                    return;
                }
                const hasBooking = userBookings.some({
                    "PilihSlotPengambilan[handleBookSlot > userBookings.some()]": (booking_0)=>booking_0.status === "approved" && booking_0.slotId === slotId
                }["PilihSlotPengambilan[handleBookSlot > userBookings.some()]"]);
                if (hasBooking) {
                    alert("Anda sudah memilih slot ini.");
                    return;
                }
                setBooking(slotId);
                ;
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "bookings"), {
                        slotId,
                        userId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser.uid,
                        userEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser.email,
                        status: "pending",
                        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                    });
                    const slotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "slots", slotId);
                    const slot = slots.find({
                        "PilihSlotPengambilan[handleBookSlot > slots.find()]": (s)=>s.id === slotId
                    }["PilihSlotPengambilan[handleBookSlot > slots.find()]"]);
                    if (slot) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(slotRef, {
                            currentBookings: slot.currentBookings + 1
                        });
                    }
                    alert("Slot berjaya dipilih! Menunggu pengesahan.");
                    setBooking(null);
                } catch (t5) {
                    const error = t5;
                    console.error("Error booking slot:", error);
                    alert("Gagal memilih slot. Sila cuba lagi.");
                    setBooking(null);
                }
            }
        })["PilihSlotPengambilan[handleBookSlot]"];
        $[5] = slots;
        $[6] = userBookings;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleBookSlot = t4;
    let t5;
    if ($[8] !== userBookings) {
        t5 = ({
            "PilihSlotPengambilan[isSlotBooked]": (slotId_0)=>userBookings.some({
                    "PilihSlotPengambilan[isSlotBooked > userBookings.some()]": (booking_1)=>booking_1.status === "approved" && booking_1.slotId === slotId_0
                }["PilihSlotPengambilan[isSlotBooked > userBookings.some()]"])
        })["PilihSlotPengambilan[isSlotBooked]"];
        $[8] = userBookings;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const isSlotBooked = t5;
    const isSlotFull = _PilihSlotPengambilanIsSlotFull;
    if (loading) {
        let t6;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 py-10 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-blue-700 mb-6",
                            children: "Pilih Slot Pengambilan"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                            lineNumber: 170,
                            columnNumber: 99
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Memuatkan..."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                            lineNumber: 170,
                            columnNumber: 180
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                    lineNumber: 170,
                    columnNumber: 64
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                lineNumber: 170,
                columnNumber: 12
            }, this);
            $[10] = t6;
        } else {
            t6 = $[10];
        }
        return t6;
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-blue-700 mb-6",
            children: "Pilih Slot Pengambilan"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
            lineNumber: 179,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== slots || $[13] !== userBookings) {
        t7 = userBookings.some(_PilihSlotPengambilanUserBookingsSome) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium",
                    children: "Slot yang dipilih:"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                    lineNumber: 186,
                    columnNumber: 159
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2",
                    children: userBookings.filter(_PilihSlotPengambilanUserBookingsFilter).map({
                        "PilihSlotPengambilan[(anonymous)()]": (booking_2)=>{
                            const slot_1 = slots.find({
                                "PilihSlotPengambilan[(anonymous)() > slots.find()]": (s_0)=>s_0.id === booking_2.slotId
                            }["PilihSlotPengambilan[(anonymous)() > slots.find()]"]);
                            return slot_1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-3 rounded mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: slot_1.date
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                            lineNumber: 191,
                                            columnNumber: 114
                                        }, this),
                                        " | ",
                                        slot_1.time,
                                        " | ",
                                        slot_1.location
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                    lineNumber: 191,
                                    columnNumber: 91
                                }, this)
                            }, booking_2.id, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                lineNumber: 191,
                                columnNumber: 29
                            }, this) : null;
                        }
                    }["PilihSlotPengambilan[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                    lineNumber: 186,
                    columnNumber: 208
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
            lineNumber: 186,
            columnNumber: 70
        }, this);
        $[12] = slots;
        $[13] = userBookings;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold mb-4",
            children: "Slot Tersedia"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
            lineNumber: 202,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== booking || $[17] !== handleBookSlot || $[18] !== isSlotBooked || $[19] !== slots) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow-lg rounded-lg p-6",
            children: [
                t8,
                slots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "Tiada slot tersedia pada masa ini."
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                    lineNumber: 209,
                    columnNumber: 87
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: slots.map({
                        "PilihSlotPengambilan[slots.map()]": (slot_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border rounded-lg p-4 ${isSlotBooked(slot_2.id) ? "border-gray-300 bg-gray-50" : isSlotFull(slot_2) ? "border-red-300 bg-red-50" : "border-blue-300 bg-blue-50 hover:bg-blue-100"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-800",
                                                children: slot_2.location
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                lineNumber: 210,
                                                columnNumber: 327
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-1 text-xs rounded-full ${isSlotFull(slot_2) ? "bg-red-100 text-red-800" : isSlotBooked(slot_2.id) ? "bg-gray-100 text-gray-800" : "bg-green-100 text-green-800"}`,
                                                children: isSlotFull(slot_2) ? "Penuh" : isSlotBooked(slot_2.id) ? "Dipilih" : "Tersedia"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                lineNumber: 210,
                                                columnNumber: 393
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                        lineNumber: 210,
                                        columnNumber: 272
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Tarikh:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 728
                                                    }, this),
                                                    " ",
                                                    slot_2.date
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                lineNumber: 210,
                                                columnNumber: 725
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Masa:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 773
                                                    }, this),
                                                    " ",
                                                    slot_2.time
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                lineNumber: 210,
                                                columnNumber: 770
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Kapasiti:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 816
                                                    }, this),
                                                    " ",
                                                    slot_2.currentBookings,
                                                    "/",
                                                    slot_2.maxStudents,
                                                    " pelajar"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                                lineNumber: 210,
                                                columnNumber: 813
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                        lineNumber: 210,
                                        columnNumber: 676
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "PilihSlotPengambilan[slots.map() > <button>.onClick]": ()=>handleBookSlot(slot_2.id)
                                        }["PilihSlotPengambilan[slots.map() > <button>.onClick]"],
                                        disabled: isSlotBooked(slot_2.id) || isSlotFull(slot_2) || booking === slot_2.id,
                                        className: `mt-3 w-full py-2 px-4 rounded text-sm font-medium transition-colors ${isSlotBooked(slot_2.id) || isSlotFull(slot_2) ? "bg-gray-300 text-gray-500 cursor-not-allowed" : booking === slot_2.id ? "bg-yellow-500 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}`,
                                        children: booking === slot_2.id ? "Memproses..." : isSlotBooked(slot_2.id) ? "Sudah Dipilih" : isSlotFull(slot_2) ? "Penuh" : "Pilih Slot"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                        lineNumber: 210,
                                        columnNumber: 906
                                    }, this)
                                ]
                            }, slot_2.id, true, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                                lineNumber: 210,
                                columnNumber: 58
                            }, this)
                    }["PilihSlotPengambilan[slots.map()]"])
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                    lineNumber: 209,
                    columnNumber: 157
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
            lineNumber: 209,
            columnNumber: 10
        }, this);
        $[16] = booking;
        $[17] = handleBookSlot;
        $[18] = isSlotBooked;
        $[19] = slots;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t7 || $[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-10 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    t6,
                    t7,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
                lineNumber: 224,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/PilihSlotPengambilan.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[21] = t7;
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    return t10;
}
_s(PilihSlotPengambilan, "umg7b+jH9+NSR6NPCmgAhyyZJqA=");
_c = PilihSlotPengambilan;
function _PilihSlotPengambilanUserBookingsFilter(b) {
    return b.status === "approved";
}
function _PilihSlotPengambilanUserBookingsSome(b_0) {
    return b_0.status === "approved";
}
function _PilihSlotPengambilanIsSlotFull(slot_0) {
    return slot_0.currentBookings >= slot_0.maxStudents;
}
var _c;
__turbopack_context__.k.register(_c, "PilihSlotPengambilan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Project_kongsirezeki_app_components_PilihSlotPengambilan_tsx_d2c6593f._.js.map
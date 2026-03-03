(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RekodSumbangan
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
function RekodSumbangan() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(87);
    if ($[0] !== "f71e48a031b42856d69993028bb1c1ab3cc92f3e51c4771111a5f9ad394c37c1") {
        for(let $i = 0; $i < 87; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f71e48a031b42856d69993028bb1c1ab3cc92f3e51c4771111a5f9ad394c37c1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [donations, setDonations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            jenisSumbangan: "all",
            status: "all"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "RekodSumbangan[useEffect()]": ()=>{
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "donations"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("createdAt", "desc"));
                const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                    "RekodSumbangan[useEffect() > onSnapshot()]": (snapshot)=>{
                        const donationList = [];
                        snapshot.forEach({
                            "RekodSumbangan[useEffect() > onSnapshot() > snapshot.forEach()]": (doc)=>{
                                donationList.push({
                                    id: doc.id,
                                    ...doc.data()
                                });
                            }
                        }["RekodSumbangan[useEffect() > onSnapshot() > snapshot.forEach()]"]);
                        setDonations(donationList);
                        setLoading(false);
                    }
                }["RekodSumbangan[useEffect() > onSnapshot()]"]);
                return ()=>unsubscribe();
            }
        })["RekodSumbangan[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const getJenisPenyumbangText = _RekodSumbanganGetJenisPenyumbangText;
    const getStatusColor = _RekodSumbanganGetStatusColor;
    const getStatusText = _RekodSumbanganGetStatusText;
    let filteredDonations;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== donations || $[6] !== filter || $[7] !== loading) {
        t15 = Symbol.for("react.early_return_sentinel");
        bb0: {
            let t16;
            if ($[21] !== filter) {
                t16 = ({
                    "RekodSumbangan[donations.filter()]": (donation)=>{
                        const jenisMatch = filter.jenisSumbangan === "all" || donation.jenisSumbangan === filter.jenisSumbangan;
                        const statusMatch = filter.status === "all" || donation.status === filter.status;
                        return jenisMatch && statusMatch;
                    }
                })["RekodSumbangan[donations.filter()]"];
                $[21] = filter;
                $[22] = t16;
            } else {
                t16 = $[22];
            }
            filteredDonations = donations.filter(t16);
            const totalDonations = filteredDonations.length;
            const totalFoodDonations = filteredDonations.filter(_RekodSumbanganFilteredDonationsFilter).length;
            const totalMoneyDonations = filteredDonations.filter(_RekodSumbanganFilteredDonationsFilter2).length;
            const totalAmount = filteredDonations.filter(_RekodSumbanganFilteredDonationsFilter3).reduce(_RekodSumbanganAnonymous, 0);
            if (loading) {
                let t17;
                if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
                    t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-screen bg-gray-50 py-10 px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-blue-700 mb-6",
                                    children: "Rekod Sumbangan"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                    lineNumber: 130,
                                    columnNumber: 104
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Memuatkan..."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                    lineNumber: 130,
                                    columnNumber: 178
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                            lineNumber: 130,
                            columnNumber: 69
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this);
                    $[23] = t17;
                } else {
                    t17 = $[23];
                }
                t15 = t17;
                break bb0;
            }
            t14 = "min-h-screen bg-gray-50 py-10 px-4";
            t10 = "max-w-6xl mx-auto";
            if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
                t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-blue-700 mb-6",
                    children: "Rekod Sumbangan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 141,
                    columnNumber: 15
                }, this);
                $[24] = t11;
            } else {
                t11 = $[24];
            }
            let t17;
            if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
                t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-gray-800 mb-2",
                    children: "Jumlah Sumbangan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 148,
                    columnNumber: 15
                }, this);
                $[25] = t17;
            } else {
                t17 = $[25];
            }
            let t18;
            if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
                t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "Keseluruhan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 155,
                    columnNumber: 15
                }, this);
                $[26] = t18;
            } else {
                t18 = $[26];
            }
            const t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow",
                children: [
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-blue-600",
                        children: totalDonations
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                        lineNumber: 160,
                        columnNumber: 72
                    }, this),
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                lineNumber: 160,
                columnNumber: 19
            }, this);
            let t20;
            if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
                t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-gray-800 mb-2",
                    children: "Sumbangan Makanan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 163,
                    columnNumber: 15
                }, this);
                $[27] = t20;
            } else {
                t20 = $[27];
            }
            let t21;
            if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
                t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "Item makanan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 170,
                    columnNumber: 15
                }, this);
                $[28] = t21;
            } else {
                t21 = $[28];
            }
            const t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow",
                children: [
                    t20,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-green-600",
                        children: totalFoodDonations
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                        lineNumber: 175,
                        columnNumber: 72
                    }, this),
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                lineNumber: 175,
                columnNumber: 19
            }, this);
            let t23;
            if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
                t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-gray-800 mb-2",
                    children: "Sumbangan Wang"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 178,
                    columnNumber: 15
                }, this);
                $[29] = t23;
            } else {
                t23 = $[29];
            }
            let t24;
            if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
                t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "Transaksi wang"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 185,
                    columnNumber: 15
                }, this);
                $[30] = t24;
            } else {
                t24 = $[30];
            }
            const t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow",
                children: [
                    t23,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-purple-600",
                        children: totalMoneyDonations
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                        lineNumber: 190,
                        columnNumber: 72
                    }, this),
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                lineNumber: 190,
                columnNumber: 19
            }, this);
            let t26;
            if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
                t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-gray-800 mb-2",
                    children: "Jumlah Wang"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 193,
                    columnNumber: 15
                }, this);
                $[31] = t26;
            } else {
                t26 = $[31];
            }
            let t27;
            if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
                t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "Total terkumpul"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 200,
                    columnNumber: 15
                }, this);
                $[32] = t27;
            } else {
                t27 = $[32];
            }
            const t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow",
                children: [
                    t26,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-orange-600",
                        children: [
                            "RM ",
                            totalAmount.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                        lineNumber: 205,
                        columnNumber: 72
                    }, this),
                    t27
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                lineNumber: 205,
                columnNumber: 19
            }, this);
            if ($[33] !== t19 || $[34] !== t22 || $[35] !== t25 || $[36] !== t28) {
                t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6",
                    children: [
                        t19,
                        t22,
                        t25,
                        t28
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 207,
                    columnNumber: 15
                }, this);
                $[33] = t19;
                $[34] = t22;
                $[35] = t25;
                $[36] = t28;
                $[37] = t12;
            } else {
                t12 = $[37];
            }
            let t29;
            if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
                t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: "Jenis Sumbangan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 218,
                    columnNumber: 15
                }, this);
                $[38] = t29;
            } else {
                t29 = $[38];
            }
            let t30;
            if ($[39] !== filter) {
                t30 = ({
                    "RekodSumbangan[<select>.onChange]": (e)=>setFilter({
                            ...filter,
                            jenisSumbangan: e.target.value
                        })
                })["RekodSumbangan[<select>.onChange]"];
                $[39] = filter;
                $[40] = t30;
            } else {
                t30 = $[40];
            }
            let t31;
            let t32;
            let t33;
            if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
                t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "all",
                    children: "Semua Jenis"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 240,
                    columnNumber: 15
                }, this);
                t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "makanan",
                    children: "Makanan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 241,
                    columnNumber: 15
                }, this);
                t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "wang",
                    children: "Wang"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 242,
                    columnNumber: 15
                }, this);
                $[41] = t31;
                $[42] = t32;
                $[43] = t33;
            } else {
                t31 = $[41];
                t32 = $[42];
                t33 = $[43];
            }
            let t34;
            if ($[44] !== filter.jenisSumbangan || $[45] !== t30) {
                t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t29,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: filter.jenisSumbangan,
                            onChange: t30,
                            className: "w-full border border-gray-300 rounded px-3 py-2",
                            children: [
                                t31,
                                t32,
                                t33
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                            lineNumber: 253,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 253,
                    columnNumber: 15
                }, this);
                $[44] = filter.jenisSumbangan;
                $[45] = t30;
                $[46] = t34;
            } else {
                t34 = $[46];
            }
            let t35;
            if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
                t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: "Status"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 262,
                    columnNumber: 15
                }, this);
                $[47] = t35;
            } else {
                t35 = $[47];
            }
            let t36;
            if ($[48] !== filter) {
                t36 = ({
                    "RekodSumbangan[<select>.onChange]": (e_0)=>setFilter({
                            ...filter,
                            status: e_0.target.value
                        })
                })["RekodSumbangan[<select>.onChange]"];
                $[48] = filter;
                $[49] = t36;
            } else {
                t36 = $[49];
            }
            let t37;
            let t38;
            let t39;
            let t40;
            if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
                t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "all",
                    children: "Semua Status"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 285,
                    columnNumber: 15
                }, this);
                t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "pending",
                    children: "Menunggu"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 286,
                    columnNumber: 15
                }, this);
                t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "approved",
                    children: "Diluluskan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 287,
                    columnNumber: 15
                }, this);
                t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "rejected",
                    children: "Ditolak"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 288,
                    columnNumber: 15
                }, this);
                $[50] = t37;
                $[51] = t38;
                $[52] = t39;
                $[53] = t40;
            } else {
                t37 = $[50];
                t38 = $[51];
                t39 = $[52];
                t40 = $[53];
            }
            let t41;
            if ($[54] !== filter.status || $[55] !== t36) {
                t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t35,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: filter.status,
                            onChange: t36,
                            className: "w-full border border-gray-300 rounded px-3 py-2",
                            children: [
                                t37,
                                t38,
                                t39,
                                t40
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                            lineNumber: 301,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 301,
                    columnNumber: 15
                }, this);
                $[54] = filter.status;
                $[55] = t36;
                $[56] = t41;
            } else {
                t41 = $[56];
            }
            if ($[57] !== t34 || $[58] !== t41) {
                t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded-lg shadow mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            t34,
                            t41
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                        lineNumber: 309,
                        columnNumber: 68
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 309,
                    columnNumber: 15
                }, this);
                $[57] = t34;
                $[58] = t41;
                $[59] = t13;
            } else {
                t13 = $[59];
            }
            t9 = "bg-white shadow-lg rounded-lg overflow-hidden";
            t8 = "overflow-x-auto";
            t6 = "w-full";
            if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-gray-50 border-b",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Tarikh"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                lineNumber: 320,
                                columnNumber: 57
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Penyumbang"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                lineNumber: 320,
                                columnNumber: 163
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Jenis"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                lineNumber: 320,
                                columnNumber: 273
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Butiran"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                lineNumber: 320,
                                columnNumber: 378
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                lineNumber: 320,
                                columnNumber: 485
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                        lineNumber: 320,
                        columnNumber: 53
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                    lineNumber: 320,
                    columnNumber: 14
                }, this);
                $[60] = t7;
            } else {
                t7 = $[60];
            }
            t4 = "bg-white divide-y divide-gray-200";
            let t42;
            if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
                t42 = ({
                    "RekodSumbangan[filteredDonations.map()]": (donation_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-gray-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                    children: donation_0.createdAt?.toDate()?.toLocaleDateString("ms-MY")
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                    lineNumber: 329,
                                    columnNumber: 121
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: getJenisPenyumbangText(donation_0.jenisPenyumbang)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                                lineNumber: 329,
                                                columnNumber: 324
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: donation_0.userEmail
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                                lineNumber: 329,
                                                columnNumber: 407
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                        lineNumber: 329,
                                        columnNumber: 319
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                    lineNumber: 329,
                                    columnNumber: 253
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: donation_0.jenisSumbangan === "makanan" ? "Makanan" : "Wang"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                        lineNumber: 329,
                                        columnNumber: 547
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                    lineNumber: 329,
                                    columnNumber: 481
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4 text-sm text-gray-900",
                                    children: donation_0.jenisSumbangan === "makanan" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: donation_0.makanan?.jenis
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 750
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                                lineNumber: 329,
                                                columnNumber: 747
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600",
                                                children: [
                                                    donation_0.makanan?.kuantiti,
                                                    " ",
                                                    donation_0.makanan?.unit
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                                lineNumber: 329,
                                                columnNumber: 798
                                            }, this),
                                            donation_0.makanan?.tarikhLuput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-600",
                                                children: [
                                                    "Luput: ",
                                                    donation_0.makanan.tarikhLuput
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                                lineNumber: 329,
                                                columnNumber: 932
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                        lineNumber: 329,
                                        columnNumber: 742
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        "RM ",
                                                        Number(donation_0.wang?.jumlah || 0).toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 1029
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                                lineNumber: 329,
                                                columnNumber: 1026
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600",
                                                children: donation_0.wang?.kaedah
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                                lineNumber: 329,
                                                columnNumber: 1102
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                        lineNumber: 329,
                                        columnNumber: 1021
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                    lineNumber: 329,
                                    columnNumber: 651
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(donation_0.status)}`,
                                        children: getStatusText(donation_0.status)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                        lineNumber: 329,
                                        columnNumber: 1224
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                                    lineNumber: 329,
                                    columnNumber: 1180
                                }, this)
                            ]
                        }, donation_0.id, true, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                            lineNumber: 329,
                            columnNumber: 68
                        }, this)
                })["RekodSumbangan[filteredDonations.map()]"];
                $[61] = t42;
            } else {
                t42 = $[61];
            }
            t5 = filteredDonations.map(t42);
        }
        $[5] = donations;
        $[6] = filter;
        $[7] = loading;
        $[8] = filteredDonations;
        $[9] = t10;
        $[10] = t11;
        $[11] = t12;
        $[12] = t13;
        $[13] = t14;
        $[14] = t15;
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
    } else {
        filteredDonations = $[8];
        t10 = $[9];
        t11 = $[10];
        t12 = $[11];
        t13 = $[12];
        t14 = $[13];
        t15 = $[14];
        t4 = $[15];
        t5 = $[16];
        t6 = $[17];
        t7 = $[18];
        t8 = $[19];
        t9 = $[20];
    }
    if (t15 !== Symbol.for("react.early_return_sentinel")) {
        return t15;
    }
    let t16;
    if ($[62] !== t4 || $[63] !== t5) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[62] = t4;
        $[63] = t5;
        $[64] = t16;
    } else {
        t16 = $[64];
    }
    let t17;
    if ($[65] !== t16 || $[66] !== t6 || $[67] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: t6,
            children: [
                t7,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[65] = t16;
        $[66] = t6;
        $[67] = t7;
        $[68] = t17;
    } else {
        t17 = $[68];
    }
    let t18;
    if ($[69] !== t17 || $[70] !== t8) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: t17
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        $[69] = t17;
        $[70] = t8;
        $[71] = t18;
    } else {
        t18 = $[71];
    }
    let t19;
    if ($[72] !== t18 || $[73] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: t18
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[72] = t18;
        $[73] = t9;
        $[74] = t19;
    } else {
        t19 = $[74];
    }
    let t20;
    if ($[75] !== filteredDonations.length) {
        t20 = filteredDonations.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow-lg rounded-lg p-8 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: "Tiada rekod sumbangan dijumpai."
            }, void 0, false, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
                lineNumber: 410,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
            lineNumber: 410,
            columnNumber: 45
        }, this);
        $[75] = filteredDonations.length;
        $[76] = t20;
    } else {
        t20 = $[76];
    }
    let t21;
    if ($[77] !== t10 || $[78] !== t11 || $[79] !== t12 || $[80] !== t13 || $[81] !== t19 || $[82] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t12,
                t13,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[77] = t10;
        $[78] = t11;
        $[79] = t12;
        $[80] = t13;
        $[81] = t19;
        $[82] = t20;
        $[83] = t21;
    } else {
        t21 = $[83];
    }
    let t22;
    if ($[84] !== t14 || $[85] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14,
            children: t21
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/RekodSumbangan.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[84] = t14;
        $[85] = t21;
        $[86] = t22;
    } else {
        t22 = $[86];
    }
    return t22;
}
_s(RekodSumbangan, "YQ8OpFIaRgukhQvJV+SsIkhguI8=");
_c = RekodSumbangan;
function _RekodSumbanganAnonymous(sum, d_2) {
    return sum + (Number(d_2.wang?.jumlah) || 0);
}
function _RekodSumbanganFilteredDonationsFilter3(d_1) {
    return d_1.wang?.jumlah;
}
function _RekodSumbanganFilteredDonationsFilter2(d_0) {
    return d_0.jenisSumbangan === "wang";
}
function _RekodSumbanganFilteredDonationsFilter(d) {
    return d.jenisSumbangan === "makanan";
}
function _RekodSumbanganGetStatusText(status_0) {
    switch(status_0){
        case "pending":
            {
                return "Menunggu";
            }
        case "approved":
            {
                return "Diluluskan";
            }
        case "rejected":
            {
                return "Ditolak";
            }
        default:
            {
                return status_0;
            }
    }
}
function _RekodSumbanganGetStatusColor(status) {
    switch(status){
        case "pending":
            {
                return "bg-yellow-100 text-yellow-800 border-yellow-300";
            }
        case "approved":
            {
                return "bg-blue-100 text-blue-800 border-blue-300";
            }
        case "rejected":
            {
                return "bg-red-100 text-red-800 border-red-300";
            }
        default:
            {
                return "bg-gray-100 text-gray-800 border-gray-300";
            }
    }
}
function _RekodSumbanganGetJenisPenyumbangText(jenis) {
    switch(jenis){
        case "pelajar":
            {
                return "Pelajar";
            }
        case "pensyarah":
            {
                return "Pensyarah";
            }
        case "staf_universiti":
            {
                return "Staf Universiti";
            }
        case "alumni":
            {
                return "Alumni";
            }
        case "ngo":
            {
                return "NGO";
            }
        default:
            {
                return jenis;
            }
    }
}
var _c;
__turbopack_context__.k.register(_c, "RekodSumbangan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Project_kongsirezeki_app_components_RekodSumbangan_tsx_cb76c14c._.js.map
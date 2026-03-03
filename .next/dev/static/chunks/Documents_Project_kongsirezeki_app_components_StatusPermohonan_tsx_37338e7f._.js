(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusPermohonan
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
function StatusPermohonan() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "f95790f7ad15f4577b5be4c88a39328e5ee7bafd2e67be7fab09e0145266c571") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f95790f7ad15f4577b5be4c88a39328e5ee7bafd2e67be7fab09e0145266c571";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [applications, setApplications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "StatusPermohonan[useEffect()]": ()=>{
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser) {
                    return;
                }
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "applications"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("userId", "==", __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser.uid));
                const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                    "StatusPermohonan[useEffect() > onSnapshot()]": (snapshot)=>{
                        const apps = [];
                        snapshot.forEach({
                            "StatusPermohonan[useEffect() > onSnapshot() > snapshot.forEach()]": (doc)=>{
                                apps.push({
                                    id: doc.id,
                                    ...doc.data()
                                });
                            }
                        }["StatusPermohonan[useEffect() > onSnapshot() > snapshot.forEach()]"]);
                        setApplications(apps);
                        setLoading(false);
                    }
                }["StatusPermohonan[useEffect() > onSnapshot()]"]);
                return ()=>unsubscribe();
            }
        })["StatusPermohonan[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const getStatusColor = _StatusPermohonanGetStatusColor;
    const getStatusText = _StatusPermohonanGetStatusText;
    const getJenisBantuanText = _StatusPermohonanGetJenisBantuanText;
    if (loading) {
        let t3;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 py-10 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-blue-700 mb-6",
                            children: "Status Permohonan"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                            lineNumber: 75,
                            columnNumber: 99
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Memuatkan..."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                            lineNumber: 75,
                            columnNumber: 175
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                    lineNumber: 75,
                    columnNumber: 64
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                lineNumber: 75,
                columnNumber: 12
            }, this);
            $[4] = t3;
        } else {
            t3 = $[4];
        }
        return t3;
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-blue-700 mb-6",
            children: "Status Permohonan"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== applications) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-10 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    t3,
                    applications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow-lg rounded-lg p-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Tiada permohonan dijumpai."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                            lineNumber: 91,
                            columnNumber: 193
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                        lineNumber: 91,
                        columnNumber: 130
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: applications.map({
                            "StatusPermohonan[applications.map()]": (app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow-lg rounded-lg p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold text-gray-800",
                                                            children: getJenisBantuanText(app.jenisBantuan)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 184
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: [
                                                                "Fakulti: ",
                                                                app.fakulti,
                                                                " | Semester: ",
                                                                app.semester
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 280
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 179
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(app.status)}`,
                                                    children: getStatusText(app.status)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 376
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                            lineNumber: 92,
                                            columnNumber: 124
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-gray-700",
                                                            children: "Status Kewangan:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 584
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600",
                                                            children: app.statusKewangan
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 645
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 579
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-gray-700",
                                                            children: "Dihantar pada:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 709
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600",
                                                            children: app.createdAt?.toDate()?.toLocaleDateString("ms-MY")
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 768
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 704
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                            lineNumber: 92,
                                            columnNumber: 516
                                        }, this),
                                        app.justifikasi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-gray-700",
                                                    children: "Justifikasi:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 909
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 bg-gray-50 p-3 rounded",
                                                    children: app.justifikasi
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 966
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                            lineNumber: 92,
                                            columnNumber: 887
                                        }, this)
                                    ]
                                }, app.id, true, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                                    lineNumber: 92,
                                    columnNumber: 60
                                }, this)
                        }["StatusPermohonan[applications.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                        lineNumber: 91,
                        columnNumber: 261
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
                lineNumber: 91,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/StatusPermohonan.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[6] = applications;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
}
_s(StatusPermohonan, "divTGKhuPEEv6aEZWI9KlxjDCwQ=");
_c = StatusPermohonan;
function _StatusPermohonanGetJenisBantuanText(jenis) {
    switch(jenis){
        case "makanan_asas":
            {
                return "Bantuan makanan asas";
            }
        case "food_pack":
            {
                return "Food pack mingguan";
            }
        case "kecemasan":
            {
                return "Bantuan kecemasan";
            }
        default:
            {
                return jenis;
            }
    }
}
function _StatusPermohonanGetStatusText(status_0) {
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
function _StatusPermohonanGetStatusColor(status) {
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
var _c;
__turbopack_context__.k.register(_c, "StatusPermohonan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Project_kongsirezeki_app_components_StatusPermohonan_tsx_37338e7f._.js.map
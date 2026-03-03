(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MohonBantuan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MohonBantuan() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "b010c2f969dc2085df04eb3a436f8e6f15c352ae69e5413c7fdaa77141b936db") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b010c2f969dc2085df04eb3a436f8e6f15c352ae69e5413c7fdaa77141b936db";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            jenisBantuan: "",
            fakulti: "",
            semester: "",
            statusKewangan: "",
            justifikasi: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[2] !== form) {
        t1 = ({
            "MohonBantuan[handleChange]": (e)=>{
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                });
            }
        })["MohonBantuan[handleChange]"];
        $[2] = form;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleChange = t1;
    let t2;
    if ($[4] !== form || $[5] !== router) {
        t2 = ({
            "MohonBantuan[handleSubmit]": async (e_0)=>{
                e_0.preventDefault();
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser) {
                    setError("Sila login terlebih dahulu untuk menghantar permohonan.");
                    return;
                }
                ;
                try {
                    setError("");
                    setMessage("");
                    const applicationData = {
                        ...form,
                        userId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser.uid,
                        userEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser.email,
                        userRole: "pelajar",
                        status: "pending",
                        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                    };
                    console.log("Menghantar data:", applicationData);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "applications"), applicationData);
                    setMessage("Permohonan berjaya dihantar! Anda akan dialihkan ke status permohonan.");
                    setForm({
                        jenisBantuan: "",
                        fakulti: "",
                        semester: "",
                        statusKewangan: "",
                        justifikasi: ""
                    });
                    setTimeout({
                        "MohonBantuan[handleSubmit > setTimeout()]": ()=>{
                            router.push("/status");
                        }
                    }["MohonBantuan[handleSubmit > setTimeout()]"], 2000);
                } catch (t3) {
                    const error_0 = t3;
                    console.error("Error detail:", error_0);
                    setError("Gagal menghantar permohonan. Sila pastikan anda telah login dan cuba lagi.");
                }
            }
        })["MohonBantuan[handleSubmit]"];
        $[4] = form;
        $[5] = router;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const handleSubmit = t2;
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-blue-700 mb-6",
            children: "Permohonan Bantuan Pelajar"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== message) {
        t4 = message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6",
            children: message
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 108,
            columnNumber: 21
        }, this);
        $[8] = message;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== error) {
        t5 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6",
            children: error
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 116,
            columnNumber: 19
        }, this);
        $[10] = error;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Pilih jenis bantuan"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "makanan_asas",
            children: "Bantuan makanan asas"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "food_pack",
            children: "Food pack mingguan"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "kecemasan",
            children: "Bantuan kecemasan"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        t6 = $[12];
        t7 = $[13];
        t8 = $[14];
        t9 = $[15];
    }
    let t10;
    if ($[16] !== form.jenisBantuan || $[17] !== handleChange) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            name: "jenisBantuan",
            value: form.jenisBantuan,
            onChange: handleChange,
            className: "w-full rounded border-gray-300",
            required: true,
            children: [
                t6,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[16] = form.jenisBantuan;
        $[17] = handleChange;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== form.fakulti || $[20] !== handleChange) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            name: "fakulti",
            value: form.fakulti,
            onChange: handleChange,
            placeholder: "Fakulti",
            className: "w-full rounded border-gray-300",
            required: true
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[19] = form.fakulti;
        $[20] = handleChange;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Pilih semester"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "1",
            children: "Semester 1"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "2",
            children: "Semester 2"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "3",
            children: "Semester 3"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "4",
            children: "Semester 4"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "5",
            children: "Semester 5"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "6",
            children: "Semester 6"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t13;
        $[24] = t14;
        $[25] = t15;
        $[26] = t16;
        $[27] = t17;
        $[28] = t18;
    } else {
        t12 = $[22];
        t13 = $[23];
        t14 = $[24];
        t15 = $[25];
        t16 = $[26];
        t17 = $[27];
        t18 = $[28];
    }
    let t19;
    if ($[29] !== form.semester || $[30] !== handleChange) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            name: "semester",
            value: form.semester,
            onChange: handleChange,
            className: "w-full rounded border-gray-300",
            required: true,
            children: [
                t12,
                t13,
                t14,
                t15,
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[29] = form.semester;
        $[30] = handleChange;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    let t21;
    let t22;
    let t23;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Status kewangan"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "b40",
            children: "B40"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "tiada_bantuan",
            children: "Tiada bantuan tetap"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "kehilangan_pendapatan",
            children: "Kehilangan pendapatan"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[32] = t20;
        $[33] = t21;
        $[34] = t22;
        $[35] = t23;
    } else {
        t20 = $[32];
        t21 = $[33];
        t22 = $[34];
        t23 = $[35];
    }
    let t24;
    if ($[36] !== form.statusKewangan || $[37] !== handleChange) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            name: "statusKewangan",
            value: form.statusKewangan,
            onChange: handleChange,
            className: "w-full rounded border-gray-300",
            required: true,
            children: [
                t20,
                t21,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[36] = form.statusKewangan;
        $[37] = handleChange;
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    let t25;
    if ($[39] !== form.justifikasi || $[40] !== handleChange) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            name: "justifikasi",
            value: form.justifikasi,
            onChange: handleChange,
            rows: 5,
            placeholder: "Justifikasi permohonan",
            className: "w-full rounded border-gray-300",
            required: true
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[39] = form.justifikasi;
        $[40] = handleChange;
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700",
            children: "Hantar Permohonan"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    let t27;
    if ($[43] !== handleSubmit || $[44] !== t10 || $[45] !== t11 || $[46] !== t19 || $[47] !== t24 || $[48] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-6",
            children: [
                t10,
                t11,
                t19,
                t24,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[43] = handleSubmit;
        $[44] = t10;
        $[45] = t11;
        $[46] = t19;
        $[47] = t24;
        $[48] = t25;
        $[49] = t27;
    } else {
        t27 = $[49];
    }
    let t28;
    if ($[50] !== t27 || $[51] !== t4 || $[52] !== t5) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-10 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8",
                children: [
                    t3,
                    t4,
                    t5,
                    t27
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
                lineNumber: 258,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/MohonBantuan.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[50] = t27;
        $[51] = t4;
        $[52] = t5;
        $[53] = t28;
    } else {
        t28 = $[53];
    }
    return t28;
}
_s(MohonBantuan, "xOtttzc3QC0Hr8izEVeZgr06eQc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MohonBantuan;
var _c;
__turbopack_context__.k.register(_c, "MohonBantuan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Project_kongsirezeki_app_components_MohonBantuan_tsx_85b250e9._.js.map
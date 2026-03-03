(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function RegisterPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "48202a11a69b016644615dd9f417cd736718c042e34c241891a2cfbb1b5edb88") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48202a11a69b016644615dd9f417cd736718c042e34c241891a2cfbb1b5edb88";
    }
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pelajar");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== email || $[2] !== name || $[3] !== password || $[4] !== phoneNumber || $[5] !== role || $[6] !== router) {
        t0 = ({
            "RegisterPage[handleRegister]": async ()=>{
                ;
                try {
                    setError("");
                    setMessage("");
                    const userCred = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, password);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", userCred.user.uid), {
                        email,
                        name,
                        phoneNumber,
                        role,
                        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                    });
                    setMessage("Pendaftaran berjaya! Anda akan dialihkan ke dashboard...");
                    setTimeout({
                        "RegisterPage[handleRegister > setTimeout()]": ()=>{
                            bb57: switch(role){
                                case "pelajar":
                                    {
                                        router.push("/dashboard/student");
                                        break bb57;
                                    }
                                case "penyumbang":
                                    {
                                        router.push("/dashboard/donor");
                                        break bb57;
                                    }
                                case "sukarelawan":
                                    {
                                        router.push("/dashboard/volunteer");
                                        break bb57;
                                    }
                                default:
                                    {
                                        router.push("/");
                                    }
                            }
                        }
                    }["RegisterPage[handleRegister > setTimeout()]"], 2000);
                } catch (t1) {
                    const err = t1;
                    let errorMessage = "Pendaftaran gagal. Sila cuba lagi.";
                    if (err.code === "auth/email-already-in-use") {
                        errorMessage = "Email ini sudah digunakan. Sila gunakan email lain atau log masuk.";
                    } else {
                        if (err.code === "auth/invalid-email") {
                            errorMessage = "Format email tidak sah. Sila semak semula email anda.";
                        } else {
                            if (err.code === "auth/weak-password") {
                                errorMessage = "Kata laluan terlalu lemah. Sila gunakan sekurang-kurangnya 6 aksara.";
                            } else {
                                if (err.code === "auth/network-request-failed") {
                                    errorMessage = "Masalah sambungan internet. Sila semak sambungan anda dan cuba lagi.";
                                } else {
                                    if (err.code === "auth/too-many-requests") {
                                        errorMessage = "Terlalu banyak percubaan. Sila tunggu beberapa minit dan cuba lagi.";
                                    } else {
                                        if (err.message) {
                                            errorMessage = err.message;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    setError(errorMessage);
                }
            }
        })["RegisterPage[handleRegister]"];
        $[1] = email;
        $[2] = name;
        $[3] = password;
        $[4] = phoneNumber;
        $[5] = role;
        $[6] = router;
        $[7] = t0;
    } else {
        t0 = $[7];
    }
    const handleRegister = t0;
    let t1;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold mb-6",
            children: "Daftar Akaun"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[8] = t1;
    } else {
        t1 = $[8];
    }
    let t2;
    if ($[9] !== message) {
        t2 = message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4",
            children: message
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
            lineNumber: 117,
            columnNumber: 21
        }, this);
        $[9] = message;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] !== error) {
        t3 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
            children: error
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
            lineNumber: 125,
            columnNumber: 19
        }, this);
        $[11] = error;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "RegisterPage[<input>.onChange]": (e)=>setName(e.target.value)
        })["RegisterPage[<input>.onChange]"];
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== name) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "border p-2 w-full mb-3",
            placeholder: "Nama Penuh",
            value: name,
            onChange: t4
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[14] = name;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "RegisterPage[<input>.onChange]": (e_0)=>setPhoneNumber(e_0.target.value)
        })["RegisterPage[<input>.onChange]"];
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== phoneNumber) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "border p-2 w-full mb-3",
            placeholder: "Nombor Telefon",
            value: phoneNumber,
            onChange: t6
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[17] = phoneNumber;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "RegisterPage[<input>.onChange]": (e_1)=>setEmail(e_1.target.value)
        })["RegisterPage[<input>.onChange]"];
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== email) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "border p-2 w-full mb-3",
            placeholder: "Email",
            value: email,
            onChange: t8
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
            lineNumber: 176,
            columnNumber: 10
        }, this);
        $[20] = email;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "RegisterPage[<input>.onChange]": (e_2)=>setPassword(e_2.target.value)
        })["RegisterPage[<input>.onChange]"];
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== password) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "border p-2 w-full mb-3",
            type: "password",
            placeholder: "Kata Laluan",
            value: password,
            onChange: t10
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[23] = password;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "border p-2 w-full mb-6",
            onChange: {
                "RegisterPage[<select>.onChange]": (e_3)=>setRole(e_3.target.value)
            }["RegisterPage[<select>.onChange]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "pelajar",
                    children: "Pelajar"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
                    lineNumber: 203,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "penyumbang",
                    children: "Penyumbang"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
                    lineNumber: 203,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "sukarelawan",
                    children: "Sukarelawan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
                    lineNumber: 203,
                    columnNumber: 129
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== handleRegister) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleRegister,
            className: "bg-blue-700 text-white px-4 py-2 rounded",
            children: "Daftar"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[26] = handleRegister;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== router) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-center text-gray-600",
            children: [
                "Jika sudah ada akaun?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-blue-700 cursor-pointer hover:underline",
                    onClick: {
                        "RegisterPage[<span>.onClick]": ()=>router.push("/login")
                    }["RegisterPage[<span>.onClick]"],
                    children: "Log masuk"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
                    lineNumber: 218,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[28] = router;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== t11 || $[31] !== t13 || $[32] !== t14 || $[33] !== t2 || $[34] !== t3 || $[35] !== t5 || $[36] !== t7 || $[37] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md mx-auto py-20",
            children: [
                t1,
                t2,
                t3,
                t5,
                t7,
                t9,
                t11,
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Registration.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[30] = t11;
        $[31] = t13;
        $[32] = t14;
        $[33] = t2;
        $[34] = t3;
        $[35] = t5;
        $[36] = t7;
        $[37] = t9;
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    return t15;
}
_s(RegisterPage, "fmAew7DkOuI+S8HKKHgdxP9R40Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RegisterPage;
var _c;
__turbopack_context__.k.register(_c, "RegisterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Project_kongsirezeki_app_components_Registration_tsx_56ca473d._.js.map
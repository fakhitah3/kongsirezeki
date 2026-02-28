(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Project/kongsirezeki/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyBxVzKlXLr7CgSLS_qGCmMIwJp_ZECjnOM"),
    authDomain: ("TURBOPACK compile-time value", "kongsirezeki.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "kongsirezeki"),
    storageBucket: ("TURBOPACK compile-time value", "kongsirezeki.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "997289017732"),
    appId: ("TURBOPACK compile-time value", "1:997289017732:web:5bc86c537df234bfdeddd1")
};
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])();
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/kongsirezeki/lib/useUserRole.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserRole",
    ()=>getUserRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/lib/firebase.ts [app-client] (ecmascript)");
"use client";
;
;
async function getUserRole() {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
    if (!user) return null;
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", user.uid));
    return snap.data()?.role;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$useUserRole$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/lib/useUserRole.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "5d7d38e49dccf1f9fda9fde925686b0f86531b3d7729aac6425b822ca71a698d") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5d7d38e49dccf1f9fda9fde925686b0f86531b3d7729aac6425b822ca71a698d";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                const checkUserRole = {
                    "Navbar[useEffect() > checkUserRole]": async ()=>{
                        const role = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$useUserRole$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserRole"])();
                        setUserRole(role);
                        setLoading(false);
                    }
                }["Navbar[useEffect() > checkUserRole]"];
                const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged({
                    "Navbar[useEffect() > auth.onAuthStateChanged()]": (user)=>{
                        if (user) {
                            checkUserRole();
                        } else {
                            setUserRole(null);
                            setLoading(false);
                        }
                    }
                }["Navbar[useEffect() > auth.onAuthStateChanged()]"]);
                return ()=>unsubscribe();
            }
        })["Navbar[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== router) {
        t2 = ({
            "Navbar[handleLogout]": async ()=>{
                await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].signOut();
                router.push("/");
            }
        })["Navbar[handleLogout]"];
        $[3] = router;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleLogout = t2;
    let t3;
    if ($[5] !== handleLogout || $[6] !== loading || $[7] !== router || $[8] !== userRole) {
        t3 = ({
            "Navbar[renderNavItems]": ()=>{
                if (loading) {
                    return null;
                }
                if (!userRole) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "hover:text-blue-700 cursor-pointer",
                                children: "Utama"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
                                lineNumber: 74,
                                columnNumber: 20
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "hover:text-blue-700 cursor-pointer",
                                children: "Tentang Kami"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
                                lineNumber: 74,
                                columnNumber: 81
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "hover:text-blue-700 cursor-pointer",
                                onClick: {
                                    "Navbar[renderNavItems > <li>.onClick]": ()=>router.push("/apply")
                                }["Navbar[renderNavItems > <li>.onClick]"],
                                children: "Mohon Bantuan"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
                                lineNumber: 74,
                                columnNumber: 149
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "hover:text-blue-700 cursor-pointer",
                                onClick: {
                                    "Navbar[renderNavItems > <li>.onClick]": ()=>router.push("/donate")
                                }["Navbar[renderNavItems > <li>.onClick]"],
                                children: "Sumbang Sekarang"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
                                lineNumber: 76,
                                columnNumber: 75
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "hover:text-blue-700 cursor-pointer",
                                children: "Sukarelawan"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
                                lineNumber: 78,
                                columnNumber: 78
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-blue-700 font-semibold cursor-pointer",
                                onClick: {
                                    "Navbar[renderNavItems > <li>.onClick]": ()=>router.push("/register")
                                }["Navbar[renderNavItems > <li>.onClick]"],
                                children: "Login / Daftar"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
                                lineNumber: 78,
                                columnNumber: 145
                            }, this)
                        ]
                    }, void 0, true);
                }
                const roleMenus = {
                    pelajar: [
                        {
                            label: "Dashboard Pelajar",
                            path: "/dashboard/student"
                        },
                        {
                            label: "Mohon Bantuan",
                            path: "/apply"
                        },
                        {
                            label: "Status Permohonan",
                            path: "/status"
                        },
                        {
                            label: "Pilih Slot Pengambilan",
                            path: "/slots"
                        },
                        {
                            label: "Rekod Bantuan",
                            path: "/records"
                        },
                        {
                            label: "Profil",
                            path: "/profile"
                        }
                    ],
                    penyumbang: [
                        {
                            label: "Dashboard Penyumbang",
                            path: "/dashboard/donor"
                        },
                        {
                            label: "Buat Sumbangan",
                            path: "/donate"
                        },
                        {
                            label: "Senarai Kempen",
                            path: "/campaigns"
                        },
                        {
                            label: "Rekod Sumbangan",
                            path: "/donation-records"
                        },
                        {
                            label: "Profil",
                            path: "/profile"
                        }
                    ],
                    sukarelawan: [
                        {
                            label: "Dashboard Sukarelawan",
                            path: "/dashboard/volunteer"
                        },
                        {
                            label: "Senarai Tugasan",
                            path: "/tasks"
                        },
                        {
                            label: "Update Status Tugasan",
                            path: "/task-status"
                        },
                        {
                            label: "Profil",
                            path: "/profile"
                        }
                    ],
                    admin: [
                        {
                            label: "Dashboard Admin",
                            path: "/dashboard/admin"
                        },
                        {
                            label: "Pengurusan Pelajar",
                            path: "/admin/students"
                        },
                        {
                            label: "Pengurusan Permohonan",
                            path: "/admin/applications"
                        },
                        {
                            label: "Pengurusan Stok",
                            path: "/admin/stock"
                        },
                        {
                            label: "Pengurusan Kempen",
                            path: "/admin/campaigns"
                        },
                        {
                            label: "Pengurusan Sumbangan",
                            path: "/admin/donations"
                        },
                        {
                            label: "Pengurusan Slot",
                            path: "/admin/slots"
                        },
                        {
                            label: "Laporan",
                            path: "/admin/reports"
                        },
                        {
                            label: "Tetapan Sistem",
                            path: "/admin/settings"
                        }
                    ]
                };
                const currentRole = userRole === "student" ? "pelajar" : userRole;
                const menuItems = roleMenus[currentRole] || [];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        menuItems.map({
                            "Navbar[renderNavItems > menuItems.map()]": (item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-blue-700 cursor-pointer",
                                    onClick: {
                                        "Navbar[renderNavItems > menuItems.map() > <li>.onClick]": ()=>router.push(item.path)
                                    }["Navbar[renderNavItems > menuItems.map() > <li>.onClick]"],
                                    children: item.label
                                }, index, false, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
                                    lineNumber: 163,
                                    columnNumber: 74
                                }, this)
                        }["Navbar[renderNavItems > menuItems.map()]"]),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "text-red-600 font-semibold cursor-pointer hover:text-red-700",
                            onClick: handleLogout,
                            children: "Log Keluar"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
                            lineNumber: 166,
                            columnNumber: 58
                        }, this)
                    ]
                }, void 0, true);
            }
        })["Navbar[renderNavItems]"];
        $[5] = handleLogout;
        $[6] = loading;
        $[7] = router;
        $[8] = userRole;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const renderNavItems = t3;
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl font-bold text-blue-700",
            children: "Food Bank Kampus"
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
            lineNumber: 180,
            columnNumber: 10
        }, this);
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== renderNavItems) {
        t5 = renderNavItems();
        $[11] = renderNavItems;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "bg-white shadow-md sticky top-0 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex space-x-6 text-sm font-medium text-gray-700",
                        children: t5
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
                        lineNumber: 195,
                        columnNumber: 147
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
                lineNumber: 195,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/Navbar.tsx",
            lineNumber: 195,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_s(Navbar, "emR0SmuxKaDkAPYr+a7QJ1ma/t4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Project_kongsirezeki_aff03d61._.js.map
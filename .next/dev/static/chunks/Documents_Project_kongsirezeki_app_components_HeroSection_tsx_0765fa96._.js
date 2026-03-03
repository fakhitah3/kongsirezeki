(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/kongsirezeki/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HeroSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "553a191678ac88cdf1cf49d5a438866de704354e4f1af8068f5885449973f9fd") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "553a191678ac88cdf1cf49d5a438866de704354e4f1af8068f5885449973f9fd";
    }
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: 1,
                title: "Sumbang Sekarang",
                subtitle: "Penyumbang",
                description: "Sumbang makanan atau keperluan asas untuk membantu pelajar yang memerlukan. Setiap sumbangan anda amat dihargai.",
                qrCode: "/qr-donor.png",
                buttonText: "Jadi Penyumbang",
                buttonLink: "/donate"
            },
            {
                id: 2,
                title: "Mohon Bantuan",
                subtitle: "Penerima",
                description: "Dapatkan bantuan makanan dan keperluan asas jika anda pelajar yang layak. Privasi anda terjamin.",
                qrCode: "/qr-recipient.png",
                buttonText: "Mohon Sekarang",
                buttonLink: "/apply"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const slides = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "HeroSection[nextSlide]": ()=>{
                setCurrentSlide({
                    "HeroSection[nextSlide > setCurrentSlide()]": (prev)=>(prev + 1) % slides.length
                }["HeroSection[nextSlide > setCurrentSlide()]"]);
            }
        })["HeroSection[nextSlide]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const nextSlide = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "HeroSection[prevSlide]": ()=>{
                setCurrentSlide({
                    "HeroSection[prevSlide > setCurrentSlide()]": (prev_0)=>(prev_0 - 1 + slides.length) % slides.length
                }["HeroSection[prevSlide > setCurrentSlide()]"]);
            }
        })["HeroSection[prevSlide]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const prevSlide = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-5xl font-bold mb-4",
                    children: "Inisiatif Kongsi Rezeki"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                    lineNumber: 68,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "max-w-2xl mx-auto text-lg opacity-90",
                    children: "Platform kebajikan berasaskan kampus bagi memastikan keterjaminan makanan pelajar melalui bantuan, sumbangan dan penglibatan komuniti."
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                    lineNumber: 68,
                    columnNumber: 125
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = `translateX(-${currentSlide * 100}%)`;
    let t5;
    if ($[5] !== t4) {
        t5 = {
            transform: t4
        };
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = slides.map(_HeroSectionSlidesMap);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex transition-transform duration-500 ease-in-out",
                style: t5,
                children: t6
            }, void 0, false, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                lineNumber: 93,
                columnNumber: 83
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: prevSlide,
            className: "absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors",
            "aria-label": "Previous slide",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 19l-7-7 7-7"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                    lineNumber: 101,
                    columnNumber: 263
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                lineNumber: 101,
                columnNumber: 184
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: nextSlide,
            className: "absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors",
            "aria-label": "Next slide",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 5l7 7-7 7"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                    lineNumber: 108,
                    columnNumber: 260
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                lineNumber: 108,
                columnNumber: 181
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== currentSlide) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mt-6 space-x-2",
            children: slides.map({
                "HeroSection[slides.map()]": (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "HeroSection[slides.map() > <button>.onClick]": ()=>setCurrentSlide(index)
                        }["HeroSection[slides.map() > <button>.onClick]"],
                        className: `w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`,
                        "aria-label": `Go to slide ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                        lineNumber: 116,
                        columnNumber: 52
                    }, this)
            }["HeroSection[slides.map()]"])
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[12] = currentSlide;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t10 || $[15] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-4xl mx-auto",
            children: [
                t7,
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t7;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-12 flex flex-wrap justify-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: _HeroSectionButtonOnClick,
                    className: "bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors",
                    children: "Sumbang Sekarang"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                    lineNumber: 136,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: _HeroSectionButtonOnClick2,
                    className: "bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors",
                    children: "Mohon Bantuan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                    lineNumber: 136,
                    columnNumber: 243
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: _HeroSectionButtonOnClick3,
                    className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors",
                    children: "Daftar Sekarang"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                    lineNumber: 136,
                    columnNumber: 418
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-gradient-to-r from-blue-700 to-blue-900 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-20",
                children: [
                    t3,
                    t11,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                lineNumber: 143,
                columnNumber: 86
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    return t13;
}
_s(HeroSection, "VQw0KpRgltXDNPWBgmV3GhZXdQE=");
_c = HeroSection;
function _HeroSectionButtonOnClick3() {
    return window.location.href = "/register";
}
function _HeroSectionButtonOnClick2() {
    return window.location.href = "/apply";
}
function _HeroSectionButtonOnClick() {
    return window.location.href = "/donate";
}
function _HeroSectionSlidesMap(slide) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex-shrink-0 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 gap-8 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg p-6 inline-block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-24 h-24 text-gray-400",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM17 17h2v2h-2zM19 19h2v2h-2zM15 19h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2z"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                                            lineNumber: 161,
                                            columnNumber: 383
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                                        lineNumber: 161,
                                        columnNumber: 302
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm",
                                        children: [
                                            "QR Code ",
                                            slide.subtitle
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                                        lineNumber: 161,
                                        columnNumber: 599
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                                lineNumber: 161,
                                columnNumber: 206
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                            lineNumber: 161,
                            columnNumber: 152
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mt-4 opacity-80",
                            children: [
                                "Imbas untuk ",
                                slide.subtitle === "Penyumbang" ? "membuat sumbangan" : "mohon bantuan"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                            lineNumber: 161,
                            columnNumber: 676
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                    lineNumber: 161,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center md:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-2",
                            children: slide.title
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                            lineNumber: 161,
                            columnNumber: 852
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg mb-4 text-blue-200",
                            children: slide.subtitle
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                            lineNumber: 161,
                            columnNumber: 910
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base mb-6 opacity-90 leading-relaxed",
                            children: slide.description
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                            lineNumber: 161,
                            columnNumber: 974
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "HeroSection[slides.map() > <button>.onClick]": ()=>window.location.href = slide.buttonLink
                            }["HeroSection[slides.map() > <button>.onClick]"],
                            className: "bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-block",
                            children: slide.buttonText
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                            lineNumber: 161,
                            columnNumber: 1054
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
                    lineNumber: 161,
                    columnNumber: 810
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
            lineNumber: 161,
            columnNumber: 67
        }, this)
    }, slide.id, false, {
        fileName: "[project]/Documents/Project/kongsirezeki/app/components/HeroSection.tsx",
        lineNumber: 161,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Project_kongsirezeki_app_components_HeroSection_tsx_0765fa96._.js.map
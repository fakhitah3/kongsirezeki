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
"[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SenaraiKempen
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
function SenaraiKempen() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(70);
    if ($[0] !== "08c08c1adde6d65fdcab17a9cfe741b75053ae3edb88825462f6625fff005899") {
        for(let $i = 0; $i < 70; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "08c08c1adde6d65fdcab17a9cfe741b75053ae3edb88825462f6625fff005899";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [campaigns, setCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            jenisKempen: "all",
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
            "SenaraiKempen[useEffect()]": ()=>{
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "campaigns"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("createdAt", "desc"));
                const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                    "SenaraiKempen[useEffect() > onSnapshot()]": (snapshot)=>{
                        const campaignList = [];
                        snapshot.forEach({
                            "SenaraiKempen[useEffect() > onSnapshot() > snapshot.forEach()]": (doc)=>{
                                campaignList.push({
                                    id: doc.id,
                                    ...doc.data()
                                });
                            }
                        }["SenaraiKempen[useEffect() > onSnapshot() > snapshot.forEach()]"]);
                        setCampaigns(campaignList);
                        setLoading(false);
                    }
                }["SenaraiKempen[useEffect() > onSnapshot()]"]);
                return ()=>unsubscribe();
            }
        })["SenaraiKempen[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const getStatusColor = _SenaraiKempenGetStatusColor;
    const getStatusText = _SenaraiKempenGetStatusText;
    const getProgressPercentage = _SenaraiKempenGetProgressPercentage;
    const getDaysRemaining = _SenaraiKempenGetDaysRemaining;
    let filteredCampaigns;
    let t10;
    let t11;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== campaigns || $[6] !== filter || $[7] !== loading) {
        t11 = Symbol.for("react.early_return_sentinel");
        bb0: {
            let t12;
            if ($[17] !== filter) {
                t12 = ({
                    "SenaraiKempen[campaigns.filter()]": (campaign)=>{
                        const jenisMatch = filter.jenisKempen === "all" || campaign.jenisKempen === filter.jenisKempen;
                        const statusMatch = filter.status === "all" || campaign.status === filter.status;
                        return jenisMatch && statusMatch;
                    }
                })["SenaraiKempen[campaigns.filter()]"];
                $[17] = filter;
                $[18] = t12;
            } else {
                t12 = $[18];
            }
            filteredCampaigns = campaigns.filter(t12);
            const activeCampaigns = filteredCampaigns.filter(_SenaraiKempenFilteredCampaignsFilter).length;
            const totalTarget = filteredCampaigns.reduce(_SenaraiKempenFilteredCampaignsReduce, 0);
            const totalCollected = filteredCampaigns.reduce(_SenaraiKempenFilteredCampaignsReduce2, 0);
            if (loading) {
                let t13;
                if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
                    t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-screen bg-gray-50 py-10 px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-blue-700 mb-6",
                                    children: "Senarai Kempen"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                    lineNumber: 118,
                                    columnNumber: 104
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Memuatkan..."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                    lineNumber: 118,
                                    columnNumber: 177
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                            lineNumber: 118,
                            columnNumber: 69
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this);
                    $[19] = t13;
                } else {
                    t13 = $[19];
                }
                t11 = t13;
                break bb0;
            }
            t10 = "min-h-screen bg-gray-50 py-10 px-4";
            t6 = "max-w-6xl mx-auto";
            if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-blue-700 mb-6",
                    children: "Senarai Kempen"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 129,
                    columnNumber: 14
                }, this);
                $[20] = t7;
            } else {
                t7 = $[20];
            }
            let t13;
            if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
                t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-gray-800 mb-2",
                    children: "Kempen Aktif"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 136,
                    columnNumber: 15
                }, this);
                $[21] = t13;
            } else {
                t13 = $[21];
            }
            let t14;
            if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
                t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "Sedang berjalan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 143,
                    columnNumber: 15
                }, this);
                $[22] = t14;
            } else {
                t14 = $[22];
            }
            const t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow",
                children: [
                    t13,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-green-600",
                        children: activeCampaigns
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                        lineNumber: 148,
                        columnNumber: 72
                    }, this),
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                lineNumber: 148,
                columnNumber: 19
            }, this);
            let t16;
            if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
                t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-gray-800 mb-2",
                    children: "Jumlah Sasaran"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 151,
                    columnNumber: 15
                }, this);
                $[23] = t16;
            } else {
                t16 = $[23];
            }
            let t17;
            if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
                t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "Keseluruhan sasaran"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 158,
                    columnNumber: 15
                }, this);
                $[24] = t17;
            } else {
                t17 = $[24];
            }
            const t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow",
                children: [
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-blue-600",
                        children: totalTarget.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                        lineNumber: 163,
                        columnNumber: 72
                    }, this),
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                lineNumber: 163,
                columnNumber: 19
            }, this);
            let t19;
            if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
                t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-gray-800 mb-2",
                    children: "Jumlah Terkumpul"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 166,
                    columnNumber: 15
                }, this);
                $[25] = t19;
            } else {
                t19 = $[25];
            }
            let t20;
            if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
                t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "Jumlah terkumpul"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 173,
                    columnNumber: 15
                }, this);
                $[26] = t20;
            } else {
                t20 = $[26];
            }
            const t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow",
                children: [
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-purple-600",
                        children: totalCollected.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                        lineNumber: 178,
                        columnNumber: 72
                    }, this),
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                lineNumber: 178,
                columnNumber: 19
            }, this);
            if ($[27] !== t15 || $[28] !== t18 || $[29] !== t21) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
                    children: [
                        t15,
                        t18,
                        t21
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 180,
                    columnNumber: 14
                }, this);
                $[27] = t15;
                $[28] = t18;
                $[29] = t21;
                $[30] = t8;
            } else {
                t8 = $[30];
            }
            let t22;
            if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
                t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: "Jenis Kempen"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 190,
                    columnNumber: 15
                }, this);
                $[31] = t22;
            } else {
                t22 = $[31];
            }
            let t23;
            if ($[32] !== filter) {
                t23 = ({
                    "SenaraiKempen[<select>.onChange]": (e)=>setFilter({
                            ...filter,
                            jenisKempen: e.target.value
                        })
                })["SenaraiKempen[<select>.onChange]"];
                $[32] = filter;
                $[33] = t23;
            } else {
                t23 = $[33];
            }
            let t24;
            let t25;
            let t26;
            let t27;
            if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
                t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "all",
                    children: "Semua Jenis"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 213,
                    columnNumber: 15
                }, this);
                t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "makanan",
                    children: "Makanan"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 214,
                    columnNumber: 15
                }, this);
                t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "wang",
                    children: "Wang"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 215,
                    columnNumber: 15
                }, this);
                t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "kedua-duanya",
                    children: "Makanan & Wang"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 216,
                    columnNumber: 15
                }, this);
                $[34] = t24;
                $[35] = t25;
                $[36] = t26;
                $[37] = t27;
            } else {
                t24 = $[34];
                t25 = $[35];
                t26 = $[36];
                t27 = $[37];
            }
            let t28;
            if ($[38] !== filter.jenisKempen || $[39] !== t23) {
                t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t22,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: filter.jenisKempen,
                            onChange: t23,
                            className: "w-full border border-gray-300 rounded px-3 py-2",
                            children: [
                                t24,
                                t25,
                                t26,
                                t27
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                            lineNumber: 229,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 229,
                    columnNumber: 15
                }, this);
                $[38] = filter.jenisKempen;
                $[39] = t23;
                $[40] = t28;
            } else {
                t28 = $[40];
            }
            let t29;
            if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
                t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: "Status"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 238,
                    columnNumber: 15
                }, this);
                $[41] = t29;
            } else {
                t29 = $[41];
            }
            let t30;
            if ($[42] !== filter) {
                t30 = ({
                    "SenaraiKempen[<select>.onChange]": (e_0)=>setFilter({
                            ...filter,
                            status: e_0.target.value
                        })
                })["SenaraiKempen[<select>.onChange]"];
                $[42] = filter;
                $[43] = t30;
            } else {
                t30 = $[43];
            }
            let t31;
            let t32;
            let t33;
            let t34;
            if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
                t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "all",
                    children: "Semua Status"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 261,
                    columnNumber: 15
                }, this);
                t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "aktif",
                    children: "Aktif"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 262,
                    columnNumber: 15
                }, this);
                t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "tidak_aktif",
                    children: "Tidak Aktif"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 263,
                    columnNumber: 15
                }, this);
                t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "selesai",
                    children: "Selesai"
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 264,
                    columnNumber: 15
                }, this);
                $[44] = t31;
                $[45] = t32;
                $[46] = t33;
                $[47] = t34;
            } else {
                t31 = $[44];
                t32 = $[45];
                t33 = $[46];
                t34 = $[47];
            }
            let t35;
            if ($[48] !== filter.status || $[49] !== t30) {
                t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t29,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: filter.status,
                            onChange: t30,
                            className: "w-full border border-gray-300 rounded px-3 py-2",
                            children: [
                                t31,
                                t32,
                                t33,
                                t34
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                            lineNumber: 277,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 277,
                    columnNumber: 15
                }, this);
                $[48] = filter.status;
                $[49] = t30;
                $[50] = t35;
            } else {
                t35 = $[50];
            }
            if ($[51] !== t28 || $[52] !== t35) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded-lg shadow mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            t28,
                            t35
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                        lineNumber: 285,
                        columnNumber: 67
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                    lineNumber: 285,
                    columnNumber: 14
                }, this);
                $[51] = t28;
                $[52] = t35;
                $[53] = t9;
            } else {
                t9 = $[53];
            }
            t4 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
            let t36;
            if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
                t36 = ({
                    "SenaraiKempen[filteredCampaigns.map()]": (campaign_0)=>{
                        const daysRemaining = getDaysRemaining(campaign_0.tarikhAkhir);
                        const progressPercentage = getProgressPercentage(campaign_0.terkumpul, campaign_0.sasaran);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900 mb-2",
                                                    children: campaign_0.tajuk
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 237
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(campaign_0.status)}`,
                                                    children: getStatusText(campaign_0.status)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 317
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                            lineNumber: 299,
                                            columnNumber: 213
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                        lineNumber: 299,
                                        columnNumber: 158
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded",
                                            children: [
                                                campaign_0.jenisKempen === "makanan" && "Makanan",
                                                campaign_0.jenisKempen === "wang" && "Wang",
                                                campaign_0.jenisKempen === "kedua-duanya" && "Makanan & Wang"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                            lineNumber: 299,
                                            columnNumber: 516
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                        lineNumber: 299,
                                        columnNumber: 494
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm mb-4 line-clamp-3",
                                        children: campaign_0.penerangan
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                        lineNumber: 299,
                                        columnNumber: 771
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm text-gray-700 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Kemajuan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 940
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: [
                                                            campaign_0.terkumpul.toLocaleString(),
                                                            " / ",
                                                            campaign_0.sasaran.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 961
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                                lineNumber: 299,
                                                columnNumber: 875
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-gray-200 rounded-full h-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300",
                                                    style: {
                                                        width: `${progressPercentage}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 1136
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                                lineNumber: 299,
                                                columnNumber: 1083
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right text-sm text-gray-600 mt-1",
                                                children: [
                                                    progressPercentage.toFixed(1),
                                                    "% complete"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                                lineNumber: 301,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                        lineNumber: 299,
                                        columnNumber: 853
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "📅 ",
                                                    campaign_0.tarikhMula,
                                                    " - ",
                                                    campaign_0.tarikhAkhir
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                                lineNumber: 301,
                                                columnNumber: 184
                                            }, this),
                                            campaign_0.status === "aktif" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `font-medium ${daysRemaining <= 7 ? "text-red-600" : "text-green-600"}`,
                                                children: [
                                                    "⏰ ",
                                                    daysRemaining > 0 ? `${daysRemaining} hari lagi` : "Tamat"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                                lineNumber: 301,
                                                columnNumber: 278
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                        lineNumber: 301,
                                        columnNumber: 140
                                    }, this),
                                    campaign_0.status === "aktif" && daysRemaining > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: _SenaraiKempenFilteredCampaignsMapButtonOnClick,
                                        className: "w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors",
                                        children: "Sumbang Sekarang"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                        lineNumber: 301,
                                        columnNumber: 493
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                                lineNumber: 299,
                                columnNumber: 137
                            }, this)
                        }, campaign_0.id, false, {
                            fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                            lineNumber: 299,
                            columnNumber: 20
                        }, this);
                    }
                })["SenaraiKempen[filteredCampaigns.map()]"];
                $[54] = t36;
            } else {
                t36 = $[54];
            }
            t5 = filteredCampaigns.map(t36);
        }
        $[5] = campaigns;
        $[6] = filter;
        $[7] = loading;
        $[8] = filteredCampaigns;
        $[9] = t10;
        $[10] = t11;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
        $[16] = t9;
    } else {
        filteredCampaigns = $[8];
        t10 = $[9];
        t11 = $[10];
        t4 = $[11];
        t5 = $[12];
        t6 = $[13];
        t7 = $[14];
        t8 = $[15];
        t9 = $[16];
    }
    if (t11 !== Symbol.for("react.early_return_sentinel")) {
        return t11;
    }
    let t12;
    if ($[55] !== t4 || $[56] !== t5) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[55] = t4;
        $[56] = t5;
        $[57] = t12;
    } else {
        t12 = $[57];
    }
    let t13;
    if ($[58] !== filteredCampaigns.length) {
        t13 = filteredCampaigns.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow-lg rounded-lg p-8 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: "Tiada kempen dijumpai."
            }, void 0, false, {
                fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
                lineNumber: 347,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
            lineNumber: 347,
            columnNumber: 45
        }, this);
        $[58] = filteredCampaigns.length;
        $[59] = t13;
    } else {
        t13 = $[59];
    }
    let t14;
    if ($[60] !== t12 || $[61] !== t13 || $[62] !== t6 || $[63] !== t7 || $[64] !== t8 || $[65] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t9,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[60] = t12;
        $[61] = t13;
        $[62] = t6;
        $[63] = t7;
        $[64] = t8;
        $[65] = t9;
        $[66] = t14;
    } else {
        t14 = $[66];
    }
    let t15;
    if ($[67] !== t10 || $[68] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$kongsirezeki$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: t14
        }, void 0, false, {
            fileName: "[project]/Documents/Project/kongsirezeki/app/components/SenaraiKempen.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[67] = t10;
        $[68] = t14;
        $[69] = t15;
    } else {
        t15 = $[69];
    }
    return t15;
}
_s(SenaraiKempen, "7zZtDCPyTsMMVA6eKNMjAIY8psU=");
_c = SenaraiKempen;
function _SenaraiKempenFilteredCampaignsMapButtonOnClick() {
    return window.location.href = "/donate";
}
function _SenaraiKempenFilteredCampaignsReduce2(sum_0, c_1) {
    return sum_0 + c_1.terkumpul;
}
function _SenaraiKempenFilteredCampaignsReduce(sum, c_0) {
    return sum + c_0.sasaran;
}
function _SenaraiKempenFilteredCampaignsFilter(c) {
    return c.status === "aktif";
}
function _SenaraiKempenGetDaysRemaining(tarikhAkhir) {
    const end = new Date(tarikhAkhir);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / 86400000);
    return diffDays;
}
function _SenaraiKempenGetProgressPercentage(terkumpul, sasaran) {
    return Math.min(terkumpul / sasaran * 100, 100);
}
function _SenaraiKempenGetStatusText(status_0) {
    switch(status_0){
        case "aktif":
            {
                return "Aktif";
            }
        case "tidak_aktif":
            {
                return "Tidak Aktif";
            }
        case "selesai":
            {
                return "Selesai";
            }
        default:
            {
                return status_0;
            }
    }
}
function _SenaraiKempenGetStatusColor(status) {
    switch(status){
        case "aktif":
            {
                return "bg-green-100 text-green-800 border-green-300";
            }
        case "tidak_aktif":
            {
                return "bg-red-100 text-red-800 border-red-300";
            }
        case "selesai":
            {
                return "bg-blue-100 text-blue-800 border-blue-300";
            }
        default:
            {
                return "bg-gray-100 text-gray-800 border-gray-300";
            }
    }
}
var _c;
__turbopack_context__.k.register(_c, "SenaraiKempen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Project_kongsirezeki_app_components_c1434c1d._.js.map
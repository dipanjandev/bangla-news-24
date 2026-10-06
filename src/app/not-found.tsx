"use client";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-lg mx-auto">
        {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট সহ বড় টেক্সট */}
        <div className="relative mb-6">
          <span className="text-8xl sm:text-9xl font-black text-red-100 select-none tracking-widest">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-red-800 tracking-tight">
              পেজটি পাওয়া যায়নি
            </span>
          </div>
        </div>

        {/* বিবরণ */}
        <p className="text-red-600 text-base sm:text-lg mb-8 leading-relaxed">
          আপনি যে পেজটি খুঁজছেন তা মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা
          সাময়িকভাবে অনুপলব্ধ রয়েছে।
        </p>

        {/* অ্যাকশন বাটনসমূহ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-red-900 hover:bg-red-800 rounded-xl transition duration-200 shadow-sm hover:shadow"
          >
            হোমপেজে ফিরে যান
          </Link>
          <button
            onClick={() =>
              typeof window !== "undefined" && window.history.back()
            }
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-red-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition duration-200 shadow-sm"
          >
            পূর্বের পেজে যান
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

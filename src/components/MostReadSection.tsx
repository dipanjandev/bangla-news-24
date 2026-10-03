import React from "react";

interface ImostReadDataType {
  category: string;
  description: null;
  firstPublished: string;
  id: string;
  imageAlt: null;
  imageUrl: null;
  isLive: boolean;
  lastPublished: null;
  link: string;
  rank: number;
  source: string;
  title: string;
  type: string;
}

const MostReadSection = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  //   console.log("Data From Most Read Section", data);
  const mostReadData: ImostReadDataType[] = data.data;
  //   console.log("Data From Most Read Data", mostReadData);

  return (
    <div className="bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
      {/* হেডার / সেকশন টাইটেল */}
      <div className="border-b border-gray-100 px-5 py-4">
        <h1 className="font-bold text-lg md:text-xl text-red-700 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block"></span>
          সর্বাধিক পঠিত
        </h1>
      </div>

      {/* সংবাদ তালিকা */}
      <div className="divide-y divide-gray-100 px-5">
        {mostReadData.map((mrd, index: number) => (
          <div
            key={mrd.id}
            className="group py-3.5 flex items-start gap-3.5 cursor-pointer first:pt-3 last:pb-4"
          >
            {/* সিরিয়াল নম্বর (১, ২, ৩...) */}
            <span className="text-xl md:text-2xl font-black  transition-colors select-none leading-none pt-0.5 w-6 text-center shrink-0 text-red-700">
              {index + 1}
            </span>

            {/* খবরের টাইটেল */}
            <h2 className="text-sm md:text-base font-semibold text-gray-800 leading-snug transition-colors line-clamp-2 hover:text-red-700">
              {mrd.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostReadSection;

import Image from "next/image";
import React from "react";

interface NewsType {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: NewsType[] }) => {
  const [singleNews, ...otherNews] = news;
  //   console.log(singleNews);
  //   const otherNews = news.slice(1);
  //   console.log(otherNews);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Featured News Card */}
        <div className="lg:col-span-6 flex flex-col bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
          {/* Image Container */}
          <div className="relative aspect-16/10 sm:aspect-video lg:aspect-16/10 w-full overflow-hidden bg-gray-100">
            <Image
              src={singleNews.imageUrl}
              alt={singleNews.imageAlt || singleNews.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
            <div>
              {/* Category */}
              <span className="text-red-700 text-xs sm:text-sm font-bold block mb-2 tracking-wide">
                {singleNews.category || "প্রধান খবর"}
              </span>

              {/* Main Title */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-snug sm:leading-tight hover:text-red-700 cursor-pointer transition-colors mb-3">
                {singleNews.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
                {singleNews.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Other News List Card */}
        <div className="lg:col-span-6 bg-white border border-gray-200/90 rounded-2xl px-5 sm:px-6 divide-y divide-gray-200/80 shadow-xs flex flex-col justify-between">
          {otherNews.slice(0, 6).map((otherN) => (
            <div
              key={otherN.id}
              className="py-3.5 sm:py-4 lg:py-2 first:pt-4 sm:first:pt-5 last:pb-4 sm:last:pb-5 cursor-pointer group flex flex-col justify-center"
            >
              <span className="text-red-700 text-xs sm:text-[13px] font-bold block mb-1">
                {otherN.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug group-hover:text-red-700 transition-colors line-clamp-2">
                {otherN.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNews;

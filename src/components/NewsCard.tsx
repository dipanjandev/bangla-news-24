import Image from "next/image";
interface DataType {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

const NewsCard = ({ news }: { news: DataType }) => {
  //   console.log(news);

  return (
    <div className="bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative aspect-16/10 sm:aspect-video lg:aspect-16/10 w-full overflow-hidden bg-gray-100">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt || news.title}
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
            {news.category}
          </span>

          {/* Main Title */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-snug sm:leading-tight hover:text-red-700 cursor-pointer transition-colors mb-3">
            {news.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
            {news.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

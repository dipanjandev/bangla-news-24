import Image from "next/image";

// ১. টপিক/ক্যাটাগরি টাইপ
export interface NewsTopic {
  id: string;
  name: string;
}

// ২. আর্টিকেলের বডির ভেতরের ছবির টাইপ
export interface BodyImageItem {
  type: "image";
  url: string;
  width?: number;
  height?: number;
  caption?: string;
  altText?: string;
  copyrightHolder?: string;
}

// ৩. আর্টিকেলের বডির ভেতরের টেক্সট টাইপ
export interface BodyTextItem {
  type: "text";
  text: string;
}

// ৪. আর্টিকেলের বডির ভেতরের সাব-হেডিং টাইপ
export interface BodySubheadingItem {
  type: "subheading";
  text: string;
}

// ৫. বডি আইটেমের ডিসক্রিমিনেটেড ইউনিয়ন টাইপ
export type NewsBodyItem = BodyImageItem | BodyTextItem | BodySubheadingItem;

// ৬. একক খবরের মূল অবজেক্ট টাইপ (news)
export interface NewsItem {
  id: string;
  title: string;
  description?: unknown;
  link?: string;
  firstPublished?: string;
  lastPublished?: string;
  byline?: unknown[];
  topics?: NewsTopic[];
  tags?: string[];
  imageUrl?: string;
  body?: NewsBodyItem[];
  text?: string;
  wordCount?: number;
  source?: string;
  sourceUrl?: string;
}

// ৭. API রেসপন্সের টাইপ
export interface NewsApiResponse {
  success: boolean;
  cachedAt?: string;
  data: NewsItem;
}

// ৮. পেজ কম্পোনেন্টের Props টাইপ (Next.js 15+ এ params একটি Promise)
interface PageProps {
  params: Promise<{
    newsId: string;
  }>;
}

const NewsDetais = async ({ params }: PageProps) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data: NewsApiResponse = await res.json();
  const news: NewsItem = data.data;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 font-sans antialiased text-slate-800">
      {/* ১. টপিক/ক্যাটাগরি ব্যাজ */}
      {news.topics && news.topics.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {news.topics.slice(0, 2).map((topic) => (
            <span
              key={topic.id}
              className="text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-sm"
            >
              {topic.name}
            </span>
          ))}
        </div>
      )}

      {/* ২. মূল হেডলাইন */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
        {news.title}
      </h1>

      {/* ৩. মেটা ইনফরমেশন */}
      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 pb-5 mb-6 border-b border-slate-200">
        <span className="font-semibold text-slate-700">{news.source}</span>
      </div>

      {/* ৪. আর্টিকেলের বডি (রিচ কনটেন্ট ব্লকের রেন্ডারিং) */}
      <div className="space-y-6">
        {news.body && news.body.length > 0 ? (
          news.body.map((item, index) => {
            // সাব-হেডিং
            if (item.type === "subheading") {
              return (
                <h2
                  key={index}
                  className="text-xl sm:text-2xl font-bold text-slate-900 pt-6 pb-2 border-b border-slate-100 leading-snug"
                >
                  {item.text}
                </h2>
              );
            }

            // আর্টিকেলের ভেতরের ছবি (ক্যাপশন ও কপিরাইটসহ)
            if (item.type === "image") {
              return (
                <figure
                  key={index}
                  className="my-6 rounded-xl overflow-hidden bg-slate-100"
                >
                  <div className="relative aspect-video w-full">
                    <Image
                      src={item.url}
                      alt={item.altText || news.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 896px) 100vw, 896px"
                      priority={index === 0}
                    />
                  </div>
                  {(item.caption || item.copyrightHolder) && (
                    <figcaption className="p-3 text-xs text-slate-500 bg-slate-50 border-t border-slate-100 flex flex-wrap justify-between items-center gap-2">
                      <span>{item.caption}</span>
                      {item.copyrightHolder && (
                        <span className="italic font-medium text-slate-400">
                          ছবি: {item.copyrightHolder}
                        </span>
                      )}
                    </figcaption>
                  )}
                </figure>
              );
            }

            // সাধারণ টেক্সট / প্যারাগ্রাফ
            if (item.type === "text") {
              if (item.text.includes("হোয়াটসঅ্যাপ চ্যানেল")) {
                return null;
              }

              return (
                <div key={index} className="space-y-4">
                  {item.text.split("\n").map((para, ind) => {
                    const cleanPara = para.trim();
                    if (!cleanPara) return null;
                    return (
                      <p
                        key={ind}
                        className="text-base sm:text-lg leading-relaxed sm:leading-loose text-slate-700 font-normal"
                      >
                        {cleanPara}
                      </p>
                    );
                  })}
                </div>
              );
            }

            return null;
          })
        ) : (
          <div className="space-y-4">
            {news.text?.split("\n\n").map((para, ind) => (
              <p
                key={ind}
                className="text-base sm:text-lg leading-relaxed text-slate-700"
              >
                {para}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* ৫. আর্টিকেলের নিচের ট্যাগসমূহ */}
      {news.tags && news.tags.length > 0 && (
        <div className="mt-12 pt-6 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            সম্পর্কিত বিষয়:
          </h3>
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag, ind) => (
              <span
                key={ind}
                className="text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default NewsDetais;

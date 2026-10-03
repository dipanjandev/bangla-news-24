import MainNews from "./MainNews";
import MostReadSection from "./MostReadSection";
import NewsCard from "./NewsCard";
interface NewsDataType {
  title: string;
  curationId: string;
  curationType: string;
  link: null | string;
  count: number;
  articles: {
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
  }[];
}

const NewsSection = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const newsData = data.data;
  const mainNews = newsData[0].articles;
  const otherSection: NewsDataType[] = newsData.slice(1);
  //   console.log(otherSection);

  return (
    <div className="grid grid-cols-3 gap-2 container mx-auto">
      <div className="col-span-2">
        {/* News Section */}
        <MainNews news={mainNews} />
        <div className="grid gap-5 mt-5">
          {otherSection
            ?.filter(
              (os) =>
                ![
                  "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!",
                  "বিবিসি বাংলা এখন ইন্সটাগ্রামে!",
                  "সামাজিক মাধ্যমে বিবিসি বাংলা",
                ].includes(os.title),
            )
            .map((os) => (
              <div key={os.curationId}>
                <h3 className="border-b-2 border-red-600 py-1">{os.title}</h3>
                <div className="grid grid-cols-3 gap-4 mt-5">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="col-span-1">
        {/* Most Read Section */}
        <div className="mt-5">
          <MostReadSection />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;

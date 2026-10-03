import MainNews from "./MainNews";

const NewsSection = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const newsData = data.data;
  const mainNews = newsData[0].articles;
  //   console.log(mainNews);

  return (
    <div className="grid grid-cols-3 gap-2 container mx-auto">
      <div className="col-span-2">
        {/* News Section */}
        <MainNews news={mainNews} />
      </div>
      <div className="col-span-1">
        {/* Sorbadhik Pathito Section */}
        <h1>Sorbadhik Pathito Section</h1>
      </div>
    </div>
  );
};

export default NewsSection;

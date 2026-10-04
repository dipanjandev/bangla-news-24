import NewsCard from "@/components/NewsCard";

interface NewsDataType {
  category: string;
  description: string;
  firstPublished: string;
  id: string;
  imageAlt: string;
  imageUrl: string;
  isLive: false;
  lastPublished: string;
  link: string;
  source: string;
  title: string;
  type: string;
}
interface PageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryNewsPage = async ({ params }: PageProps) => {
  //   console.log("Typeof Params", typeof params);

  const { categoryId } = await params;
  //   console.log(categoryId);
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  // console.log("API Data", data);
  const categoryNews: NewsDataType[] = data.data;
  //   console.log(categoryNews);

  return (
    <div className="container mx-auto space-y-10">
      <h1 className="text-2xl font-bold border-b-2 border-red-500">
        {data.title}
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNewsPage;

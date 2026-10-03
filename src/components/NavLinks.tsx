import Link from "next/link";

interface dataType {
  slug: string;
  title: string;
  topicId: boolean | string;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: dataType[] = data.data;
  const filteredData = navs.filter((n) => n.scrapable);
  //   এখানে তো আমরা চাইলে topicId দিয়েও করতে পারতাম। আর scrapable এর ক্ষেত্রে যেমন আমরা true false ব্যাবহার করছি তেমন টপিকআইডির ক্ষেত্রে আমরা কি ব্যবহার করতাম?
  //   console.log(navs, "Data from Data for nav links");

  return (
    <div className="flex gap-5 items-center justify-center mt-4">
      <Link href={"./"}>হোম</Link>
      {filteredData.map((n, ind) => (
        <Link key={ind} href={n.slug}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

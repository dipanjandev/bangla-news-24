import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import React from "react";

interface headDataType {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const marqData: headDataType[] = data.data;
  //   console.log(marqData, "Here is MarqData");

  return (
    <section className="bg-red-600 text-white mb-10">
      <div className="container mx-auto flex items-center">
        <div className="bg-red-700 py-1 px-2 font-bold">সর্বশেষ</div>
        <MarqueeText direction="right" duration={20}>
          {marqData.map((h) => (
            <span key={h.id}>
              <span className="mx-2">•</span>
              <span>{h.title}</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </section>
  );
};

export default Marquee;

import Image from "next/image";
import React from "react";

const NavBar = () => {
  const banglaDate = new Intl.DateTimeFormat("bn-BD-u-ca-beng", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
  //   console.log(banglaDate, "Here is Bangla Date");

  return (
    <section className="container mx-auto grid grid-cols-3 py-5">
      <div></div>
      <div className="flex gap-2 text-lg font-bold justify-center">
        <Image
          src={"/logo.webp"}
          alt="Main Logo"
          width={50}
          height={50}
        ></Image>
        <div>
          <h2 className="text-red-600">Bangla News 24</h2>
          <p className="text-sm text-gray-700 font-normal">{banglaDate}</p>
        </div>
      </div>
      <div className="flex gap-1 justify-end items-center font-bold">
        <button className="cursor-pointer px-4 btn-ghost">সাইন ইন</button>
        <button className="bg-red-600 text-white cursor-pointer hover:bg-red-700 btn">
          সাইন আপ
        </button>
      </div>
    </section>
  );
};

export default NavBar;

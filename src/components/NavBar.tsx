import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const NavBar = () => {
  const banglaDate = new Intl.DateTimeFormat("bn-BD-u-ca-beng", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
  //   console.log(banglaDate, "Here is Bangla Date");

  return (
    <section className="py-5">
      <div className="container mx-auto grid grid-cols-3">
        <div></div>
        <div className="flex gap-2 text-lg font-bold justify-center">
          <Image
            src={"/logo.webp"}
            alt="Main Logo"
            width={60}
            height={60}
            className="h-14 w-auto object-contain"
          ></Image>
          <div>
            <h2 className="text-red-600">Bangla News 24</h2>
            <p className="text-sm text-gray-700 font-normal">{banglaDate}</p>
          </div>
        </div>
        {/* Sign In and Sign Up Button */}
        <UserInfo />
      </div>
      <NavLinks />
    </section>
  );
};

export default NavBar;

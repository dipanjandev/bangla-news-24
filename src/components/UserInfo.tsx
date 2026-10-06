"use client";

import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = useSession();
  const user = session?.user;
  //   console.log(user, "from User");
  const handleSignout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.reload(); // সাথে সাথে পেজ রিফ্রেশ করে লগইন স্টেট মুছে দেবে
        },
      },
    });
  };

  return (
    <div className="flex gap-1 justify-end items-center font-bold">
      {user ? (
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <Link href={"/profile"}>
              <div className="avatar">
                <div className="ring-red-600 ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                  <Image
                    width={10}
                    height={10}
                    alt={user?.name}
                    src={user?.image as string}
                  />
                </div>
              </div>
            </Link>
            <h4 className="text-sm font-normal">{user?.name}</h4>
          </div>
          <button onClick={handleSignout} className="btn bg-red-600 text-white">
            সাইন আউট
          </button>
        </div>
      ) : (
        <div>
          <Link href={"/signin"}>
            <button className="cursor-pointer px-4 btn-ghost">সাইন ইন</button>
          </Link>
          <Link href={"/signup"}>
            <button className="bg-red-600 text-white cursor-pointer hover:bg-red-700 btn">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;

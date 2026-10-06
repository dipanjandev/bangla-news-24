"use client";
import { signIn } from "@/lib/auth-client";

import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const signInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
    const { data } = await signIn.email({
      ...user,
    });
    if (data) {
      toast.success("সফলভাবে সাইন ইন হয়েছে");
      redirect("/");
      //   console.log(data);
    }
  };

  const handleToGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
    });
    // console.log(data, "data from google");
  };
  const githubSignin = async () => {
    await signIn.social({
      provider: "github",
    });
    //   console.log(data);
  };

  return (
    <div className="flex justify-center pt-5">
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-xl space-y-4">
          <h3 className="text-4xl grid justify-center font-bold text-red-600 pb-5">
            সাইন ইন
          </h3>

          <div className="text-sm space-y-1 font-bold">
            <label className="label">ইমেইল</label>
            <input
              name="email"
              type="email"
              className="input w-xl"
              placeholder="আপনার ইমেইল লিখুন"
            />
          </div>

          <div className="text-sm space-y-1 font-bold">
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-xl"
              placeholder="আপনার পাসওয়ার্ড দিন"
            />
          </div>

          <button
            type="submit"
            className="btn bg-red-600 text-white font-bold mt-4"
          >
            সাইন ইন করুন
          </button>
          <div className="divider text-lg font-bold">অথবা</div>

          {/* Sign in with google */}
          <button
            onClick={handleToGoogleSignIn}
            className="btn bg-blue-600 text-white font-bold mt-4"
          >
            গুগল দিয়ে সাইন ইন করুন
          </button>
          {/* Sign in with Github */}
          <button
            onClick={githubSignin}
            className="btn bg-gray-600 text-white font-bold mt-4"
          >
            গিটহাব দিয়ে সাইন ইন করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default signInPage;

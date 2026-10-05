"use client";

import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const signUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const user = Object.fromEntries(formdata.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };
    // console.log("formdata from", user);
    const { data, error } = await signUp.email({
      ...user,
      //   callbackURL: "/",
    });

    if (data) {
      toast.success("আপনার একাউন্ট সফলভাবে তৈরি হয়েছে");
      redirect("/");
      //   console.log(data);
    }
    if (error) {
      //   console.log(error);
      toast.error("ইতোমধ্যে ইমেইটি দিয়ে রেজিস্ট্রেশন করা রয়েছে");
    }
  };
  return (
    <div className="flex justify-center pt-5">
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-xl space-y-4">
          <h3 className="text-4xl grid justify-center font-bold text-red-600 pb-5">
            সাইন আপ
          </h3>
          <div className="text-sm space-y-1 font-bold">
            <label className="label">নাম</label>
            <input
              name="name"
              type="text"
              className="input w-xl"
              placeholder="আপনার নাম লিখুন"
            />
          </div>

          <div className="text-sm space-y-1 font-bold">
            <label className="label">Image</label>
            <input
              name="image"
              type="url"
              className="input w-xl"
              placeholder="আপনার ছবির লিংক দিন"
            />
          </div>

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
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default signUpPage;

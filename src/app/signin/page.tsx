const signInPage = () => {
  return (
    <div className="flex justify-center pt-5">
      <form>
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

          <button className="btn bg-red-600 text-white font-bold mt-4">
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default signInPage;

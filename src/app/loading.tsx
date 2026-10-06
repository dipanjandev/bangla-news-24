import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* স্পিনার এবং গ্লো ইফেক্ট */}
      <div className="relative flex items-center justify-center">
        {/* পেছনে হালকা গ্লো */}
        <div className="absolute w-20 h-20 rounded-full bg-red-200 blur-xl opacity-70 animate-pulse"></div>

        {/* স্পিনিং রিং */}
        <div className="w-14 h-14 rounded-full border-4 border-slate-200 border-t-red-800 animate-spin"></div>
      </div>

      {/* টেক্সট ও সাবটাইটেল */}
      <div className="mt-6 text-center space-y-2">
        <h2 className="text-xl font-bold tracking-tight text-red-800">
          তথ্য লোড হচ্ছে
        </h2>
        <p className="text-sm text-red-500">
          অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন...
        </p>
      </div>

      {/* নিচে হালকা ৩টি পালসিং ডট */}
      <div className="flex items-center gap-1.5 mt-4">
        <div className="w-2 h-2 rounded-full bg-red-400 animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 rounded-full bg-red-400 animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 rounded-full bg-red-400 animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;

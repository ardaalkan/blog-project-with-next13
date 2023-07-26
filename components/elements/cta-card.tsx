import React from "react";
import Image from "next/image";

const CtaCart = () => {
  return (
    <div className="rounded-md bg-slate-100 py-10 px-6 relative">
      <div className="absolute z-10 inset-0 bg-gradient-to-br bg-gradient-r from-white/95 via-white/70 to-white/30" />
      <Image
        fill
        alt="CTA Card Image"
        className="object-center object-cover overflow-hidden"
        src="https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
      />
      <div className="relative z-20">
        <div className="font-medium text-lg">#explorertheworld</div>
        <h3 className="text-4xl font-semibold mt-3">Explore the World.</h3>
        <p className="mt-2 text-lg max-w-lg">
          Explore the world with me. Join Me!
        </p>
        <form className="mt-6 flex items-center gap-2">
          <input
            placeholder="Write your e-mail."
            className="bg-white/70 text-base rounded-md py-4 px-4 outline-none focus:ring-2 ring-neutral-500 placeholder:text-sm"
          />
          <button className="bg-neutral-900 rounded-md py-4 px-2 text-neutral-200 whitespace-nowrap">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CtaCart;

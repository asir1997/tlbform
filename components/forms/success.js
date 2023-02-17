import Link from "next/link";
import React from "react";

export default function FormSuccess({ formStep }) {
  return (
    <div className={formStep === 5 ? "block" : "hidden"}>
      <div className=" flex flex-col items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 text-emerald-500">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h2 className="text-xl font-heading mt-2">
          {" "}
          Success. Your form has been submitted!
        </h2>
        <p className="text-gray-600  mx-auto max-w-lg text-center">
          Thank you for submitting this form. Your information will be reviewed
          and processed with in few days.
        </p>
        <Link
          href="/"
          className="mt-2 text-white bg-primary hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

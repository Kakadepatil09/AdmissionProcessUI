"use client";
import { useState } from "react";

export default function Declarations() {
  const [agreed, setAgreed] = useState(false);

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  return (
    <div className="flex-1">
      <h3 className="text-xl font-medium mb-4">Declarations</h3>

      <div className="space-y-6">
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
          <p className="text-gray-700">
            Please read the following declarations carefully before proceeding.
          </p>
        </div>

        <div className="border border-gray-300 p-4 rounded-md bg-white shadow-sm">
          <p className="text-gray-700">
            I hereby declare that the information provided in this application form is true, correct,
            and complete to the best of my knowledge and belief. I understand that any false or misleading 
            information may result in the cancellation of my admission.
          </p>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="declaration"
              checked={agreed}
              onChange={handleCheckboxChange}
              className="h-5 w-5 text-[#FC8939] border-gray-300 rounded focus:ring-[#FC8939]"
            />
            <label htmlFor="declaration" className="ml-2 text-gray-700 text-sm">
              I have read and agree to the terms of the declaration.
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!agreed}
            className={`px-4 py-2 rounded-md transition ${
              agreed
                ? "bg-[#FC8939] text-white hover:bg-[#e57830]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit & Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

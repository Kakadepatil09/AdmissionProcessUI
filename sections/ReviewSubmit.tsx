"use client";

export default function ReviewSubmit() {
  return (
    <div className="flex-1">
      <h3 className="text-xl font-medium mb-4">Review & Submit</h3>

      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
          <p className="text-gray-700">
            Please review all the details you have entered before submitting. Once submitted, changes may not be allowed.
          </p>
        </div>

        <div className="border border-gray-300 p-4 rounded-md bg-white shadow-sm">
          <p className="text-gray-700">
            Check your details below. If you need to make any corrections, navigate to the relevant section.
          </p>

          {/* Placeholder for dynamically fetched user details */}
          <ul className="mt-4 space-y-2 text-gray-700">
            <li><strong>Name:</strong> John Doe</li>
            <li><strong>Email:</strong> johndoe@example.com</li>
            <li><strong>Program Selected:</strong> B.Tech Computer Science</li>
            <li><strong>Entrance Exam:</strong> JEE Main</li>
            {/* Add more fields dynamically */}
          </ul>
        </div>

        <div className="flex justify-between">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            Edit Details
          </button>
          <button className="px-4 py-2 bg-[#FC8939] text-white rounded-md hover:bg-[#e57830]">
            Confirm & Submit
          </button>
        </div>
      </div>
    </div>
  );
}

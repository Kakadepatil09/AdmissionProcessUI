"use client";
import { useState } from "react";

export default function CategorySelection() {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setSubcategory("");
    setShowCertificate(e.target.value !== "general");
  };

  return (
    <div className="flex-1">
      <h3 className="text-xl font-medium mb-4">Category Selection</h3>
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <p>Selecting the appropriate category is essential for determining fee structure, scholarship eligibility, and seat allocation as per government policies.</p>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Select Category *
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">-- Select Category --</option>
            <option value="general">General</option>
            <option value="sc">Scheduled Caste (SC)</option>
            <option value="st">Scheduled Tribe (ST)</option>
            <option value="obc">Other Backward Class (OBC)</option>
            <option value="pwd">Person with Disability (PwD)</option>
            <option value="ews">Economically Weaker Section (EWS)</option>
          </select>
        </div>

        {category && category !== "general" && (
          <div>
            <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 mb-1">
              Select Sub-Category (if applicable)
            </label>
            <select
              id="subcategory"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">-- Select Sub-Category --</option>
              {category === "obc" && (
                <>
                  <option value="obc-ncl">OBC (Non-Creamy Layer)</option>
                  <option value="obc-cl">OBC (Creamy Layer)</option>
                </>
              )}
              {category === "pwd" && (
                <>
                  <option value="pwd-locomotor">Locomotor Disability</option>
                  <option value="pwd-visual">Visual Impairment</option>
                  <option value="pwd-hearing">Hearing Impairment</option>
                </>
              )}
            </select>
          </div>
        )}

        {showCertificate && (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="font-medium">Important:</p>
            <p>You will need to upload a valid category certificate in the document upload section. The certificate should be issued by the competent authority as per government norms.</p>
          </div>
        )}

        {category === "ews" && (
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="font-medium">EWS Certificate Requirements:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Family income should be below ₹8 lakhs per annum</li>
              <li>Certificate must be issued for the current financial year</li>
              <li>Certificate must be issued by authorized government officials</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
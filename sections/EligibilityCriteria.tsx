"use client";
import { useState } from "react";

export default function EligibilityCriteria() {
  const [criteria, setCriteria] = useState({
    age: "",
    qualifyingExam: "",
    percentage: "",
    entranceExam: "",
    entranceScore: "",
    residency: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setCriteria({
      ...criteria,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const isEligible = () => {
    // Simple eligibility check
    const age = parseInt(criteria.age);
    const percentage = parseFloat(criteria.percentage);
    const score = parseInt(criteria.entranceScore);
    
    return (
      criteria.qualifyingExam && 
      !isNaN(age) && age >= 17 && 
      !isNaN(percentage) && percentage >= 60 && 
      criteria.entranceExam && 
      !isNaN(score) && score >= 100
    );
  };

  return (
    <div className="flex-1">
      <h3 className="text-xl font-medium mb-4">Eligibility Criteria</h3>
      <div className="space-y-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="font-medium">Eligibility Requirements:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Minimum 17 years of age</li>
            <li>Completed qualifying examination with minimum 60% marks</li>
            <li>Valid entrance examination score</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Your Age (in years) *
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={criteria.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
              min="0"
            />
          </div>

          <div>
            <label htmlFor="qualifyingExam" className="block text-sm font-medium text-gray-700 mb-1">
              Qualifying Examination *
            </label>
            <select
              id="qualifyingExam"
              name="qualifyingExam"
              value={criteria.qualifyingExam}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">-- Select Examination --</option>
              <option value="highSchool">High School (10+2)</option>
              <option value="diploma">Diploma</option>
              <option value="bachelor">Bachelor's Degree</option>
            </select>
          </div>

          <div>
            <label htmlFor="percentage" className="block text-sm font-medium text-gray-700 mb-1">
              Percentage in Qualifying Exam *
            </label>
            <input
              type="number"
              id="percentage"
              name="percentage"
              value={criteria.percentage}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
              step="0.01"
              min="0"
              max="100"
            />
          </div>

          <div>
            <label htmlFor="entranceExam" className="block text-sm font-medium text-gray-700 mb-1">
              Entrance Examination *
            </label>
            <select
              id="entranceExam"
              name="entranceExam"
              value={criteria.entranceExam}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">-- Select Entrance Exam --</option>
              <option value="jee">JEE</option>
              <option value="neet">NEET</option>
              <option value="cat">CAT</option>
              <option value="gate">GATE</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="entranceScore" className="block text-sm font-medium text-gray-700 mb-1">
              Entrance Examination Score *
            </label>
            <input
              type="number"
              id="entranceScore"
              name="entranceScore"
              value={criteria.entranceScore}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
              min="0"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="residency"
              name="residency"
              checked={criteria.residency}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="residency" className="ml-2 block text-sm text-gray-700">
              I am a resident of the state
            </label>
          </div>
        </div>

        <div className={`p-4 rounded-md mt-6 ${isEligible() ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'} border-l-4`}>
          <p className="font-medium">
            {isEligible() 
              ? "Based on the information provided, you appear to be eligible for the program." 
              : "Based on the information provided, you may not meet all eligibility criteria. Please review the requirements."}
          </p>
        </div>
      </div>
    </div>
  );
}
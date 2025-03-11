"use client";
import { useState } from "react";

export default function EducationHistory() {
  const [educationRecords, setEducationRecords] = useState([
    {
      level: "",
      institution: "",
      board: "",
      yearOfPassing: "",
      percentage: "",
      subjects: "",
    },
  ]);

  const addEducationRecord = () => {
    setEducationRecords([
      ...educationRecords,
      {
        level: "",
        institution: "",
        board: "",
        yearOfPassing: "",
        percentage: "",
        subjects: "",
      },
    ]);
  };

  const removeEducationRecord = (index: number) => {
    const updatedRecords = [...educationRecords];
    updatedRecords.splice(index, 1);
    setEducationRecords(updatedRecords);
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    const updatedRecords = [...educationRecords];
    updatedRecords[index] = {
      ...updatedRecords[index],
      [field]: value,
    };
    setEducationRecords(updatedRecords);
  };

  return (
    <div className="flex-1">
      <h3 className="text-xl font-medium mb-4">Education History</h3>
      <p className="mb-4">Please provide details of your educational qualifications starting from the highest level.</p>

      {educationRecords.map((record, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-md mb-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">Education Record {index + 1}</h4>
            {educationRecords.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducationRecord(index)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`level-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Education Level *
              </label>
              <select
                id={`level-${index}`}
                value={record.level}
                onChange={(e) => handleEducationChange(index, "level", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">-- Select Level --</option>
                <option value="10th">10th (Secondary)</option>
                <option value="12th">12th (Higher Secondary)</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">Ph.D</option>
              </select>
            </div>

            <div>
              <label htmlFor={`institution-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                School/College/University *
              </label>
              <input
                type="text"
                id={`institution-${index}`}
                value={record.institution}
                onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor={`board-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Board/University *
              </label>
              <input
                type="text"
                id={`board-${index}`}
                value={record.board}
                onChange={(e) => handleEducationChange(index, "board", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor={`yearOfPassing-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Year of Passing *
              </label>
              <input
                type="number"
                id={`yearOfPassing-${index}`}
                value={record.yearOfPassing}
                onChange={(e) => handleEducationChange(index, "yearOfPassing", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                min="1950"
                max={new Date().getFullYear()}
                required
              />
            </div>

            <div>
              <label htmlFor={`percentage-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Percentage/CGPA *
              </label>
              <input
                type="text"
                id={`percentage-${index}`}
                value={record.percentage}
                onChange={(e) => handleEducationChange(index, "percentage", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor={`subjects-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Major Subjects
              </label>
              <input
                type="text"
                id={`subjects-${index}`}
                value={record.subjects}
                onChange={(e) => handleEducationChange(index, "subjects", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="e.g., Physics, Chemistry, Mathematics"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addEducationRecord}
        className="mt-2 px-4 py-2 bg-[#2e3653] text-white rounded-md hover:bg-[#FC8939]"
      >
        + Add Another Education Record
      </button>
    </div>
  );
}

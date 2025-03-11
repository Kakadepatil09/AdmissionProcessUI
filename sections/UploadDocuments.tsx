"use client";
import { useState } from "react";
import { CloudUploadIcon, TrashIcon } from "@heroicons/react/outline";

export default function UploadDocuments() {
  const [documents, setDocuments] = useState<{
    matricMarksheet: File | null;
    seniorMarksheet: File | null;
    entranceScorecard: File | null;
    transferCertificate: File | null;
  }>({
    matricMarksheet: null,
    seniorMarksheet: null,
    entranceScorecard: null,
    transferCertificate: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, docType: string) => {
    if (e.target.files && e.target.files[0]) {
      setDocuments({
        ...documents,
        [docType]: e.target.files[0],
      });
    }
  };

  const removeFile = (docType: string) => {
    setDocuments({
      ...documents,
      [docType]: null,
    });
  };

  const renderFileInput = (label: string, docType: keyof typeof documents) => (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <label className="block text-sm font-medium text-gray-700">{label} *</label>
      
      <div className="mt-2 flex items-center justify-between bg-gray-100 border border-gray-300 rounded-lg p-3 cursor-pointer">
        <input
          type="file"
          id={docType}
          onChange={(e) => handleFileChange(e, docType)}
          className="hidden"
          accept=".png, .jpg, .pdf"
        />
        
        <label htmlFor={docType} className="flex items-center space-x-3 cursor-pointer">
          <CloudUploadIcon className="h-6 w-6 text-blue-500" />
          <span className="text-sm text-gray-700">
            {documents[docType] ? documents[docType]?.name : "Click to upload or drag & drop"}
          </span>
        </label>
        
        {documents[docType] && (
          <button
            onClick={() => removeFile(docType)}
            className="text-red-500 hover:text-red-700 transition"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">Upload Documents</h3>
      <p className="text-sm text-gray-600 mb-6">
        Please upload the following documents in <strong>PNG, JPG, or PDF</strong> format (Max size: <strong>300 KB</strong> each).
      </p>

      <div className="space-y-6">
        {renderFileInput("10th (Matric) Marksheet/DMC", "matricMarksheet")}
        {renderFileInput("12th (Senior Secondary) Marksheet/DMC", "seniorMarksheet")}
        {renderFileInput("Entrance Exam Scorecard/Marksheet", "entranceScorecard")}
        {renderFileInput("Transfer Certificate (T.C.)", "transferCertificate")}
      </div>
    </div>
  );
}

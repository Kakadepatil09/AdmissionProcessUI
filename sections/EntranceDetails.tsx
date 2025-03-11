"use client";
import { useState } from "react";

export default function EntranceDetails() {
    const [entranceDetails, setEntranceDetails] = useState({
        examType: "",
        rollNumber: "",
        yearOfExam: new Date().getFullYear().toString(),
        scoreType: "percentile",
        score: "",
        rank: "",
        validityPeriod: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEntranceDetails({
            ...entranceDetails,
            [name]: value,
        });
    };

    return (
        <div className="flex-1">
            <h3 className="text-xl font-medium mb-4">Entrance Examination Details</h3>

            <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-md">
                    <p>Please provide accurate information about your entrance examination. This information will be verified with the examination authorities.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="examType" className="block text-sm font-medium text-gray-700 mb-1">
                            Entrance Examination *
                        </label>
                        <select
                            id="examType"
                            name="examType"
                            value={entranceDetails.examType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        >
                            <option value="">-- Select Examination --</option>
                            <option value="jee-main">JEE Main</option>
                            <option value="jee-adv">JEE Advanced</option>
                            <option value="neet">NEET</option>
                            <option value="gate">GATE</option>
                            <option value="cat">CAT</option>
                            <option value="cet">State CET</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Roll Number/Registration Number *
                        </label>
                        <input
                            type="text"
                            id="rollNumber"
                            name="rollNumber"
                            value={entranceDetails.rollNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="yearOfExam" className="block text-sm font-medium text-gray-700 mb-1">
                            Year of Examination *            </label>
                        <input
                            type="number"
                            id="yearOfExam"
                            name="yearOfExam"
                            value={entranceDetails.yearOfExam}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="scoreType" className="block text-sm font-medium text-gray-700 mb-1">
                            Score Type *
                        </label>
                        <select
                            id="scoreType"
                            name="scoreType"
                            value={entranceDetails.scoreType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        >
                            <option value="percentile">Percentile</option>
                            <option value="percentage">Percentage</option>
                            <option value="marks">Marks</option>
                            <option value="rank">Rank</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-1">
                            Score *
                        </label>
                        <input
                            type="text"
                            id="score"
                            name="score"
                            value={entranceDetails.score}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="rank" className="block text-sm font-medium text-gray-700 mb-1">
                            Rank (if applicable)
                        </label>
                        <input
                            type="text"
                            id="rank"
                            name="rank"
                            value={entranceDetails.rank}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="validityPeriod" className="block text-sm font-medium text-gray-700 mb-1">
                            Validity Period (if applicable)
                        </label>
                        <input
                            type="text"
                            id="validityPeriod"
                            name="validityPeriod"
                            value={entranceDetails.validityPeriod}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-[#FC8939] text-white px-4 py-2 rounded-md hover:bg-[#e57830] transition"
                    >
                        Save & Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

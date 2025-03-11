"use client";

import Guidelines from "../sections/Guidelines";
import ProgramSelection from "../sections/ProgramSelection";
import PersonalDetails from "../sections/PersonalDetails";
import EligibilityCriteria from "../sections/EligibilityCriteria";
import CategorySelection from "../sections/CategorySelection";
import EducationHistory from "../sections/EducationHistory";
import EntranceDetails from "../sections/EntranceDetails";
import UploadDocuments from "../sections/UploadDocuments";
import Declarations from "../sections/Declarations";
import ReviewSubmit from "../sections/ReviewSubmit";
import MakePayment from "../sections/MakePayment";

interface SectionProps {
  sectionId: number;
}

export default function Section({ sectionId }: SectionProps) {
  const renderSection = () => {
    switch (sectionId) {
      case 1:
        return <Guidelines />;
      case 2:
        return <ProgramSelection />;
      case 3:
        return <PersonalDetails />;
      case 4:
        return <EligibilityCriteria />;
      case 5:
        return <CategorySelection />;
      case 6:
        return <EducationHistory />;
      case 7:
        return <EntranceDetails />;
      case 8:
        return <UploadDocuments />;
      case 9:
        return <Declarations />;
      case 10:
        return <ReviewSubmit />;
      case 11:
        return <MakePayment />;
      default:
        return <div className="text-red-500 text-center">❌ Section Not Found</div>;
    }
  };

  return <div className="w-full">{renderSection()}</div>;
}

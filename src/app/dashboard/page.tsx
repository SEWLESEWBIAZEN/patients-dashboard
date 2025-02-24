import PatientsDetailWrapper from "@/_components/patient/PatientsDetailWrapper";
import TopNavbar from "@/_components/common/TopNavbar";
import { fetchAllPatientData } from "@/_lib/data/patientData"
import { Metadata } from "next";

export const metaData: Metadata = {
    title: "Patient Dashboard",
    description: "A dashboard for managing patient data",
    keywords: ["patient", "dashboard", "nextjs", "tailwindcss"]
}
export default async function Dashboard() {
    let patientData = await fetchAllPatientData();
    return (<div className="bg-[#F6F7F8] px-[18px] flex flex-col gap-[18px]">
        <TopNavbar />
        <PatientsDetailWrapper patientData={patientData} />
    </div>)
}
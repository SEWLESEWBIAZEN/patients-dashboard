import PatientsDetailWrapper from "@/_components/patient/PatientsDetailWrapper";
import TopNavbar from "@/_components/common/TopNavbar";
import { fetchAllPatientData } from "@/_lib/data/patientData"


export default async function Dashboard() {
    const patientData = await fetchAllPatientData();
    return (<div className="bg-[#F6F7F8] px-[18px] flex flex-col gap-[18px]">
        <TopNavbar />
        <PatientsDetailWrapper patientData={patientData} />
    </div>)
}
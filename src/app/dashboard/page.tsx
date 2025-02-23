import TopNavbar from "@/_components/TopNavbar";
import { fetchAllPatientData } from "@/_lib/data/patientData"
export default async function Dashboard() {
    let patientData = await fetchAllPatientData();
    let patientsList: { name: string, gender: string, age: number, profile_picture:string }[] = patientData.map((data: any) => ({ name: data.name, gender: data.gender, age: data.age, profile_picture:data.profile_picture }));
    
    
    return (<div className="bg-[#F6F7F8]">
        <TopNavbar/>
    </div>)
}
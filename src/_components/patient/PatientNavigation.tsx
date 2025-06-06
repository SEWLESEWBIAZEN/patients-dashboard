'use client'
import { Ellipsis, Search } from "lucide-react";
import Profile from "./Profile";
import TopCard from "../common/TopCard";
const UserNavigation = ({ patientsList }: { patientsList: { name: string | undefined, gender: string | undefined, age: number | undefined, profile_picture: string | undefined }[] }) => {
    return (
        <div className="w-1/3 rounded-[16px] bg-[#FFFFFF] mb-[10px] ">
            <div className="flex flex-row items-center justify-between px-[20px]">
                <TopCard title="Patients" />
                <Search className="h-[18px]  w-[18px] " />
            </div>
            <div className="mt-[20px] flex flex-col items-start  h-[954px] overflow-y-auto custom-scrollbar">
                {patientsList?.map((patient: { name: string | undefined, gender: string | undefined, age: number | undefined, profile_picture: string | undefined }, index: number) => {
                    return (<div key={index} className={`flex flex-row items-center px-[20] justify-between w-full px-[20px] py-[16px] ${patient.name === "Jessica Taylor" ? "bg-[#D8FCF7]" : ""}`}>
                        <Profile imgUrl={patient.profile_picture ?? ""} name={patient?.name} description={`${patient?.gender}, ${patient?.age}`} />
                        <Ellipsis className="text-[#072635] me-[20px]" />
                    </div>)
                })}
            </div>

        </div>
    )
}

export default UserNavigation;
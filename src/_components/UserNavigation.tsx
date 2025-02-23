'use client'
import { Ellipsis, Search } from "lucide-react";
import Profile from "./Profile";
import TopCard from "./TopCard";

const UserNavigation = ({ patientsList }: { patientsList: any[] }) => {
    return (
        <div className="w-1/3 rounded-[16px] bg-[#FFFFFF] px-[20] mb-[10px]">
            <TopCard title="Patients" icon={ <Search className="h-[18px] w-[18px]"/>} />
            {/* <div className="my-[20px] h-[33px]  flex flex-row justify-between items-center text-[#072635]">
                <Title title="Patients"/>
                <Search className="h-[18px] w-[18px]"/>
            </div> */}
            <div className="mt-[20px] flex flex-col items-start gap-[32px] h-[1054px] overflow-y-auto custom-scrollbar">
                {patientsList?.map((patient: any, index:number) => {
                    return (<div key={index} className="flex flex-row items-center justify-between w-full">
                        <Profile imgUrl={patient.profile_picture} name={patient.name} description={`${patient.gender}, ${patient.age}`} />                    
                        <Ellipsis className="text-[#072635] me-[20px]"/>
                    </div>)
                })}
            </div>
        
        </div>
    )
}

export default UserNavigation;
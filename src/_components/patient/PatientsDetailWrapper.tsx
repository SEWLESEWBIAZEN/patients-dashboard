

import UserInfoAndLabResult from "./PatientInfoAndLabResult";
import UserNavigation from "./PatientNavigation"
import ChartWrapper from "../chart/ChartWrapper";
import { Patient } from "@/_lib/data/defnitions";
const PatientsDetailWrapper = ({ patientData }: { patientData: Patient[] }) => {
    const patientsList: { name: string|undefined, gender: string|undefined, age: number|undefined, profile_picture: string|undefined }[]  = patientData.map((data: Patient) => ({ name: data?.name, gender: data?.gender, age: data?.age, profile_picture: data?.profile_picture })) ?? undefined;
    const patientDetail = patientData?.find((patient: Patient) => patient?.name === "Jessica Taylor");
    return (
        <div className="flex flex-row justify-between gap-[32px]">
            <div className="flex flex-row gap-[32px] mt-[14px] w-3/4 items-start ">
                <UserNavigation patientsList={patientsList} />
                <ChartWrapper patientDetail={patientDetail} />
            </div>
            <div className="w-1/4 mt-[18px] h-[958px] ">
                <UserInfoAndLabResult data={patientDetail} />
            </div>
        </div>
    )
}

export default PatientsDetailWrapper;

import ChartWrapper from "../chart/ChartWrapper";
import UserInfoAndLabResult from "./PatientInfoAndLabResult";

import UserNavigation from "./PatientNavigation"
const PatientsDetailWrapper = ({ patientData }: { patientData: any[] }) => {
    let patientsList: { name: string, gender: string, age: number, profile_picture: string }[] = patientData.map((data: any) => ({ name: data.name, gender: data.gender, age: data.age, profile_picture: data.profile_picture }));
    let patientDetail = patientData?.find((patient: any) => patient.name === "Jessica Taylor");
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
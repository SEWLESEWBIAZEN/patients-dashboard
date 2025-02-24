import { ChevronDown } from "lucide-react";
import TopCard from "../common/TopCard";
import { Chart } from "./Chart";
import SystolicDiastolicDetails from "../SystolicDiastolicDetails";
import OtherDiagnosisResult from "../diagnosis/OtherDiagnosisResult";
import DiagnosticListWrapper from "../diagnosis/DiagnosticListWrapper";
import { Patient } from "@/_lib/data/defnitions";


const ChartWrapper = ({ patientDetail }: { patientDetail?: Patient }) => {
    return (
        <div className="w-2/3 flex flex-col gap-[32px] justify-start">
            <div className="w-full rounded-[16px] px-[20px] bg-[#FFFFFF]  mb-[10px] h-fit pb-[20px]">
                <TopCard title="Diagnosis History" />
                <div className="mt-[40px] p-[16px]  bg-[#F4F0FE] rounded-[12px] w-full flex flex-row gap-[18px]">
                    <div className="flex flex-col items-center w-2/3">
                        <div className="flex flex-row justify-between items-center w-full pe-[8px]">
                            <div className="text-[#072635] text-[18px] font-semibold">Blood Presure</div>
                            <div className="flex flex-row items-center gap-2">
                                <p className="text-[14px] text-[#072635] ">Last 6 months</p>
                                <ChevronDown className="w-[21px] h-[16px]" />
                            </div>
                        </div>
                        <div className="w-full">
                            <Chart data={patientDetail?.diagnosis_history.slice(0, 6).toReversed() ?? []} />
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex flex-col gap-[15px] justify-start">
                            <SystolicDiastolicDetails className="bg-[#E66FD2]" title="Systolic"
                                data={patientDetail?.diagnosis_history[0].blood_pressure.systolic}

                            />
                            <div className="opacity-[5px] w-full border-[#CBC8D4] border-[1px]" />
                            <SystolicDiastolicDetails className="bg-[#8C6FE6]" title="Diastolic"
                                data={patientDetail?.diagnosis_history[0].blood_pressure.diastolic}
                            />
                        </div>

                    </div>
                </div>
                <div className="flex flex-row gap-[21px] mt-[20px]">
                    <OtherDiagnosisResult className=" bg-[#E0F3FA]" data={patientDetail?.diagnosis_history[0]?.respiratory_rate} imgUrl="/respiratory rate@2x.png" title="Respiratory Rate" />
                    <OtherDiagnosisResult className="bg-[#FFE6E9]" data={patientDetail?.diagnosis_history[0]?.temperature} imgUrl="/temperature@2x.png" title="Temprature" />
                    <OtherDiagnosisResult className="bg-[#FFE6F1]" data={patientDetail?.diagnosis_history[0]?.heart_rate} imgUrl="/HeartBPM@2x.png" title="Heart Rate" />
                </div>
            </div>
            <DiagnosticListWrapper data={patientDetail?.diagnostic_list ?? []} />
        </div>
    )
}

export default ChartWrapper;
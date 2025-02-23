import { ArrowDown, ChevronDown } from "lucide-react";
import TopCard from "./TopCard";
import { Chart } from "./Chart";

const ChartWrapper = () => {
    return (
        <div className="w-2/3 rounded-[16px] bg-[#FFFFFF] px-[20] mb-[10px]">
           <TopCard title="Diagnosis History"/>
            <div className="mt-[20px] p-[16px] bg-[#F4F0FE] rounded-[12px] w-full flex flex-row ">
                <div className="flex flex-col items-center w-2/3">
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="text-[#072635] text-[18px] font-semibold">Blood Presure</div>
                        <div className="flex flex-row items-center gap-2">
                            <p className="text-[14px] text-[#072635] ">Last 6 months</p>
                            <ChevronDown className="w-[21px] h-[16px]"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <Chart/>
                    </div>
                </div>
                <div className="w-1/3">

                </div>
            </div>
        </div>
    )
}

export default ChartWrapper;
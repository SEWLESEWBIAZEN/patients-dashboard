import React from 'react'
import TopCard from './common/TopCard'
import { Download } from 'lucide-react'

const LabResults = ({ data }: { data: string[] | undefined }) => {
    return (
        <div className='bg-white rounded-[16px] ps-[20px] w-full'>
            <TopCard title='Lab Results' />
            <div className='h-[123px] overflow-x-auto custom-scrollbar'>
                {data?.map((result, index) => (
                    <div key={index}
                        className={`flex items-center 
                        justify-between gap-4 w-full h-[40px] px-[15px]
                        text-[13px] text-[#072635] font-normal
                        ${result === "CT Scans" ? "bg-[#F6F7F8]" : ""}`}>
                        <div> {result}</div>
                        <Download />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LabResults
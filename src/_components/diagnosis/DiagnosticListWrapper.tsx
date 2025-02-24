import React from 'react'
import TopCard from '../common/TopCard'

type Diagnosis = {
    name: string; description: string; status: string
}
const DiagnosticListWrapper = ({ data }: { data: Diagnosis[] }) => {
    return (
        <div className="w-full rounded-[16px] px-[20px] bg-[#FFFFFF]  mb-[10px] h-fit pb-[20px]">
            <TopCard title='Diagnostic List' />
            <div className='w-full grid h-[150px] overflow-y-auto custom-scrollbar'>
                <div className='w-full bg-[#F6F7F8] rounded-[24px] grid grid-cols-7 h-[48px] items-center px-[16px] text-[14px] text-[#072635] font-medium' >
                    <div className='col-span-2'>Problem/Diagnosis</div>
                    <div className='col-span-3'>Description</div>
                    <div className='col-span-2'>Status</div>
                </div>
                {
                    data?.map((da: Diagnosis, index: number) => {
                        return (
                            <div key={index} className='flex flex-col '>
                                <div className='w-full bg-[#FFFFFF] grid grid-cols-7 h-[48px] items-center px-[18px] text-[14px] text-[#072635]' >
                                    <div className='col-span-2'>{da.name}</div>
                                    <div className='col-span-3'>{da.description}</div>
                                    <div className='col-span-2'>{da.status}</div>
                                </div>
                                <div className="opacity-[1px] w-full text-[#CBC8D4] h-[1px]" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DiagnosticListWrapper
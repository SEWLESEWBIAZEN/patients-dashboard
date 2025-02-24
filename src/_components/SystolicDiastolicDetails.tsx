import { cn } from '@/lib/utils'
import { Play } from 'lucide-react'
import React from 'react'

const SystolicDiastolicDetails = ({ className, title, data }: { className: string, title: string, data: { value: number, levels: string } }) => {

    return (
        <div className="flex flex-col items-start gap-[12px]">
            <div className='flex flex-row items-center gap-[4px] justify-start'>
                <div className={cn(
                    "w-[14px] h-[14px] rounded-full",
                    className
                )} />
                <p className='text-[14px] text-[#072635] font-semibold'> {title}</p>
            </div>
            <div className='text-[22px] font-semibold'>{data?.value}</div>
            <div className='flex flex-row gap-[8px] items-center'>
                <Play
                    className={`w-[20px] h-[15px] ${data && data?.levels.includes("Lower")
                        ? "rotate-90"
                        : data && data?.levels.includes("Higher")
                            ? "-rotate-90"
                            : "hidden"
                        }`}
                    color="black"
                    fill="black"
                />

                <p className='text-[14px]'>{data?.levels}</p>
            </div>
        </div>
    )
}

export default SystolicDiastolicDetails
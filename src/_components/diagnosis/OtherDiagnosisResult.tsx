import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

const OtherDiagnosisResult = ({ className, data, imgUrl, title }: { className: string, data: { value: number, levels: string }, imgUrl: string, title: string }) => {
    return (
        <div className={cn("rounded-[12px] h-[242px] w-full ps-[20px] pt-[16px] flex-flex-col", className)}>
            <Image src={imgUrl} alt="Icon" width={96} height={96} className='mb-[16px]' />
            <p className='text-[16px] font-normal'>{title}</p>
            <p className='text-[30px] font-bold'>{data.value}</p>
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

export default OtherDiagnosisResult
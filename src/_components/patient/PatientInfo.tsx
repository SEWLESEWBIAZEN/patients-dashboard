import Image from 'next/image'
import React from 'react'
import TopCard from '../common/TopCard'
import { Calendar, Phone, ShieldCheck, Venus } from 'lucide-react'

const UserInfo = ({ data }: { data: any }) => {
    const displayedData = [
        { icon: <Calendar />, title: 'Date Of Birth', value: new Date(data.date_of_birth).toDateString() },
        { icon: <Venus />, title: 'Gender', value: data.gender },
        { icon: <Phone />, title: 'Contact Info.', value: data.phone_number },
        { icon: <Phone />, title: 'Emergency Contacts', value: data.emergency_contact },
        { icon: <ShieldCheck />, title: 'Insurance Provider', value: data.insurance_type },
    ]
    return (
        <div className='bg-white rounded-[16px] ps-[20px]'>
            <div className=' flex flex-col justify-center py-[32px] gap-[24px]'>
                <Image src={data.profile_picture} alt="Paitient Picture" width={200} height={200} className='rounded-full mx-auto' />
                <div className='mx-auto mb-[22px]'>
                    <TopCard title={data.name} />
                </div>
                <div className=' flex flex-col gap-[24px]'>
                    {displayedData.map((item, index) => (
                        <div key={index} className='flex items-center gap-[12px]'>
                            <div className="h-[42px] w-[42px] rounded-full bg-gray-100 flex items-center justify-center">
                                <span className="flex items-center justify-center">
                                    {item.icon}
                                </span>
                            </div>
                            <div className='flex flex-col gap-[2px] text-[14px] text-[#072635]'>
                                <p>{item.title}</p>
                                <p> {item.value}</p>
                            </div>

                        </div>
                    ))}
                    <button className='bg-[#01F0D0] h-[41px] w-[220px] rounded-[41px] mx-auto text-[14px] font-semibold'>Show All Information</button>
                </div>
            </div>
        </div>
    )
}

export default UserInfo
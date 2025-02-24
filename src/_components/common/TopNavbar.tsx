'use client'
import { Calendar, CreditCard, Ellipsis, House, LucideIcon, MessageSquare, Settings, UsersRound } from "lucide-react";
import Image from "next/image";

import Profile from "../patient/Profile";

// navigation bar at the top of the navigation
const TopNavbar = () => {
    const navLinks = [
        { icon: House, name: "Overview", active: false },
        { icon: UsersRound, name: "Patients", active: true },
        { icon: Calendar, name: "Schedule", active: false },
        { icon: MessageSquare, name: "Message", active: false },
        { icon: CreditCard, name: "Transactions", active: false },
    ]

    return (
        <div className="bg-white rounded-[70px] my-[18px] flex flex-row justify-between py-[10px] px-[32px]">
            <div className="flex justify-center items-center">
                <Image src="/TestLogo@2x.png" className="bg-transparent" alt="logo" width={160} height={60} />
            </div>
            <div className="flex flex-row justify-between  items-center text-black">
                {navLinks.map((link: { icon: LucideIcon, name: string, active: boolean }) => {
                    return (
                        <div key={link.name} className={`flex flex-row gap-[8px] items-center font-semibold rounded-[41px] py-[10px] px-[15px] ${link.active ? "bg-[#01F0D0] " : ''} hover:cursor-pointer hover:bg-[#01F0D0]`}>
                            <span className="text-[17px]"><link.icon /></span>
                            <span className="text-[14px]">{link.name}</span>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-row items-center justify-between">
                <Profile imgUrl="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
                    name="Dr. Jose Simmons" description="General Practitioner" />
                <div className="h-full border-[0.15px] border-[#707070] mx-4 opacity-5" />
                <Settings className="text-[#072635]" />
                <Ellipsis className="rotate-90 text-[#072635]" />
            </div>
        </div>
    )
}

export default TopNavbar;
import { Calendar, CreditCard, House, MessageSquare, UserRound, Users, UsersRound } from "lucide-react";
import Image from "next/image";

// navigation bar at the top of the navigation
const TopNavbar = () => {
    const navLinks = [
        {icon:<House />, name:"Overview",active:false},
        {icon:<UsersRound />, name:"Patients",active:true},
        {icon:<Calendar />, name:"Schedule",active:false},
        {icon:<MessageSquare />, name:"Message",active:false},
        {icon:<CreditCard />, name:"Transactions",active:false},
    ]
    return (
        <div className="bg-white rounded-[70px] m-[18px]  flex flex-row justify-between py-[10px] px-[32px]">
        <div className="">
            <Image src="/TestLogo@2x.png" className="bg-transparent" alt="logo" width={160} height={60} />
        </div>
            <div className="flex flex-row justify-between  items-center text-black">
                {navLinks.map((link: any) => {
                return (
                    <div key={link.name} className={`flex flex-row gap-[8px] items-center font-semibold rounded-[41px] py-[10px] px-[15px] ${link.active?"bg-[#01F0D0] ":''}`}>
                        <span className="text-[17px]">{link.icon}</span>
                        <span className="text-[14px]">{link.name}</span>
                    </div>
                    
                )
            })}
                
        </div>
            <div>
                
        </div>
    </div>
    )
}

export default TopNavbar;
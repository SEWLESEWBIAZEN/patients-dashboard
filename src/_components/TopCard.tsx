const TopCard = ({ title ,icon}:{title: string,icon?:any}) => {
    return (
         <div className="my-[20px] h-[33px]  flex flex-row justify-between items-center text-[#072635]">
                <div className="text-[24px] font-semibold">{title}</div>
                {icon}
            </div>
        )
}
export default TopCard
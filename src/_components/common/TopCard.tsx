const TopCard = ({ title, icon }: { title: string, icon?: any }) => {
    return (
        <div className={`my-[20px] h-[33px] flex flex-row justify-between items-center text-[#072635] ${icon ? "px-[20px]" : ""}`}>
            <div className="text-[24px] font-bold">{title}</div>
            {icon}
        </div>
    )
}
export default TopCard
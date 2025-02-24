

const TopCard = ({ title }: { title: string }) => {
    return (
        <div className={`my-[20px] h-[33px] flex flex-row justify-between items-center text-[#072635] `}>
            <div className="text-[24px] font-bold">{title}</div>
        </div>
    )
}
export default TopCard
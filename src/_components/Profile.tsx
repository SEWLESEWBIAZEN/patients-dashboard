
import Image from "next/image";
const Profile = ({ imgUrl, name, description }: { imgUrl: string, name: string, description: string }) => {
    return (<div className="flex flex-row items-center justify-between">
        <Image src={imgUrl} className="bg-transparent" alt="profile picture" width={44} height={44} />
                <div className="flex flex-col items-start text-[14px] justify-center py-1 px-2">
                    <div className="text-[#072635] font-semibold">{name}</div>
            <div className="text-[#707070]">{description}</div>
                </div>
    </div>)
}

export default Profile
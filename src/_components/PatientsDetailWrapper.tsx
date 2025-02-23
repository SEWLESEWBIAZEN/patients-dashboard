
import ChartWrapper from "./ChartWrapper";
import UserNavigation from "./UserNavigation"        
const PatientsDetailWrapper = ({ patientsList }: { patientsList: any[] }) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-[32px] mt-[14px] w-3/4">                
                <UserNavigation patientsList={patientsList} />
                <ChartWrapper/>
            </div>

        
        </div>
    )
}

export default PatientsDetailWrapper;
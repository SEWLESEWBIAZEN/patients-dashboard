import React from 'react'
import UserInfo from './PatientInfo'
import LabResults from '../LabResults'
import { Patient } from '@/_lib/data/defnitions'


const UserInfoAndLabResult = ({ data }: { data: Patient }) => {
    const patientInfo = {
        name: data?.name??"",
        gender: data?.gender??"",
        age: data?.age??0,
        profile_picture: data?.profile_picture??"",
        date_of_birth: data?.date_of_birth??"",
        phone_number: data?.phone_number??"",
        emergency_contact: data?.emergency_contact??"",
        insurance_type: data?.insurance_type??"",
    }
    return (
        <div className="flex flex-col gap-[32px] w-full">
            <UserInfo data={patientInfo} />
            <LabResults data={data?.lab_results} />
        </div>
    )
}

export default UserInfoAndLabResult
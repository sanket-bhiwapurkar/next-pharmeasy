import React from 'react'

const DoctorDetails = ({ params }: { params: { doctorName: string } }) => {
    return (
        <div>DoctorDetails {params.doctorName}</div>
    )
}

export default DoctorDetails
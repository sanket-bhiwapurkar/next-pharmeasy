import React from 'react'

const PackageDetails = ({ params }: { params: { packageId: string } }) => {
    return (
        <div>PackageDetails {params.packageId}</div>
    )
}

export default PackageDetails
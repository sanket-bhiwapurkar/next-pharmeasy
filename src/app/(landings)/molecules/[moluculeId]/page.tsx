import React from 'react'

const MoluculeDetails = ({ params }: { params: { moleculeId: string } }) => {
    return (
        <div>MoluculeDetails {params.moleculeId}</div>
    )
}

export default MoluculeDetails
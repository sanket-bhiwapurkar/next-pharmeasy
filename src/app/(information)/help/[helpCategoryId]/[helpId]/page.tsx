import React from 'react'

const FAQDetails = ({ params }: { params: { helpId: string } }) => {
    return (
        <div>FAQDetails {params.helpId}</div>
    )
}

export default FAQDetails
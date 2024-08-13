import React from 'react'

const OfferDetails = ({ params }: { params: { offerId: string } }) => {
    return (
        <div>OfferDetails {params.offerId}</div>
    )
}

export default OfferDetails
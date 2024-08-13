import React from 'react'

const HelpList = ({ params }: { params: { helpCategoryId: string } }) => {
    return (
        <div>HelpList {params.helpCategoryId}</div>
    )
}

export default HelpList
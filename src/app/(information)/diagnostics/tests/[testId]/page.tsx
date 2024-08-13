import React from 'react'

const TestDetails = ({ params }: { params: { testId: string } }) => {
    return (
        <div>TestDetails {params.testId} </div>
    )
}

export default TestDetails
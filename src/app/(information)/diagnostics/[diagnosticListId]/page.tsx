import React from 'react'

const DiagnosticListId = ({ params }: { params: { diagnosticListId: string } }) => {
    return (
        <div>DiagnosticListId {params.diagnosticListId}</div>
    )
}

export default DiagnosticListId
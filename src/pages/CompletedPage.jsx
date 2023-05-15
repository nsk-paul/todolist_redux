import React from 'react'
import Todos from '../components/Todos'

function CompletedPage() {

    return (
        <div className='wrapper'>
            <h1 className='text-center'>Complete page</h1>
            <Todos completed={true}/>
        </div>
    )
}

export default CompletedPage
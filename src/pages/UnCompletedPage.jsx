import React from 'react'
import Todos from '../components/Todos'

function UnCompletedPage() {
  return (
    <div className='wrapper'>
        <h1 className='text-center'>Uncomplete page</h1>
        <Todos completed={false}/>
    </div>
  )
}

export default UnCompletedPage
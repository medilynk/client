import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <div className='bg-red-100 p-2 rounded border border-red-600 text-red-800'>{message}</div>
  )
}

export default ErrorComponent
import React from 'react'

const NotFound = ({title = 'Record Not Found..!!'}) => {
    return (
        <div className='text-center py-5'>
            <h4>{title}</h4>
        </div>
    )
}

export default NotFound

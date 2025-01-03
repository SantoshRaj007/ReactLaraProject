import React from 'react'

const Loader = () => {
    return (
        <div className='text-center py-5'>
            <div className='spinner-border text-success' role='status'>
                <span className='visually-hidden'>Loading Category...</span>
            </div>
        </div>
    )
}

export default Loader

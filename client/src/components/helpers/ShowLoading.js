import React, { Fragment } from 'react'

const ShowLoading = () => {
    return (
        <Fragment>
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        </Fragment>
    )
}

export default ShowLoading;

import React from 'react'
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <>
            <div className='bg-[#ECEFE4]'>
                <div className='px-8 py-5 md:px-60 md:py-40'>
                    <div>
                        <h1 className='text-5xl font-extrabold text-center'>Our Team Members</h1>
                    </div>
                    <div className='mt-8'>
                        <p className='text-center font-medium text-lg'>
                            <Link className='text-black text-lg' to="/">Home</Link>  /
                            <span className='text-lg text-[#FB5E51]'>Our Team</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing
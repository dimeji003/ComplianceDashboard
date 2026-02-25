import React from 'react'
import Intro from './introductorymetrics'
import ComplianceOverview from './ComplianceOverview'
import ComplianceBySector from './ComplianceBySector'

export default function Main(){
    return (
        <div >
            <div  className='text-black text-xl border-b p-2 py-3 mx-0 shadow border-red-400'>

            <h1 className='ml-6'>Digital and Technology Compliance Dashboard</h1>
            <p className='text-[16px] font-light text-gray-500 pt-1 ml-6'>Real Time Monitoring</p>
            </div>
            <div >
            <Intro />
            <ComplianceOverview />
            <ComplianceBySector />

            </div>

        
        </div>

    )

}
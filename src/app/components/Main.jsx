import React from 'react'
import Intro from './introductorymetrics'
import ComplianceOverview from './ComplianceOverview'
import ComplianceBySector from './ComplianceBySector'
import CasesByStatusTable from './CasesByStatusTable'
import RevenueVsExpectedRevenue from "./RevenueVsExpectedRevenue";
import CasesByStatus from "./CasesByStatus";
import DigitalPlatformUsage from "./DigitalPlatformUsage"
import FilingTrendsChart from './FillingTrends';
import TopNonCompliantTable from './TopNonCompliantTable';
import BankRemittanceTracking from './BankRemittanceTracking';
import ComplianceRateTrend from './ComplianceRateTrend';
import SubmissionTrend from './SubmissionTrends'
import DigitalPlatformTable from './DigitalplatformTable'
import SystemIntegrationStatus from './SystemIntegrationStatus'

export default function Main(){
    return (
        <div >
            <div  className='text-black text-xl border-b p-2 py-3 mx-0 shadow border-red-400'>

            <h1 className='ml-6'>Digital and Technology Compliance Dashboard</h1>
            <p className='text-[16px] font-light text-gray-500 pt-1 ml-6'>Tax Regulatory Service - Real Time Monitoring</p>
            </div>
            <div >
            <Intro />
            <div className='flex flex-row gap-7 mt-11  m-auto ml-20'>
                <ComplianceOverview />
                <ComplianceBySector />
                

            </div>
            <div className="w-[85%] m-auto my-10 flex flex-col lg:flex-row gap-6 items-start">
                <div className="lg:w-1/2 w-full">
                    <TopNonCompliantTable />
                </div>
                <div className="lg:w-1/2 w-full">
                    <ComplianceRateTrend />
                </div>
            </div>  
            <div>
                <CasesByStatusTable />
            </div>

            
            <div className=' ml-20 flex flex-row gap-7 mt-11  m-auto'>
                <CasesByStatus />
                <RevenueVsExpectedRevenue />
            </div>
            
            <div
            >
                <BankRemittanceTracking />
            </div>
            <div className=' ml-20 flex flex-row gap-7 mt-11  m-auto'>
                
                <FilingTrendsChart />
                <SubmissionTrend />
            </div>
            <div>
                <DigitalPlatformTable />
            </div>
            <div className=' ml-26 flex flex-row gap-7 mt-11 w-[93%]  m-auto'>
                
                <DigitalPlatformUsage />
                <SystemIntegrationStatus />
            </div>
            </div>
            
            



        
        </div>

    )

}
export default function Intro(){
    return (
        <div className="text-black mt-9 flex flex-col gap-5 w-[85%] m-auto">
    
            <div className="flex flex-row gap-6 ">
                <div className="border border-white flex flex-col w-[40%] gap-2 p-3 rounded-xl shadow-md">
                    <div className="text-sm">Overall Compliance Rate</div>
                    <div className="font-semiboldbold text-3xl">94%</div>
                    <div className="text-green-600 text-sm">+2% from last month</div>
                </div>
                <div className="border border-white flex flex-col gap-2 w-[40%] p-3 rounded-xl shadow-md">
                    <div className="text-sm">Active Cases</div>
                    <div className="font-semiboldbold text-3xl">135</div>
                    <div className="text-green-600 text-sm">-7 from last month</div>
                </div>
                <div className="border border-white flex flex-col gap-2 w-[40%] p-3 rounded-xl shadow-md">
                    <div className="text-sm">Non-Compliant Entities</div>
                    <div className="font-semiboldbold text-3xl">112</div>
                    <div className="text-red-600 text-sm">+8 from last month</div>
                </div>
                <div className="border border-white flex flex-col gap-2 w-[40%] p-3 rounded-xl shadow-md">
                    <div className="text-sm">Filings This Month</div>
                    <div className="font-semiboldbold text-3xl">1054</div>
                    <div className="text-green-600 text-sm">+8% from last month</div>
                </div>
                
            </div>

            
            <div className="flex flex-row gap-6">
                <div className="border border-white flex flex-col gap-2 w-[40%] p-3 rounded-xl shadow-md">
                    <div className="text-sm">Revenue Collected</div>
                    <div className="font-semiboldbold text-3xl">$3.5M</div>
                    <div className="text-green-600 text-sm">97.2% of target</div>
                </div>
                <div className="border border-white flex flex-col gap-2 w-[40%] p-3 rounded-xl shadow-md">
                    <div className="text-sm">Registered Digital Entities</div>
                    <div className="font-semiboldbold text-3xl">1,081</div>
                    <div className="text-green-600 text-sm">+34 from last month</div>
                </div>
                <div className="border border-white flex flex-col gap-2 w-[40%] p-3 rounded-xl shadow-md">
                    <div className="text-sm">Average Response Time</div>
                    <div className="font-semiboldbold text-3xl">4.2 hrs</div>
                    <div className="text-green-600 text-sm">-0.8 hrs improvement</div>
                </div>
                <div className="border border-white flex flex-col gap-2 w-[40%] p-3 rounded-xl shadow-md">
                    <div className="text-sm">Audit Completion Rate</div>
                    <div className="font-semiboldbold text-3xl">87%</div>
                    <div className="text-green-600 text-sm">+5% from last quarter</div>
                </div>
                
            </div>
            
        </div>
    )
}
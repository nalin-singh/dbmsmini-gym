//Good video to refer https://www.youtube.com/watch?v=Cvkg7wqXt2M&ab_channel=Tailwindcollections
import EntryForm from "../components/edit-customer-entry";

export default function Dashboard(){
    return (
        <>
        <EntryForm/>
           <div className="w-64 h-screen bg-black rounded-r-md">
               <div className="px-6 pt-8">
                   <div className="flex items-center justify-between">
                        <a className="flex flex-row items-center" href="./">
                            <h1 className="font-semibold text-xl text-white">
                                FitMate
                            </h1>
                        </a>
                        <button className="flex items-center justify-center p-0.5 rounded bg-gray-dark focus:outline-none focus:ring-1 focus:ring-gray-500">
                            <svg className="w-3 h-3 text-white stroke-current" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.25 6.75L4.75 12L10.25 17.25"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"   d="M19.25 12H5"></path>
                            </svg>  
                        </button>
                   </div>
               </div>
               <div className=" px-6 pt-4">
                   <hr className="border-gray-dark"/>
               </div>
               <div className="px-6 pt-4">
                   <ul className="flex flex-col space-y-2">
                       <li className="text-gray flex flex-row hover:text-white items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                            </svg>
                           <a href="" className="inline-block w-full pl-2 pr-4 py-2 rounded ">Dashboard</a>
                       </li>
                       <li className="text-gray flex flex-row hover:text-white items-center">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                           <a href="" className="inline-block w-full pl-2 pr-4 py-2 rounded ">Staff</a>
                       </li>
                       <li className="text-gray flex flex-row hover:text-white items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                           <a href="" className="inline-block w-full pl-2 pr-4 py-2 rounded ">Customer</a>
                       </li>
                       <li className="text-gray flex flex-row hover:text-white items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                           <a href="" className="inline-block w-full pl-2 pr-4 py-2 rounded ">Equipments</a>
                       </li>
                       <li className="text-gray flex flex-row hover:text-white items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                           <a href="" className="inline-block w-full pl-2 pr-4 py-2 rounded ">Finances</a>
                       </li>
                       <li className="text-gray flex flex-row hover:text-white items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                           <a href="" className="inline-block w-full pl-2 pr-4 py-2 rounded ">Settings</a>
                       </li>
                   </ul>
               </div>
           </div>
        </>
    )
}
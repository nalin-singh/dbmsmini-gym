import { useRouter } from "next/router";
import React, { useEffect, useState} from "react";

const navigation = [
    { name: 'Admin Dashboard', href: './dashboardLogin'},
    { name: 'Staff', href: '#'},
    { name: 'MarketPlace', href: '#'},
    { name: 'Pricing', href: './pricing'},
  ]

export default function Navbar(){
    const router = useRouter();
    console.log(router.asPath);
    return(
        <nav className='pt-8 w-full'>
        <div className='flex justify between  flex-grow place-content-between items-center'>
          <a className="flex flex-row items-center" href="./">
            <h1 className="font-semibold text-xl dark:text-gray-100">
              FitMate
            </h1>
          </a>
          <div className='space-x-8 font-medium'>
            {navigation.map((navItem)=>(
              <a key={navItem.name} href={navItem.href}
                className={`text-base  ${
                  router.asPath === './'.concat('',navItem.name)? "text-gray-dark font-bold dark:text-gray" : "text-gray-dark dark:text-gray-300 font-normal "
                }`}
              >
                {navItem.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    )
}
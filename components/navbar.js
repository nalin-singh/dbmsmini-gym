const navigation = [
    { name: 'Dashboard', href: '#'},
    { name: 'Staff', href: '#'},
    { name: 'MarketPlace', href: '#'},
    { name: 'Pricing', href: '#'},
  ]
  
export default function Navbar(){
    return(
        <nav className=' pt-6 px-4 flex flex-items justify-between'>
        <div className='flex items-center'>
          <a href="./">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/>
          </a>
          <div className=''>
            {navigation.map((navItem)=>(
              <a key={navItem.name} href={navItem.href} className='font-medium text-indigo-600 hover:text-indigo-500'>
                {navItem.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    )
}
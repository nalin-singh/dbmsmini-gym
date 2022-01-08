import Navbar from "../components/navbar";

const username='gym-admin';
const password='connectToGym';

export default function AdminLogin(){
    return (
        <>
            <div class="w-full flex flex-wrap">
            {/* <!-- Register Section --> */}
            <div class="w-full md:w-1/2 flex flex-col">
                <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                    <a href="/" class="bg-black font-bold text-xl p-4" alt="Logo">FitMate</a>
                </div>
                <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                    <p class="text-center text-3xl">Dashboard Login Credentials</p>
                    <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                        <div class="flex flex-col pt-4">
                            <label for="username" class="text-lg">Username</label>
                            <input type="username" id="username" placeholder="yourUsername" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div class="flex flex-col pt-4">
                            <label for="password" class="text-lg">Password</label>
                            <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <input type="submit" value="Sign in" class="bg-gray-dark text-white font-bold text-lg rounded-md hover:text-gray-dark hover:bg-white hover:border-2 p-2 mt-8" />
                    </form>
                </div>
            </div>
            {/* <!-- Image Section --> */}
            <div class="w-1/2 shadow-2xl">
                <img class="object-cover w-full h-screen hidden md:block" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Background" />
            </div>
            </div>
        </>
    )
}
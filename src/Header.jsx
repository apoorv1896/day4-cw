

function Header() {
    return(
     <>
        <header className="flex justify-between px-14 py-4 items-center">
           <div className="flex w-[50%]"> <h1 className="text-3xl font-bold flex"><i class="fa-solid fa-face-smile-beam"></i> Hootsuite</h1>
             <ul className="flex justify-between ml-6 text-xl font-semibold w-[100%] ">
                <li>Platform</li>
                <li>Plans</li>
                <li>Enterprise</li>
                <li>Resources</li>
                <li>Education</li>
             </ul>
             </div> 
             <div className="w-[20%]">
                <ul className="flex w-[100%] justify-between text-xl font-semibold items-center">
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Log In</a></li>
                    <li className="border-2 p-2 px-5 bg-green-600 text-white"><a href="#">Sign Up</a></li>
                </ul>
             </div>
        </header>
     </>
    );
}

export default Header;
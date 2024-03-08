import React, { useState } from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";



function Header() {

    const [darkMode, setLightMode] = useState(true);


    const handleClick = () => {
        setLightMode(prevMode => !prevMode);
    }



    return (
        <>
            <header className='flex items-center justify-between bg-slate-700  py-3 px-3 md:px-9'>
                <div>
                    <h1 className='text-2xl font-bold'>Where in the world?</h1>
                </div>
                <div>
                    {darkMode ? <MdOutlineLightMode onClick={handleClick} /> : <MdDarkMode onClick={handleClick} /> }
                </div>

            </header>
        </>
    )
}

export default Header
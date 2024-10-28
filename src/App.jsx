import bg from './assets/bg.jpg'
import logo from './assets/logo.jpg'
import { IoIosHome } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';
import Login from './pages/Login/Login';

function App() {
  const [openLangMenu, setOpenLangMenu] = useState(false)
  const [lang, setLang] = useState("vietnam")

  const handeLang = (lang) => {
    setLang(lang)
  }

  return (
    <div className='w-full h-screen bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bg})`}}>
      <nav className='flex justify-between items-center w-full fixed top-0 left-0 p-4 bg-white h-24 shadow'>
        {/* logo */}
        <div className='flex items-center gap-4 justify-center cursor-pointer'>
          <img src={logo} alt="" className='h-16' />
          <span className='text-3xl font-extrabold text-blue-900'>FRESHCONNECT</span>
        </div>
        <div className='flex justify-between items-center gap-4 p-3'>
          <div className='nav_item'>GIAO LƯU</div>
          <div className='nav_item'>THẮC MẮC</div>
          <div className='nav_item'>SÁCH/TÀI LIỆU</div>
          <div className='nav_item'>CLB</div>
          <div className='nav_item-lang relative' onClick={() => setOpenLangMenu(prev => (!prev))}>
            <span className='uppercase'>{lang}</span>
            <FaCaretDown />
            {openLangMenu &&
              <div className='absolute right-0 flex flex-col items-start w-full bg-white gap-1 
            rounded-lg overflow-hidden shadow-xl' style={{ top: "calc(100% + 4px)", border: "2px solid #1e3a8a" }}>
                <span className='p-2 hover:bg-[#60a5fa] w-full transition-all' onClick={(e) => {
                  e.preventDefault()
                  handeLang("vietnam")
                }}>VIETNAM</span>
                <span className='p-2 hover:bg-[#60a5fa] w-full transition-all' onClick={(e) => {
                  e.preventDefault()
                  handeLang('english')
                }}>ENGLISH</span>
              </div>

            }
          </div>
          <div className='h-full'>
            <IoIosHome className='text-3xl text-[#1e3a8a] cursor-pointer' />
          </div>
        </div>
      </nav>
      <div className='pt-24 h-full'>
        <Login />
      </div>
    </div>
  )
}

export default App

import React,{useState, useEffect} from 'react'
import logo from '../imgs/netflix-logo.png'
import avtar from '../imgs/avtar.png'

const Navbar = () => {

    const [show, setShow] = useState(false);

    const transitionToBlack = ()=>{
        if(window.scrollY > 100){
            setShow(true)
    //  console.log(show)

        }
        else{
            setShow(false);
        }
    }

    useEffect(() => {
      window.addEventListener('scroll',transitionToBlack);
      return()=>{
        window.removeEventListener('scroll',transitionToBlack)
      }
    }, [show])
    

  return (
    <nav className='relative z-10'>
        <div className={`fixed top-0 w-full ease-out duration-300  flex justify-between items-center ${show && 'bg-[#010101]'}`}>
        <img className='h-[70px] pl-4 z-[100] ' src={logo} alt="" />

        <img className='h-[40px]  pr-4' src={avtar} alt="" />
        </div>
    </nav>
  )
}

export default Navbar
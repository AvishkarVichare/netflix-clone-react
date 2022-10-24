import axios from '../utils/axios';
import requests from '../utils/Request';
import { useState, useEffect } from 'react';


const Banner = () => {

    const [movie, setmovie] = useState('');

    useEffect(() => {
        const fetchMovies = async()=>{
            const request = await axios.get(requests.netflixOriginals);
            // console.log()
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
        }
        fetchMovies()
    }, [])

    // console.log("this is ",movie)


    const truncate = (string, n)=>{
        return(<>
            {string?.length>n?string.substr(0,n-1)+'...':string}
        </>)
    }

  return (
    <>
    <div style={{
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        backgroundSize:'cover',
        backgroundPosition:'center center',
        backgroundRepeat:'no-repeat'
    }}  className="h-[540px] text-white pt-[70px]  relative z-[1] object-contain">

    {/* banner contents  */}
    <div className="flex flex-col  mt-20 p-6">
    {/* movie name  */}
    <h1 className="text-[3rem] font-bold">
        {
        movie.name || movie.original_name
        }
    </h1>
    {/* btns  */}
    <div className="flex gap">
        <button className="bg-[rgba(51,51,51,0.5)] font-[700] px-[2rem] mr-[1rem] py-[.5rem] rounded-[0.2vw] hover:text-[#000] hover:bg-[#e6e6e6] ease-in-out duration-200 ">
            Play
        </button>
        <button className="bg-[rgba(51,51,51,0.5)] font-[700] px-[2rem] mr-[1rem] py-[.5rem] rounded-[0.2vw] hover:text-[#000] hover:bg-[#e6e6e6] ease-in-out duration-200">
            My List
        </button>
    </div>
    {/* desc  */}
    <div className="w-[45rem] leading-[1.3] pt-2  text-1 max-w-[360px]">
        {
            truncate(movie.overview,150)
        }
    </div>

    </div>

    {/* fade in bottom  */}

    <div style={{
        background:'linear-gradient(180deg, transparent, rgba(37,37,37,0.61),#111)'
    }} className='absolute  z-[-1] h-[540px] w-full  top-0' />

    </div>
 
    </>
  )
}

export default Banner
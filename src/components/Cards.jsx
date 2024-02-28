'use client'

import { slides } from "@/app/slides"
import Context from "@/context/Context"
import { useContext } from "react"

const Cards = () => 
{
    const {current,setCurrent} = useContext(Context)

    const prev = ()=>
    {
        if (current === 0) setCurrent(slides.length-1)
        else setCurrent(current - 1)
    }
    const next = ()=>
    {
        if (current === slides.length-1) setCurrent(0)
        else setCurrent(current + 1)
    }

    return (
        <>
        <div className="overflow-hidden relative img" >
            <div className="flex transition ease-out duration-40 rounded-lg" style={{transform:`translateX(-${current*100}%)`}}>
                {slides.map(s=>
                <img className="p-16  rounded-3xl mt-6 bg-gradient-to-b from-transparent from-1% via-stone-950 via-50% to-transparent to-99%" key={s.type} src={s.card}/>
                )}
            </div>
            
            <div className="absolute top-0 h-full w-full justify-between items-center flex">
                <button className="hover:bg-fuchsia-950 hover:scale-150 scale-125 rounded-full p-2" onClick={prev}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button className="hover:bg-fuchsia-950 hover:scale-150 scale-125 rounded-full p-2"  onClick={next}>            
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            <div className="absolute bottom-8 py-4 flex justify-center gap-3 w-full">
                {slides.map((s,i)=>
                <div onClick={()=>{setCurrent(i)}} key={'circle'+i} className={`hover:cursor-pointer rounded-full w-2 h-2 ${i==current ? 'bg-fuchsia-700' : 'bg-stone-100'}`}></div>)}
            </div>
            <div className="absolute top-5 py-4 flex justify-center w-full text-xl font-semibold">
                <h4 className="p-2 mx-[20%] rounded-lg text-center bg-gradient-to-l from-transparent from-1% via-stone-950 via-50% to-transparent to-99%">{slides[current].type}</h4>
            </div>
        </div>
    </>
    )
}

export default Cards
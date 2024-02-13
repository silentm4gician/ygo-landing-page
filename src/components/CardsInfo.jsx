'use client'
import { slides } from "@/app/slides"
import Context from "@/context/Context"
import { useContext } from "react"

const CardsInfo = () => 
{
    const {current} = useContext(Context)

    return (
        <div className=" p-8 text-center bg-stone-900 max-w-fit rounded-lg">
            {slides[current].info}
        </div>
    )
}

export default CardsInfo
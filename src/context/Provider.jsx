'use client'
import { useState } from 'react'
import Context from './Context'

const Provider = ({children}) => 
{
    const [current,setCurrent] = useState(0)

    return (
        <Context.Provider 
        value={{
            current,setCurrent
        }}>
            {children}
        </Context.Provider>
    )
}

export default Provider
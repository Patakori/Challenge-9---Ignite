import { createContext, memo, ReactNode, useCallback, useState } from 'react'

interface ContextProvider {
    children: ReactNode
}

export const HookContext = createContext({})

export function ContextsProvider({children}: ContextProvider){

    const [selectedGenreId, setSelectedGenreId] = useState(1);

    const handleClickButton = useCallback ((id: number) => {
        setSelectedGenreId(id);
      }, [selectedGenreId])

    return(
        <HookContext.Provider value={{ 
            handleClickButton, 
            selectedGenreId,
            setSelectedGenreId,
            }}>
      
            {children}
         
        </HookContext.Provider>
            

    )
}




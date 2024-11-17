import { createContext, ReactNode, useState } from 'react'

type NavigationProviderProps = {
    children: ReactNode
}

type NavigationProviderState = {
    currentFile: string
    setCurrentFile: (filename: string) => void
}

const initialState: NavigationProviderState = {
    currentFile: "",
    setCurrentFile: () => {},
}

const NavigationProviderContext = createContext<NavigationProviderState>(initialState);

const NavigationProvider = ({
    children,
    ...props
}: NavigationProviderProps) => {

    const [currentFile, setCurrentFile] = useState("");

    const contextValue = {
        currentFile,
        setCurrentFile,
    }

    return (
        <NavigationProviderContext.Provider value={contextValue} {...props}>
            {children}
        </NavigationProviderContext.Provider>
    )
}

export { NavigationProvider, NavigationProviderContext };
import { createContext } from "react";


const AppContext = createContext()

const ContextWrapper = ({children}) => {
    
    const value = {}
    
    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
  )
};

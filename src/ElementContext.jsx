import React,{useContext,createContext,useState,useRef} from 'react'

export const ElementContextProvider = createContext();

function ElementContext({children}) 

{
    const [element,setElement] = useState(null)
    const [layoutStyle,setLayoutStyle] = useState("random")
    const [reset,setReset] = useState(()=>false)
    const cyObj  = useRef();


return (

    <ElementContextProvider.Provider value={{element,
                                            setElement,
                                            layoutStyle,
                                            setLayoutStyle,
                                            reset,
                                            setReset,
                                            cyObj}}>
           {children}
    </ElementContextProvider.Provider>
)

}

export default ElementContext

// This will be used to directly extract the info
export const useElementContext = () => useContext(ElementContextProvider);

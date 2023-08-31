import React, { useContext, useEffect, useState } from 'react'
import themeContext from './createcontext'





export default function ThemeProvider({children}) {
    const [tex, settex] = useState("black")
    const [bgg, setbgg] = useState("white")
    const [cool, setcool] = useState(false)
    const [toggle, settoggle] = useState( JSON.parse(localStorage.getItem("toggle")) ||"Light ");
    const [checked, setchecked] = useState(false)
    const handle_Change=()=>{
    if(checked===false){
        settex("white")
        setbgg("black")
        settoggle("Dark")
        setchecked(!checked)
        setcool(! cool)


    }
    else  if(checked===true){
        settex("black")
        setbgg("white")
        settoggle("Light")
        setchecked(!checked)
        setcool(! cool)

    


}
}
useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(toggle));
}, [toggle])

  return (
    <div>
    <themeContext.Provider value={{tex,settex,bgg,cool, setbgg,toggle,settoggle,handle_Change,checked,setchecked}}  >
    {children}
       
    </themeContext.Provider>
      
    </div>
  )
}
const useProductContext=()=>{
    return useContext(themeContext)
}
export {useProductContext};

import {createContext, useState} from 'react';

export const CatageoryContext=createContext(null);

const AppContext=({children})=>{
    const [catageory,setCatageory]=useState()
    const [modalBackGround,setModalBackGround]=useState(false)
    const [amountSearch,setAmountSearch]=useState();
    const [totalBalance,setTotalBalance]=useState(Number(0));
    return(
        <CatageoryContext.Provider value={{
            catageory,
            setCatageory,
            modalBackGround,
            setModalBackGround,
            amountSearch,
            setAmountSearch,
            totalBalance,
            setTotalBalance
        }}>
           {children}
        </CatageoryContext.Provider>
    )
}
export default AppContext;

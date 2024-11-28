import { createContext ,useContext, useState} from "react";
//creating the context
const userContext = createContext({});
//wrapping the context
export const UserContextWrapper=({
    children,
  }: {
    children: React.ReactNode;
  }) =>{
    const [userId,setUserId]=useState<any>();
    const [username,setUsername]=useState<any>();
    const [number,setNumber]=useState<any>();
    const [profile,setProfile]=useState<any>();
 
    return(
        <userContext.Provider value={{userId,setUserId , username,setUsername,number,setNumber,profile,setProfile }}>
            {children}
        </userContext.Provider>
    )
}
//exporting the context
export const useUserContext = () => useContext(userContext);

import type { FC, ReactNode } from "react";

interface User{
    name:string,
    age:string
}

interface UserShape{
    children : ReactNode;
}




const User :FC<UserShape> = ({children}) => {
  return (
    <>

    {children}



    </>
  )
}

export default User
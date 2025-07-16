

"use client"


import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Home = () => {

  const router = useRouter();

  const navigate=(page:string)=>{
    router.push( `/${page}`);

  }


  
return (
    <div>

      <button onClick={()=> navigate("login")}>Go to the login page</button>
      <br />

      <Link href='/colors'> GO to  Colors page</Link>



    </div>
  )
}

export default Home
import  { useRef, useState, type FormEvent } from 'react';

interface FormsData {
    name: string,
    email : string, password : string
}

const Forms = () => {

    const [submitted, setSubmitted]  = useState<FormsData>({
        name:"", 
        email :"",
        password : ""
    });


    const name = useRef<HTMLInputElement>(null);
    const email =  useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);


    const HandleSubmit =(e : FormEvent<HTMLFormElement>)=>{

        e.preventDefault();

        const  nameValue  = name.current!.value;
        const  EmailValue  = email.current!.value;
        const  passwordValue  = password.current!.value;

        setSubmitted({
            name: nameValue, 
            email :EmailValue,
            password : passwordValue

        })




    }




  return (
    <div>

        <form onSubmit={HandleSubmit}>
            <input type="text" placeholder='enter the name'  ref={name} />

            <input type="text" placeholder='email' ref={email}/>

            <input type="password" placeholder='password' ref={password} />


            <button type='submit'> Submit</button>



          <section>

      <h1>Information </h1>

       <h1>Name : {submitted.name}</h1>
       <h1>Email : {submitted.email}</h1>
       <h1>Password : {submitted.password}</h1>
    

         




          </section>







        </form>



    </div>
  )
}

export default Forms
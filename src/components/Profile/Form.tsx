import {useState, useEffect} from 'react'

const useForm = () => {
 
    const [values, setValues] = useState({
        fnamer : "",
        email:"",
        numberr: "",
        password:""
    })


  const [error, setError] = useState("");

  const regformHandler = (e:any) => {
    const  {name , value} = e.target
    setValues({...values, [name]: value   })
  }

  const submitHandler2 = (e:any) => {
    e.preventDefault();
  }

  return (


{regformHandler , values , submitHandler2 }
      
   
  )
}

export default useForm;

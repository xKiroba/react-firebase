import { useState } from "react";
const Register = () => {

    const [email, setEmail] = useState('kiroba1@test.com')
    const [password, setPassword] = useState('123123')

    const handleSubmit = e =>{
        e.preventDefault()
        console.log('procesando form:', email, password)
    }

  return (

      <>
      <h1>Register</h1>
      <form onSubmit ={handleSubmit}>
          <input
            type="input"
            placeholde="Ingrese Email"
            value= {email} 
            onChange={ (e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholde="Ingrese password"
            value= {password} 
            onChange={ (e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
      </>
  )
}

export default Register
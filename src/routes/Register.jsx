import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
const Register = () => {



    const navegate = useNavigate()
    const {registerUser} = useContext(UserContext)

    const {register, handleSubmit, formState: {errors}, getValues} = useForm()

      const onSubmit = data => console.log(data)


    // const handleSubmit = async(e) =>{
    //     e.preventDefault()
    //     console.log('procesando form:', email, password)
    //     try {
    //       await registerUser(email, password)
    //       console.log ('Usuario creado')
    //       navegate("/");
    //     } catch (error) {
    //       console.log(error.code);
    //     }
    // }

  return (

      <>
      <h1>Register</h1>
      <form onSubmit ={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholde="Ingrese Email"
            {...register("email", {required: {
              value: true,
            message: "Campo Obligatorio"},
            pattern:{
              value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Formato de email incorrecto"
            }
            })}
            />
            {
              errors.email && <p>{errors.email.message}</p>
            }
            <input
            type="password"
            placeholde="Ingrese password"
            {...register("password", {minLength: {value: 6, message: "Minimo 6 caracteres"
          },
        validate: {
          trim: (v) => {
            if (!v.trim()){
            return "No seas payaso, escribe algo";
          }
             return true;
          },
        },
      })}

            />
            {
              errors.password && <p>{errors.password.message}</p>
            }
            <input
            type="password"
            placeholde="Ingrese password"
            {...register("repassword", {
              validate: {
                equals: v => v === getValues("password") || "No coinciden las contraseñas"  ,
                
              }
            })}

            />
            {
              errors.repassword && <p>{errors.repassword.message}</p>
            }
            <button type="submit">Register</button>
          </form>
      </>
  )
}

export default Register
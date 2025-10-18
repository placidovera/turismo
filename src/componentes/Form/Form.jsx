import React, { useEffect, useState } from 'react'
import "./Form.css"

const Form = () => {
   const[nombre,setNombre] = useState("")
   const[apellido,setApellido] = useState("")
   const[consulta,setConsulta] = useState("")
 
   const driverForm = async(event)=>{
   event.preventDefault()
   }

  return (
    <><h2>Formulario</h2>
    <form onSubmit={driverForm}>
        <label>Nombre</label>
        <input type="text" placeholder='Ingresa aqui tu nombre' onChange={(e)=> setNombre(e.target.value)} />
        <label>Apellido</label>
        <input type="text" placeholder='Ingresa aqui tu apellido' onChange={(e)=>setApellido(e.target.value)}/>
        <label>Consulta</label>
        <textarea  type="text" placeholder='Dejanos tu consulta' onChange={(e)=> setConsulta(e.target.value)}></textarea>
    </form>
    </>
  )
}

export default Form
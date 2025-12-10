import React from 'react'
import {useParams} from "react-router-dom"
import {products} from "../utils/api"
export default function 
() {
  const {id} = useParams(); 
  const p=products.find((p)=>p.id===parseInt(id))
  if(!p) return <div>Product not found</div>
  return (
    <div>product
     <br></br>
     <br></br>
     <br></br>
     <br></br>
      <img src={p.image} alt={p.name} width={400} height={400}/>
      <br></br>
     <br></br>
     <br></br>
      <p>{p.name}</p>
      <p>{p.price}</p>
      <p>{p.description}</p>
        <p>🎆Order palced!.......</p>
    </div>
  )
}

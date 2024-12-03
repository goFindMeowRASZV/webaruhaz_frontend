import React, { useContext } from 'react'

import { ApiContext } from '../../contexts/ApiContext.js'
import Termek from './Termek.js'

function Termekek(props) {
    const {termekLista}=useContext(ApiContext)
  return (
    <div>
        {
        termekLista.map((elem,index)=>{
            return (<Termek adat = {elem} key={index} index={index}/>)
        })
    }
    </div>
  )
}

export default Termekek
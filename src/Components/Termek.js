import React, { useContext } from "react";
import { KosarContext } from "../contexts/KosarContext";

function Termek(props) {
  const { kosarba } = useContext(KosarContext);
  const url='http://localhost:8000/';
  return (
    <div className="card" >
        <img className="card-img-top" src={url+props.adat.kep} alt="Card image"/>
        <div className="card-body">
            <h4 className="card-title">{props.adat.nev}</h4>
            <p className="card-text">{props.adat.kategoria}</p>
            <a href="#" className="btn btn-dark" onClick={kosarba(props.adat)}>Kosárba</a>
            <h4 className="card-title">{props.adat.ar}€</h4>
        </div>
    </div>

  )
}

export default Termek
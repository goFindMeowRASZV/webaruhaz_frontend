import React, { useContext, useState } from "react"
import { ApiContext } from "../../contexts/ApiContext";

function Urlap(){
  const {postAdat, kattLista} = useContext(ApiContext);
    //saját űrlapState
    const [elem, setAdat]=useState({
                                        nev:'',
                                        ar:1000,
                                        kategoria:'',  //select option
                                        szin:'', //textarea
                                        kep:'', //file
                                    })
    
    function adatKuld(event){
        event.preventDefault()
        console.log("küldés", elem)
    }
    function valtozasKezeles(event){
        //itt frissítem a state értékét
        const sv={...elem}
        sv[event.target.id]=event.target.value
        setAdat({...sv})
    }

    return(
        <div className="urlap">
            <form onSubmit={adatKuld}>
            
            <div className="mb-3">
            <label htmlFor="nev" className="form-label">Termék neve</label>
            <input type="text" pattern="^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű ]{2,}$" value={elem.nev} onChange={valtozasKezeles} className="form-control" id="nev"/>
            </div>
            <div className="mb-3">
            <label htmlFor="ar" className="form-label">Termék ára</label>
            <input type="number" min="1000" max="100000" value={elem.ar} onChange={valtozasKezeles} className="form-control" id="ar" />
            </div>

            <div className="mb-3">
            <label htmlFor="kategoria" className="form-label">Termék kategóriája</label>
            <input type="text" pattern="^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű ]{2,}$" value={elem.kategoria} onChange={valtozasKezeles} className="form-control" id="kategoria"/>
            </div>

            <div className="mb-3">
            <label htmlFor="szin" className="form-label">Termék színe</label>
            <input type="textarea" value={elem.szin} onChange={valtozasKezeles} className="form-control" id="szin" />
            </div>
            <div className="mb-3">
            <label htmlFor="kep" className="form-label">Termék képe</label>
            <input type="file" value={elem.kep} onChange={valtozasKezeles} className="form-control" id="kep" />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Urlap
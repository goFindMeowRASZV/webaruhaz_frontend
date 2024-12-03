import React from "react"
import Termekek from "../Components/public/Termekek"
import Kosar from "../Components/public/Kosar"
import Tablazat from "../Components/admin/Tablazat"

function Admin(){
    return(
    <main className='row'>
          <h3>Admin</h3>
          <Tablazat/>
      </main>
    )
}
export default Admin

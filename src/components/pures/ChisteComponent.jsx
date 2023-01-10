import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import Api from "../../helpers/api"
const ApiChiste = new Api()

function ChisteComponent({chisteRandom,handleChangeChiste,statusLoad}) {


    return (
        <div>
            <div className="chiste">
                <h3>
                    {
                        (chisteRandom.value)?chisteRandom.value:"Empecemos a divertirnos! dale click!"
                    }
                </h3>
            
            </div>

            <div className="content-btn-new">
                <Button color="success" variant="contained" onClick={()=>{handleChangeChiste()}}>
                    {
                        (statusLoad.status)?"Generar nuevo chiste":"Cargar Chistes"
                    }
                </Button>
            </div>
        </div>
    )
}

export default ChisteComponent
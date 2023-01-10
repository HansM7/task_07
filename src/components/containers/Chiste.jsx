
import { useState } from 'react'
import ActionComponent from '../pures/ActionComponent'
import ChisteComponent from '../pures/ChisteComponent'
import CountChiste from '../pures/CountChiste'
import Api from "../../helpers/api"
const ApiChiste = new Api()


function Chiste() {

    const [countAction, setCountAction] = useState({
        like:0,
        dislike:0
    })

    const handleAmountLike=()=>{
        setCountAction({...countAction,like:countAction.like+1})
        handleChangeChiste()
    }

    const handleAmountDislike=()=>{
        setCountAction({...countAction,dislike:countAction.dislike+1})
        handleChangeChiste()
    }

    const [chisteRandom, setChisteRandom] = useState({})

    const [statusLoad, setStatusLoad] = useState({status:false})

    const handleChangeChiste=async()=>{
        (async()=>{
            await ApiChiste.getChistes()
            .then((res)=>{
                if(statusLoad.status===false){
                    setChisteRandom(res.data)
                    setStatusLoad({...statusLoad,status:true})
                }
                setChisteRandom(res.data)
            })

        })()
    }

    return (
        <div className='content-chiste'>
            <ChisteComponent
                chisteRandom={chisteRandom}
                statusLoad={statusLoad}
                handleChangeChiste={handleChangeChiste}
            />
            {
            (statusLoad.status)?(
                <ActionComponent 
                handleAmountLike={handleAmountLike} 
                handleAmountDislike={handleAmountDislike} />
                ):""
            }
            
            <CountChiste countAction={countAction} />

        </div>
    )
}

export default Chiste
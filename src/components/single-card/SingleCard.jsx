import React, { useState, createRef } from 'react';
import './SingleCard.css';
import ModalEditCard from '../modal-edit-card/ModalEditCard';

const SingleCard = (props)=>{
    const {listId,id,title,description,comments,cardChangeListWithMouse} = props;
    const [show, setShow] = useState(false);
    const [top,setTop] = useState(null);
    const [left,setLeft] = useState(null);
    const [move,setMove] = useState(false);
    const [startLeft,setStartLeft] = useState(null);
    const div = createRef();
    let st = {}
    let num = null;
    let desc = null;
    // let startLeft = null;

    const MouseDown = (e)=>{
        // console.log(e.target.className);
        if(e.target.className==="single-card"){
            setStartLeft(e.screenX);
            setTop(e.screenY-90);
            setLeft(e.screenX-110);
            setMove(true);
        }
    }

    const MouseMove = (e)=>{
        if(move){
            setTop(e.screenY-90);
            setLeft(e.screenX-110)
        }
    }
    if(top && left && move){
        st={
            top,
            left,
            position:"absolute"
        }
    }
    const MouseUp = (e)=>{
        setMove(false);
        console.log(startLeft,left)

        if(left-startLeft>100){
            if(left-startLeft>300){
                cardChangeListWithMouse(id,'right',2)
            }else{
                cardChangeListWithMouse(id,'right',1)
            }

        }else if(startLeft-left>300){
            if(startLeft-left>500){
                cardChangeListWithMouse(id,'left',2)
            }else{
                cardChangeListWithMouse(id,'left',1)
            }

        }
        st={position:"static"}
    }

    if(comments.length>0){
        num = <><i className="fa fa-comments" aria-hidden="true"></i>{comments.length}</>
    }
    if(description){
        desc = <><i className="fa fa-address-card"></i></>
    }
    return(
        <div className='single-card' ref={div} style={st}  
                onMouseDown={(e)=>MouseDown(e)}
                onMouseMove={(e)=>MouseMove(e)}  
                onMouseUp ={(e)=>MouseUp(e)}
                >
            <ModalEditCard show={show} setShow={setShow} {...props} />
            <span>{title}</span> <i style={{float:'right'}} onClick={()=>setShow(true)} className="fa fa-pencil-square-o" aria-hidden="true"></i><br/>
            {desc}
            {num}
            
        </div>
    )
}
export default SingleCard;
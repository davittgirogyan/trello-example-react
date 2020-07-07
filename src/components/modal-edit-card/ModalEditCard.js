import React, { useState } from 'react';
import { Button,Modal } from 'react-bootstrap';

const ModalEditCard = (props)=> {
    const {show,setShow,listId,id,title,description,comments,cardSaveEditedCardDescription,cardSaveEditedCardTitle,cardAddInCardNewComment} = props;
    const [titleH,setTitleH] = useState(title);
    const [descH,setDescH] = useState(description);
    const [titleEditMode,setTitleEditMode] = useState(false);
    const [descEditMode,setDescEditMode] = useState(false);  
    const [showWriteComm,setShowWriteComm] = useState(false);
    const [commText,setCommText] = useState('');
    const handleClose = () => setShow(false);
    let commnet = comments.length>0?comments.map((e)=>{
        return <p key={e.id}>{e.title}</p>
    }):<span>No Comments</span>
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div>
                {titleEditMode && <> 
                    <input value={titleH} onChange={(e)=>setTitleH(e.target.value)} />
                    <button className='btn btn-success' onClick={()=>(cardSaveEditedCardTitle(id,titleH),setTitleEditMode(false))} >Save</button>
                </>}
                {!titleEditMode && <h5 onClick={()=>setTitleEditMode(true)} >{title}</h5>}
                <hr/>
                <h5>Description <span onClick={()=>setDescEditMode(true)} style={{cursor:"pointer"}} >Edit</span></h5>
                {descEditMode &&<>
                    <textarea value={descH} onChange={(e)=>setDescH(e.target.value)} ></textarea>
                    {descH && <button className='btn btn-success' onClick={()=>(cardSaveEditedCardDescription(id,descH),setDescEditMode(false))} >Save</button>}
                    {!descH && <button className='btn btn-success disabled'>Save</button>}
                </> }
                {!descEditMode && <span>{description}</span>}
                
                <hr/>
                <h5>Activity</h5>
                <input placeholder='Write a comment' onFocus={()=>(setShowWriteComm(true))} onChange={(e)=>setCommText(e.target.value)} value={commText} /><br/>
                {showWriteComm && <>
                {commText && <button className='btn btn-success' onClick={()=>(cardAddInCardNewComment(id,commText),setCommText(''))} >Save</button>}
                {!commText && <button className='btn btn-success disabled' >Save</button>}
                <label>Watch</label><input type='checkbox' ></input>
                <i className="fa fa-times" aria-hidden="true" onClick={()=>(setShowWriteComm(false))}></i>
                </>
                }
                <br/>
                {commnet}

            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default ModalEditCard;
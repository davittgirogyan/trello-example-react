import React, { useState } from 'react';
import './AddPost.css';
import { connect } from 'react-redux';
import { listEditInputedValue, listAddNewList } from '../../store/reducers/ListReducer';
const AddPost = (props)=>{
    const {inputedText,listEditInputedValue,listAddNewList}= props;
    const [showInp,setShowInp] = useState(false);
    if(showInp){
        return(
            <div className='add-post'  >
                <div  >
                    <input className='form-control'  onChange={(e)=>listEditInputedValue(e.target.value)} value={inputedText} placeholder="Enter list title" />
                </div>
                <div  >
                    <button className='btn btn-success' onClick={listAddNewList} >Add List</button>
                    <button  type="button" className="close" aria-label="Close" onClick={()=>setShowInp(false)} >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
    }
    return(
        <div style={{height:"40px",margin:"10px "}} className='btn btn-primary' onClick={()=>setShowInp(true)} >+ Add a list</div>
    )
}

let mapStateToProps = (state)=>({
    inputedText:state.list.inputedText
})

export default connect(mapStateToProps,{listEditInputedValue,listAddNewList})(AddPost);
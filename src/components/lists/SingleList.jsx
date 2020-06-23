import React, { useState } from 'react';
import './SingleList.css';
import SingleCard from '../single-card/SingleCard';
import { connect } from 'react-redux';
import { cardAddNewCard, cardSaveEditedCardDescription, cardSaveEditedCardTitle,cardAddInCardNewComment,cardChangeListWithMouse } from '../../store/reducers/CardReducer';
const SingleList = (props)=>{
    const [showInps,setShowInps] = useState(false);
    const [inpVal,setInpVal] = useState('');
    const {id,title,cardAddNewCard,cardSaveEditedCardDescription,cardSaveEditedCardTitle,cardAddInCardNewComment,cardChangeListWithMouse} = props;
    let cards = props.cards.filter((e)=>(e.listId===id))
    return (
        <div className='single-list'  >
            <div className='tit' >
                <b>{title}</b>
                <span>...</span>
            </div>
            <div>
                {cards.map((e,i)=>{
                    return <SingleCard key={e.id} {...e} 
                                        cardSaveEditedCardDescription={cardSaveEditedCardDescription}
                                        cardSaveEditedCardTitle={cardSaveEditedCardTitle} 
                                        cardAddInCardNewComment={cardAddInCardNewComment}
                                        cardChangeListWithMouse={cardChangeListWithMouse}
                                        />
                })}
            </div>
            <div className='but' >
                {!showInps && <><span onClick={()=>setShowInps(true)} >+ Add to card</span><span>Q</span></>}
                {showInps && <div>
                    <div><textarea value={inpVal} onChange={(e)=>setInpVal(e.target.value)}  name="" id="" cols="30" rows="3"></textarea></div>
                    <div>
                        <button className='btn btn-success' onClick={()=>(cardAddNewCard(id,inpVal),setInpVal(''))} >Add List</button>
                        <button>...</button>
                        <button onClick={()=>setShowInps(false)}  type="button" className="close" aria-label="Close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>}
            </div>
        </div>
    )
}

let mapStateToProps = (state)=>({
    cards:state.card.cards
    
})
export default connect(mapStateToProps,{cardAddNewCard,
                                        cardSaveEditedCardDescription,
                                        cardSaveEditedCardTitle,
                                        cardAddInCardNewComment,
                                        cardChangeListWithMouse
                                    })(SingleList);
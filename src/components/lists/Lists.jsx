import React from 'react';
import { connect } from 'react-redux';
import SingleList from './SingleList';
import { listEditCardInputText, listAddNewCardInList } from '../../store/reducers/ListReducer';
const Lists = ({lists,listEditCardInputText,listAddNewCardInList})=>{
    return(
        <>
        {lists.map((e)=>(<SingleList key={e.id} {...e} 
                        listEditCardInputText={listEditCardInputText} 
                        listAddNewCardInList={listAddNewCardInList} />))}
        </>
    )

}

let mapStateToProps = (state)=>({
    lists:state.list.lists
})

export default connect(mapStateToProps,{listEditCardInputText,listAddNewCardInList})(Lists);
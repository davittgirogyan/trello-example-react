const CARD_ADD_NEW_CARD = "CARD_ADD_NEW_CARD";
const CARD_SAVE_EDITED_CARD_DESCRIPTION = "CARD_SAVE_EDITED_CARD_DESCRIPTION";
const CARD_SAVE_EDITED_CARD_TITLE = "CARD_SAVE_EDITED_CARD_TITLE";
const CARD_ADD_IN_CARD_NEW_COMMENT = "CARD_ADD_IN_CARD_NEW_COMMENT";
const CARD_CHANGE_LIST_WITH_MOUSE = "CARD_CHANGE_LIST_WITH_MOUSE";



let initialState = {
    cards:[]
}

const CardReducer = (state=initialState,action)=>{
    switch(action.type){
        case CARD_ADD_NEW_CARD:{
            const id = state.cards.length>0?state.cards[state.cards.length-1].id+1:1;
            const data ={id,listId:action.listId,title:action.title,comments:[],description:""}
            return{
                ...state,
                cards:[...state.cards,data]
            }
        }
        case CARD_SAVE_EDITED_CARD_DESCRIPTION:{
            let cards = [...state.cards];
            let idx = cards.findIndex((e)=>e.id===action.id);
            cards[idx].description = action.description;
            return{
                ...state,
                cards
            }
        }
        case CARD_SAVE_EDITED_CARD_TITLE:{
            let cards = [...state.cards];
            let idx = cards.findIndex((e)=>e.id===action.id);
            cards[idx].title = action.title;
            return{
                ...state,
                cards
            } 
        }
        case CARD_ADD_IN_CARD_NEW_COMMENT:{
            let cards = [...state.cards];
            let idx = cards.findIndex((e)=>e.id===action.id);
            let comments = [...cards[idx].comments];
            let id = comments.length>0?comments[comments.length-1].id+1:1;
            let data = [...comments,{id,title:action.title}]
            cards[idx].comments = data
            return{
                ...state,
                cards
            }
        }
        case CARD_CHANGE_LIST_WITH_MOUSE:{
            // console.log(state);
            let idx = state.cards.findIndex((e)=>e.id===action.id)
            let cards = [...state.cards];
            if(action.way==='left'){
                cards[idx].listId-=action.count
            }else if(action.way==='right'){
                cards[idx].listId+=action.count
            }

            return{
                ...state,
                cards
            }
        }
        default : {
            return state
        }
    }
}

export const cardAddNewCard = (listId,title)=>({type:CARD_ADD_NEW_CARD,listId,title});
export const cardSaveEditedCardDescription = (id,description)=>({type:CARD_SAVE_EDITED_CARD_DESCRIPTION,id,description})
export const cardSaveEditedCardTitle = (id,title)=>({type:CARD_SAVE_EDITED_CARD_TITLE,id,title})
export const cardAddInCardNewComment = (id,title)=>({type:CARD_ADD_IN_CARD_NEW_COMMENT,id,title})
export const cardChangeListWithMouse = (id,way,count)=>({type:CARD_CHANGE_LIST_WITH_MOUSE,id,way,count})

export default CardReducer;
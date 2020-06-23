const LIST_EDIT_INPUTED_VALUE = "LIST_EDIT_INPUTED_VALUE";
const LIST_ADD_NEW_LIST = "LIST_ADD_NEW_LIST";
const LIST_EDIT_CARD_INPUT_TEXT = "LIST_EDIT_CARD_INPUT_TEXT"; 
const LIST_ADD_NEW_CARD_IN_LIST = "LIST_ADD_NEW_CARD_IN_LIST";

let initialState = {
    lists:[],
    inputedText:"test"
}

const ListReducer = (state=initialState,action)=>{
    switch(action.type){
        case LIST_EDIT_INPUTED_VALUE:{
            return{
                ...state,
                inputedText:action.value
            }
        }
        case LIST_ADD_NEW_LIST:{
            let id = state.lists.length?state.lists[state.lists.length-1].id+1:1;
            let data = {id,title:state.inputedText,cardsArr:[],cardInputedText:''};
            return{
                ...state,
                lists:[...state.lists,data],inputedText:'test'

            }
        }
        case LIST_EDIT_CARD_INPUT_TEXT:{

            let idx = state.lists.findIndex((e)=>(e.id===action.id))
            let lists = [...state.lists];
            lists[idx].cardInputedText = action.text
            return{
                ...state,
                lists
            }
        }
        case LIST_ADD_NEW_CARD_IN_LIST:{
            let idx = state.lists.findIndex((e)=>(e.id===action.id))
            let lists = [...state.lists];
            let arr = [...lists[idx].cardsArr];
            let id = state.lists[idx].cardsArr.length?state.lists[idx].cardsArr[state.lists[idx].cardsArr.length-1].id+1:1;
            let cardInputedText = state.lists[idx].cardInputedText;
            let data = {id,title:cardInputedText,description:"",comments:[]}
            arr.push(data);
            lists[idx].cardsArr = arr;
            lists[idx].cardInputedText = ''

            return{
                ...state,
                lists
            }
        }
        default :{
            return state
        }

    }
}

export const listEditInputedValue = (value)=>({type:LIST_EDIT_INPUTED_VALUE,value});
export const listAddNewList = ()=>({type:LIST_ADD_NEW_LIST});
export const listEditCardInputText = (id,text)=>({type:LIST_EDIT_CARD_INPUT_TEXT,id,text});
export const listAddNewCardInList = (id)=>({type:LIST_ADD_NEW_CARD_IN_LIST,id});

export default ListReducer;
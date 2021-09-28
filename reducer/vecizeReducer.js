import { FETCH_CAT_VECİZE } from "../actions/vecizeAction";
import { PRESS_CATEGORY } from "../actions/vecizeAction";

const INITIAL_STATE = {
    categoryArray : [
        {id: 1, title: "insan", color:'#d72631'},
        {id: 2, title: "hayvan", color:'#a2d5c6'},
        {id: 3, title: "doğa", color:'#077b8a'},
        {id: 4, title: "tarih", color:'#5c3c92'},
        {id: 5, title: "sevgi", color:'#e2d810'},
        {id: 6, title: "düşünce", color:'#d9138a'},
        {id: 7, title: "rüya", color:'#12a4d9'},
        {id: 8, title: "cennet", color:'#322e2f'},
        {id: 9, title: "cehennem", color:'#cf1578'},
        {id: 10, title: "gıybet", color:'#e8d21d'},
        {id: 11, title: "zekat", color:'#039fbe'},
        {id: 12, title: "hac", color:'#b20238'}
    ],
    ayetArray : [
        {id:1, desc: "insan düşünen bir hayvandır", color:'#d72631'},
        {id: 2, desc: "hayvan", color:'#a2d5c6'},
        {id: 3, desc: "doğa", color:'#077b8a'},
        {id: 4, desc: "tarih", color:'#5c3c92'},
        {id: 5, desc: "sevgi", color:'#e2d810'},
        {id: 6, desc: "düşünce", color:'#d9138a'},
        {id: 7, desc: "rüya", color:'#12a4d9'},
        {id: 8, desc: "cennet", color:'#322e2f'},
        {id: 9, desc: "cehennem", color:'#cf1578'},
        {id: 10, desc: "gıybet", color:'#e8d21d'},
        {id: 11, desc: "zekat", color:'#039fbe'},
        {id: 12, desc: "hac", color:'#b20238'}
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_CAT_VECİZE:
            return{
                ...state,
            }
        case PRESS_CATEGORY:
            return{
                ...state,

            }
        default:
            return state;
        
    }
}
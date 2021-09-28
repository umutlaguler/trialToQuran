import { FETCH_PHOTO, PRESS_PHOTO } from "../actions/photoAction";

const INITIAL_STATE = {
    photoArray : [
        {
            id: 1,
            title: "İNSAN",
            url:'data:image/jpeg;base64,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'
        },
        {
            id: 2,
            title: "hayvan",
            url:'https://upload.wikimedia.org/wikipedia/commons/1/13/Sultan_Muhammet_Fatih_camii_%28cropped%29.jpg'
        },
        {
            id: 3,
            title: "DOĞA",
            url:'https://i.sozcu.com.tr/wp-content/uploads/2014/05/erdogan-cehennem-160.jpg'
        },
    ],
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_PHOTO:
            return{
                ...state,
            }
        case PRESS_PHOTO:
            return{
                ...state,
            }
        default:
            return state;
        
    }
}
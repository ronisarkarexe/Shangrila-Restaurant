import { combineReducers } from "redux";
import { blogData, ourDeliciousData, reviewsData } from "../Sheared/Sheared";


const blogReducer =(blogState=blogData,action)=>{
if(action.type=='ADD_BLOG'){
    return blogState
}

return blogState
}

const ourDeliciousReducer = (deliciousState=ourDeliciousData,action) => {
    if(action.type == 'ADD_DELICIOUS'){
        return deliciousState
    }
    
    return deliciousState
}

const ourReviewReducer = (reviewState=reviewsData,action)=>{
    if(action.type == 'ADD_REVIEW'){
        return reviewState
    }
    
    return reviewState
}


export const Reducer = combineReducers({
    blogData:blogReducer,
     ourDeliciousData:ourDeliciousReducer,
      reviewsDat:ourReviewReducer
})
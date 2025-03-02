import { combineReducers } from 'redux';
import faqReducer from "../features/faqSlice";

const rootReducer = combineReducers({
    faqs: faqReducer
})

export default rootReducer;
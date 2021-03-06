import {createStore,applyMiddleware,combineReducers} from 'redux'
import cartReducers from './cartReducers'
function shopReducers(state=0,action:any){
    switch(action.type){
        case 'ADD':
            state+=action.payload;
            return state;
        case 'REMOVE':
            state--;
            return state;
        default:
            return state
    }
}
let reducres=combineReducers({
    shopReducers,cartReducers
})
let store=createStore(reducres)
//@ts-ignore
window.store=store
export default store
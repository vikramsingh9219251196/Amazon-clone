
export const initialState = {
    basket: [],
    user:null,
  };
  
export const getBasketTotal=(basket)=>{
    return basket?.reduce((amount,item)=>Number(item.price)+amount,0);
   
}

function reducer(state,action){
     
    switch(action.type){
        case'ADD_TO_CART':
       
        return {
            ...state,
            basket: [...state.basket, action.item]
        };
        case "EMPTY_BASKET":
            return{
                ...state,
                basket:[]
            }
        case "Remove_from_basket":
           let newBasket=[...state.basket];
           const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
           if(index>=0){
          newBasket.splice(index,1);
           }
           else{
            console.warn(
                `can't remove product (id:${action.id}) as its not in basket!`
            )
           }
        return {...state, basket:newBasket};
        case'set_User':return{
            ...state,
            user:action.user
        }
        default:
            return state;
    }
   

}

export default reducer;
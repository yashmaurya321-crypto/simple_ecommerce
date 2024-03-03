export const ADD_TO_CART = 'add_to_cart';
const DELETE_FROM_CART = 'delete_from_cart';
export function User_detail(item){
    return{
        type: 'USER_DETAIL',
        data: item
    }
}
 export function addtocart(item){
    return{
        type : ADD_TO_CART,
        data : item
    }
}
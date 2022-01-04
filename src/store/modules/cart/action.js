export function addToCartRequest (id){
    return {
        type : "@cart/ADD_REQUEST",
        id
    }
}
export function addToCartSources (product){
   return {
        type : "@cart/ADD_SUCCESSS",
        product
    }
}
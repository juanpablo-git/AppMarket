import {all,takeLatest,select,call,put} from "redux-saga/effects"
import {addToCartSources} from './action'
import api from '../../../services/api'

function* addTecart({id}){
    const productExists = yield select((state)=>
    state.cart.find((product)=> product.id === id)
    )
    if(productExists){

    }else{
        const response = yield call(api.get)
        const data = {
            ...response.data,
            acount:1,
            price:response.data.price
        }
        yield put(addToCartSources(data))

    }

}

export default all([takeLatest("@cart/ADD_REQUEST",addTecart)])


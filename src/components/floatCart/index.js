import React,{useMemo} from "react";
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'

import FeachIcon from 'react-native-vector-icons/Feather'

import {
    Container,
CartPricing,
CartTotalPricing,
CartButton,
CartButtonText,
} from './style'

export default function floatCart(){
    const navigation = useNavigation()
    const products = useSelector(({cart})=>cart)
    
    const cartSize= useMemo(()=>{
      
        return products[0].products.length || 0
    },[products])
    const cartTotal= useMemo(()=>{
        const cartAmount = products.reduce((acumulator,product)=>{
           
            const totalPrice = acumulator + product.products[0].price * product.acount
            return totalPrice
        },0)
       
        return cartAmount
    },[products])

    return(
        <Container>
            <CartButton onPress={()=>navigation.navigate('Cart')}>
                <FeachIcon name="shopping-cart" size={24}   color="#f3f9ff" />
                <CartButtonText>{cartSize} </CartButtonText>
                <CartPricing>
                    <CartTotalPricing>R${cartTotal},00</CartTotalPricing>
                </CartPricing>
            </CartButton>
        </Container>
    )
}
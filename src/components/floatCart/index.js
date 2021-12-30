import React from "react";
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
    return(
        <Container>
            <CartButton onPress={()=>navigation.navigate('Cart')}>
                <FeachIcon name="shopping-cart" size={24}   color="#f3f9ff" />
                <CartButtonText>0 itens</CartButtonText>
                <CartPricing>
                    <CartTotalPricing>R$ 200,00</CartTotalPricing>
                </CartPricing>
            </CartButton>
        </Container>
    )
}
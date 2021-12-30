import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { 
    Container,
EmptyCartText,
} from './style';

export default ()=>{
    return <Container>
        <Feather name='slash' size={38} color="#f3f9ff" />
        <EmptyCartText>Your cart's empty </EmptyCartText>
    </Container>
}
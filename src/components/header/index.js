import React from 'react'
import {Image,Text} from 'react-native'
import {Container} from './style'
import {List,Card,Title} from 'react-native-paper'

const header = ()=>{
    return (
        <Container>
            <List.Icon color={"#FF0000"} icon="shopping" /><Title style={{color:"#FFF"}} >MarcketPlace</Title>
        </Container>
    )
}

export default header       
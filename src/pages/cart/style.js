import styled from "styled-components";
import {FlatList} from "react-native"

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #000;
    align-items: center;
`

export const ProductContainer = styled.View`
    flex:1;
    flex-direction: row;
    margin-top: 60px;
    border-radius: 20px;
    background-color: #e83f5b;
`
export const ProductList = styled(FlatList)`
    flex: 1;
    padding: 30px 10px;
`
export const Product = styled.View`
    flex:1;
    flex-direction: row;
    margin: 5px;
    background: #fff;
    min-width: 300px;
    min-height: 130px;
    padding: 15px 10px;
    border-radius: 20px;
`
export const ProductImage = styled.Image`
    height: 92px;
    width: 140px;
`
export const ProductTitleContainer = styled.View`
    font-size: 16px;
    margin-left: 15px;
    margin-top: 10px;
`
export const ProductTitle = styled.Text`
    font-size: 16px;
`
export const ProductPriceContainer = styled.View`
    flex-direction: column;
`
export const TotalContainer = styled.View`
    flex-direction: row;
    margin-top: 8px;

`
export const ProducStringPrice = styled.Text`
 font-size: 12px;
 margin-top:8px;
 color:#414756;
`
export const ProductPrice = styled.Text`
    font-weight: bold;
    color: #414756;
    margin-top: 8px;
    font-size: 16px;
`
export const ProductQuantiti = styled.Text`
    font-weight: bold;
    margin-right: 10px;
    color: #414756;
    margin-top: 8px;
    font-size: 16px;
`
export const ActionContainer = styled.View`
align-self: flex-end;
align-items: center;
justify-content: space-between;
margin-left: auto;
`
export const ActionButton = styled.TouchableOpacity`
    background: rgba(232,63,91);
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 0px;
`
export const TotalProductsContainer = styled.View`
    bottom:0;
    position: absolute;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 36px 40px;
    border-radius:10px;
    background: #e83f5b;
`
export const TotalProductsText = styled.Text`
    flex:1;
    font-size: 16px;
    color: #fff;
    margin-left:15px ;
    font-weight:bold;
    `
export const SubtotalValue = styled.Text`
    font-size: 16px;
    color:#fff;
    font-weight: bold;
`




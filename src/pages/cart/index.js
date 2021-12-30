import React,{useState,useMemo} from "react";
import {View} from 'react-native';
import FeatcherIcon from "react-native-vector-icons/Feather"
import  {
    Container,
ProductContainer,
ProductList,
Product,
ProductImage,
ProductTitleContainer,
ProductTitle,
ProductPriceContainer,
TotalContainer,
ProducStringPrice,
ProductPrice,
ProductQuantiti,
ActionContainer,
ActionButton,
TotalProductsContainer,
TotalProductsText,
SubtotalValue
} from'./style'

import EmptyCartText from '../../components/emptyCart'

export default ()=>{
    const [products,setProducts] = useState([])
    const cartSize = useMemo(()=>{
        return products.length || 0
    },[products])
    const cartTotal = useMemo(()=>{
        const cartAcount = products.reduce((acc,product)=>{
            const totalPrice = acc + product.preco * product.quanty
            return totalPrice
        },0)
        return cartAcount
    },[products])
    return(<Container >
        <ProductContainer>
            <ProductList
            data={products}
            keyExtractor={(i)=>i.id}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{height:80}}
            ListEmptyComponent={<EmptyCartText />}
            renderItem={({item})=>(
                <Product>
                <ProductImage source={{uri:item.image_url}} />
                <ProductTitleContainer>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPriceContainer>
                        <ProducStringPrice>{item.preco * item.quanty }</ProducStringPrice>
                    </ProductPriceContainer>
                    <TotalContainer>
                        <ProductQuantiti>{item.quanty}</ProductQuantiti>
                        <ProductPrice>{item.preco}</ProductPrice>
                    </TotalContainer>
                </ProductTitleContainer>
                <ActionContainer>
                    <ActionButton onPress={()=>{}}>
                        <FeatcherIcon name="plus" color="#EB3f58" size={16} />
                    </ActionButton>
                    <ActionButton onPress={()=>{}}>
                            <FeatcherIcon name="minus" color="#EB3f58" size={16} />
                    </ActionButton>              
                </ActionContainer>           
                </Product>
            )}
            />
        </ProductContainer>
        <TotalProductsContainer>
            <FeatcherIcon  name="shopping-cart" color="#fff" size={24} />
            <TotalProductsText>{cartSize} {cartSize == 1 ? "iten" : "itens"}</TotalProductsText>
            <SubtotalValue>R$ {cartTotal},00</SubtotalValue>
        </TotalProductsContainer>


    </Container>)
}
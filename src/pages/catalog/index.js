import React,{useState} from "react";
import {View,Text, FlatList} from 'react-native'
import { Container,
    ProductContainer,
    ProductList,
    Product,
    ProductImage,
    ProctTitle,
    PriceContainer,
    ProductPrice,
    ProductButton,
    ProductButtonText } from "./styles";
import FeaterIcon from 'react-native-vector-icons/Feather';
import FloatCart from "../../components/floatCart";

export default ()=>{
    const [produts,setProducts] = useState([
                                        {   id:1,
                                            title:"Assinatura trimestral",
                                            image_url: "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
                                            preco:150},
                                        {   id:2,
                                            title:"Assinatura trimestral",
                                            image_url: "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
                                            preco:150},
                                        {   id:3,
                                            title:"Assinatura trimestral",
                                            image_url: "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
                                            preco:150}])
   
    return(
       
    <>
    <Container>
        <ProductContainer>
          <ProductList
        data={produts}
        renderItem={({ item }) => (
        <Product>
           <ProductImage  source={{uri:item.image_url}} />
           <ProctTitle>{item.title}</ProctTitle>
           <PriceContainer>
               <ProductPrice>
                   {item.preco}
               </ProductPrice>
               <ProductButton onPress={()=>{}}>
                   <ProductButtonText>Adicionar</ProductButtonText>
                   <FeaterIcon size={30} name='plus-circle' color='#d1d7e9' />
               </ProductButton>
           </PriceContainer>
         </Product>
          )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<View/>}
        ListFooterComponentStyle={{
            heigth:80
        }}
       
      /> 
     
      </ProductContainer>
     
    </Container>
    <FloatCart />
   </>

     
     
    )

}


import React,{useEffect, useState} from "react";
import api from "../../services/api"
import {useDispatch} from 'react-redux'
import * as CartActions from '../../store/modules/cart/action' 
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
    const dispatch = useDispatch()
    const [produts,setProducts] = useState()
   useEffect(()=>{
     
    async function loadProducts(){
        try{
        const {data} = await api.get()
      
        setProducts(data.products)
        console.log("data: ",data.products)
       
        }catch(r){
            console.log(r)
        }
    }
    loadProducts()

   },[])

   function handleAddToCart(id){
       dispatch(CartActions.addToCartRequest(id))
   }
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
                   {item.price}
               </ProductPrice>
               <ProductButton onPress={()=>handleAddToCart(item.id)}>
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


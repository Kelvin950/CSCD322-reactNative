import React from 'react'
import {Text ,View , StyleSheet , Image } from "react-native"
import {Ionicons , FontAwesome , AntDesign ,Feather }  from "@expo/vector-icons"

export default function Bike(props){

     return (
        <View style={flexx.box} key={props.item.id}>
        <View  style={flexx.inner}>
        <AntDesign name="hearto" size={24} color="black" style={{textAlign:"right" }} />
          <Image source={props.item.imageurl} style={{width:"100%" , height:"50%", margin:3}}></Image>
          <Text style={[flexx.textAlign , {letterSpacing:0.2 , fontSize:20 , color:"#6a6c6d"}]}>
           {props.item.name}
          </Text>
          <Text style={[flexx.textAlign ,flexx.price]}>
          <FontAwesome name="dollar" size={15} color="orange" />
           {props.item.price}
          </Text>
    </View>
        </View>
     )
}


const flexx = StyleSheet.create({

    box:{
        width:"50%",
        height:"50%",
        padding:5,
      
      
       
    },
    inner:{
        flex:1,
        backgroundColor:"#eee",
      borderRadius:10,
        justifyContent:"center"
    }
    ,
    textAlign:{
        textAlign:"center" 
    } ,
    price:{
        fontWeight:"bold" , fontSize:20
    },
})
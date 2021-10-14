import React from "react"
import {View,StyleSheet, TouchableOpacity ,Text}  from "react-native"
import {Ionicons , FontAwesome , AntDesign ,Feather }  from "@expo/vector-icons"




export default function Navbar({navigate})
{
    console.log(navigate)
    return(
        <View style={[flexx.views , flexx.container]}>
        <TouchableOpacity>
        <Feather name="home" size={24} color="orange" onPress={()=>{
            navigate("Home")
        }} />
        </TouchableOpacity>
    <View style={flexx.border}>
<TouchableOpacity style={flexx.microphone}>
<FontAwesome name="microphone" size={24} color="white" />
</TouchableOpacity>
</View>
<TouchableOpacity>
<Feather name="shopping-bag" size={24} color="black" onPress={()=>{
 navigate("Cart")
}} />
</TouchableOpacity>

</View>
    )
}

const flexx =  StyleSheet.create({
    container:{flexDirection:"row" ,justifyContent:"space-between" ,alignItems:"center"},
    views:{ justifyContent:"center",alignItems:"center",backgroundColor:"#eee" , padding:5}, 
    microphone:{
        position:"relative" , bottom:30 , backgroundColor:"black", padding:15, borderRadius:200/2 },
        border:{
            borderRadius:200/2
        }
        
})
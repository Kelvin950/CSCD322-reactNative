import React from "react";
import {View, Text , Image ,TouchableOpacity} from "react-native";
import {Ionicons , FontAwesome , AntDesign}  from "@expo/vector-icons"

export default function login({navigation}){

    return(

        <View style= {{flex:1,justifyContent:"center",alignItems:"center", backgroundColor:"white"}}>
<Image
 style={{width:200 ,height:300 , borderRadius:10, marginBottom:20,}}
 source={{uri:"https://images.unsplash.com/photo-1531502774286-5e4e8e94879f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}/>

<Text style={{color:"black" , fontSize:24}}> Welcome to</Text>
<Text style={{color:"black", fontSize:30 , fontWeight:600}}>Power Bike Shop</Text>
<TouchableOpacity>
    <Text style={{
        backgroundColor:"#eee",
        padding:20,
      
        paddingHorizontal:40,
        fontSize:15 ,

    borderRadius:10 ,
    }} onPress={()=>{
        navigation.navigate("Home")
    }}>
    <AntDesign name="google" size={24} color="black"  style={{padding:5}}/>
        Login With Gmail
    </Text>
</TouchableOpacity>
<TouchableOpacity >
    <Text style={{
        backgroundColor:"black",
        color:"white",
        padding:20,
        paddingHorizontal:40,
        fontSize:15 ,
         margin:5 ,
    borderRadius:10 ,
    }} onPress={()=>{
        navigation.navigate("Home")
    }}>
    <AntDesign name="facebook-square" size={24} color="blue" style={{padding:5}} />
        Login With Gmail
    </Text>
</TouchableOpacity>
        </View>
      

    )
}
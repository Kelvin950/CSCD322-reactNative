import React from "react";
import {View, Text , Image ,TouchableOpacity} from "react-native";
import {Ionicons , FontAwesome , AntDesign}  from "@expo/vector-icons"

export default function login({navigation}){

    return(

        <View style= {{flex:1,justifyContent:"center",alignItems:"center", backgroundColor:"white"}}>
<Image
 style={{width:200 ,height:300 , borderRadius:5, marginBottom:20,}}
 source={{uri:"https://images.unsplash.com/photo-1531502774286-5e4e8e94879f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}/>

<Text style={{color:"black" , fontSize:24 }}> Welcome to</Text>
<Text style={{color:"black", fontSize:30 , fontWeight:"600" , margin:5}}>Power Bike Shop</Text>
<TouchableOpacity style={{
        backgroundColor:"#eee",
        padding:20,
        width:"60%",
        paddingHorizontal:40,
        fontSize:15 ,
        margin:10,

    borderRadius:10 ,
    }}>
    <Text  onPress={()=>{
        navigation.navigate("Home")
    }}>
    <AntDesign name="google" size={24} color="black"  style={{padding:5}}/>
        Login With Gmail
    </Text>
</TouchableOpacity>
<TouchableOpacity style={{
        backgroundColor:"black",
        margin:10,
        padding:20,
        paddingHorizontal:40,
        fontSize:15 ,
         margin:5 ,
         width:"60%",
    borderRadius:10 ,
    }} >
    <Text style={{color:"white"}} onPress={()=>{
        navigation.navigate("Home")
    }}>
    <AntDesign name="facebook-square" size={24} color="blue" style={{margin:10}} />
           Login With facebook
    </Text>
</TouchableOpacity>
<Text style={{ margin:5}}>
    Not a member? <Text style={{fontSize:18,color:"orangered" ,fontWeight:"500"}}>Sign up</Text>
</Text>
        </View>
      

    )
}
import React from "react"
import {Text ,View , StyleSheet , Image ,TouchableOpacity, TouchableOpacityBase} from "react-native"
import {Ionicons , FontAwesome , AntDesign ,Feather }  from "@expo/vector-icons"
import Navbar from "./navbar"
import CartItems from "./CartItems"
import bike1 from  "../assets/Bicycle-PNG-8.png"
import bike2 from  "../assets/pngaaa.com-548541.png"
import bike3 from "../assets/Bicycle-PNG-Background-Image.png"
import bike4 from "../assets/pngegg.png"
const  bikes =  [

    {
        imageurl:bike1,
        name:"Pinarello Bike",
        price:"1,700.00",
        id:0,
        category:"Mountain bike"
    },
    {
        imageurl:bike2,
        name:"Brompton Bike",
        price:"1,500.00",
        id:1,
        category:"Road bike"
    },
    {
        imageurl:bike3,
        name:"Schwinn Bike",
        price:"1,200.00",
        id:2,
        category:"Urban bike"

    },
  
]

export default function Cart({navigation}){
   
    return(
        <View style={{
            backgroundColor:"white",
            flex:1,
            paddingTop:55,
            paddingHorizontal:10
        }}>
    <View style={{
     flexDirection:"row" , justifyContent:"flex-start" , alignItems:"center"
 }}> 
 <Ionicons name="arrow-back" size={24} style={{marginRight:100}}></Ionicons>
 <View>
<Text style={flexx.fontsize}>
    Cart Items
</Text>
<Text style={flexx.fontcolor}>
    (3 Items)
</Text>
    </View>    
    </View>
    <View style={flexx.container}>
        {bikes.map(bike=><CartItems items={bike} />)}
   

  <View style={flexx.feeContainer}>
 <View style={flexx.fee}>
<Text style={flexx.fontcolor}>Subtotal</Text>
<Text style={flexx.fontsize}> <FontAwesome name="dollar" size={10} color="orangered" />3,400.00</Text>
 </View>   
 <View style={flexx.fee}  >
 <Text style={flexx.fontcolor}>Shipping Fee</Text>
<Text style={flexx.fontsize}> <FontAwesome name="dollar" size={10} color="orangered" />1,00.00</Text>

 </View> 

 <View style={[flexx.fee  ,{}]}>
 <Text  style={flexx.fontsize}>Total</Text>
<Text style={flexx.fontsize}> <FontAwesome name="dollar" size={10} color="orangered" />3,500.00</Text>
 </View>
  </View>

<TouchableOpacity  style={flexx.checkout}>
    <Text style={flexx.checkoutText}>
        Proceed to Checkout
    </Text>
</TouchableOpacity>
  </View>
 <Navbar navigate={navigation.navigate}/>
        </View>
    )
}


const flexx=  StyleSheet.create({
    
    container:{
        width:"100%",
        height:"85%"
        ,
        padding:5,
        marginTop:15
    },
    fontsize:{
        fontSize:20, fontWeight:"500"
    }
    ,
    fontcolor:{
color:"#6a6c6d", fontSize:16
    },
    fee:{
        flexDirection:"row" , justifyContent:"space-between" , alignItems:"center",
         padding:6
    },
    feeContainer:{
        backgroundColor:"#eee" , width:"95%" , margin:10 , borderRadius:10 ,
        marginTop:30 , padding:10
    }
    ,
    checkout:{
        backgroundColor:"orangered" , borderRadius:10,margin:30, marginTop:25   , padding:20
    },
    checkoutText:{
        fontSize:20 , fontWeight:"400",color:"#fff", textAlign:"center"
    }
})
import React from "react"
import {Text ,View , StyleSheet , Image ,FlatList} from "react-native"
import {Ionicons , FontAwesome , AntDesign ,Feather }  from "@expo/vector-icons"
import iconSet from "@expo/vector-icons/build/Fontisto"
import Bike from "./Bike"
import bike1 from  "../assets/Bicycle-PNG-8.png"
import bike2 from  "../assets/pngaaa.com-548541.png"
import bike3 from "../assets/Bicycle-PNG-Background-Image.png"
import bike4 from "../assets/pngegg.png"
import Navbar from "./navbar"
const  bikes =  [

    {
        imageurl:bike1,
        name:"Pinarello Bike",
        price:"1,700.00",
        id:0
    },
    {
        imageurl:bike2,
        name:"Brompton Bike",
        price:"1,500.00",
        id:1
    },
    {
        imageurl:bike3,
        name:"Schwinn Bike",
        price:"1,200.00",
        id:2

    },
    {
        imageurl:bike4,
        name:"Norco Bike",
        price:"9,80.00",
        id:3

    }
]


export default function Home({navigation}){

    return (
    <View style={{
        backgroundColor:"white",
        flex:1,
        paddingTop:55,
        paddingHorizontal:10
    }}>
 <View style={{
     flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"
 }}>
     <Ionicons name="ios-menu-outline" size={24} color="black"/>
     <FontAwesome name="motorcycle" size={24} color="black"></FontAwesome>
 
<View style={{flexDirection:"row",justifyContent:"space-between" , alignItems:"center"}}>
<Ionicons name="search"  size={24} color="black"></Ionicons>
   <FontAwesome name="bell" size={24}  color="black"></FontAwesome>

</View>
    
 </View>
 <Text style={{fontSize:22 , fontWeight:"bold" ,margin:15}}> 
     The World's <Text style={{fontSize:20 , fontFamily:"500" , color:"orangered"}}>Best Bike</Text>
 </Text>

 <Text style={{fontSize : 19  , fontWeight:"bold", margin:10}}>
     Categories
 </Text>

<View style={{flexDirection:"row" ,justifyContent:"flex-start" ,alignItems:"center"}}>
<Text style={{margin:14, backgroundColor:"#eee" ,padding:10 , borderRadius:5 , width:93 , textAlign:"center"}}>
   ALL
</Text>
<Text style={{margin:14, backgroundColor:"#eee" ,padding:10 , borderRadius:5 , width:93 , textAlign:"center"}}>
    RoadBike
</Text>
<Text style={{margin:14, backgroundColor:"#eee" ,padding:10 , borderRadius:5 , width:93}}>
    Mountain
</Text>
<Text style={{margin:14, backgroundColor:"#eee" ,padding:10 , borderRadius:5 ,textAlign:"center"}} onPress={
    ()=>{
        navigation.navigate("Cart")
    }
}>
    Urb
</Text>
</View>

<View style={flexx.bikeContainer}>

 {
     bikes.map(item=><Bike item={item} />)
 }

   
</View>
<Navbar navigate ={navigation.navigate}/>
    </View>
    

    )
}


const flexx = StyleSheet.create(
    {
      
        bikeContainer:{
          width:"100%"
          ,
          height:"70%",
          padding:5,
          flexDirection:"row",
          flexWrap:"wrap"
        },
      
    bikeView:{
   alignItems:"center" , justifyContent:"center" , height:100 ,flex:1 ,margin:1
    } ,
   
    
    }
    
)
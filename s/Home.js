import React from "react"
import {Text ,View , StyleSheet} from "react-native"
import {Ionicons , FontAwesome , AntDesign ,Feather}  from "@expo/vector-icons"
import iconSet from "@expo/vector-icons/build/Fontisto"

export default function Home(){

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
     The Worlds Best Bike
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
<Text style={{margin:14, backgroundColor:"#eee" ,padding:10 , borderRadius:5 ,textAlign:"center"}}>
    Urb
</Text>
</View>

<View style={[flexx.views , flexx.container]}>
<Feather name="home" size={24} color="orange" />
<FontAwesome name="microphone" size={24} style={flexx.microphone} color="white" />
<Feather name="shopping-bag" size={24} color="black" />
</View>
    </View>
    

    )
}


const flexx = StyleSheet.create(
    {
        container:{flexDirection:"row" ,justifyContent:"space-between" ,alignItems:"center"},
        views:{ position:"absolute" ,bottom:0 , left:0 , right:0, backgroundColor:"#eee" , padding:20}, 
        microphone:{
            position:"relative" , bottom:50 , backgroundColor:"black", padding:30, borderRadius:50       }
    }
)
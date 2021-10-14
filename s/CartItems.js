import React from "react"
import {Text ,View , StyleSheet , Image ,FlatList} from "react-native"
import {Ionicons , FontAwesome , AntDesign ,Feather }  from "@expo/vector-icons"


export default function CARTITEMS(props){


    return(
        <View 
        style={styles.container} key={props.items.id}
        > 
        <View style={styles.box2}>
       <View style={
           { flexDirection:"row",justifyContent:"flex-start" , alignItems:"center"}
       }>
        <View style={styles.imageContainer}>
        <Image source= {props.items.imageurl}  style={styles.image}></Image>
        </View>
         <View>
         <Text style={styles.bikeName}>
           {props.items.name}
         </Text>
         <Text style={styles.category}>
            {props.items.category}
         </Text>
         <Text style={styles.price}>
         <FontAwesome name="dollar" size={10} color="orangered" />
            {props.items.price}
         </Text>
         </View>
       </View>
        
       
        </View>
        
        <View style={styles.box}>
        <Feather name="trash-2" size={24} color="black"  style={{
            textAlign:"right" ,padding:5 , borderRadius:200/2 , borderStyle:"solid",borderColor:"#eee"
        }}/>
        <View>
            <Text style={{textAlign:"right" , fontSize:20}}>
            <AntDesign name="minuscircle" size={24} color="black" style={{
                margin:10
            }} /> 1
            <AntDesign name="pluscircle" size={24} color="orangered" style={{
                margin:4
            }} />
            </Text>
        </View>
        </View>
        </View>
    )
}


const styles =  StyleSheet.create({

    container:{
        margin:10,
             width:"100%"
        ,
     
        padding:5,
        flexDirection:"row",
        flexWrap:"wrap"},
        box:{
            width:"30%",
            height:"50%",
          
        },
    box2:{
        width:"70%"
    },
    image:{
        width:70 , height:50,
       padding:5
    }

    ,
    imageContainer:{
        backgroundColor:"#eee"
        ,
        marginRight:10,
        borderRadius:5 , padding:10
    }
    ,
    bikeName:{
        fontSize:20 ,letterSpacing:0.3 ,

    },
    category :{
        fontSize:10 , color:"#6A6C6D", margin:5
    },
    price:{
        fontWeight:"bold" , fontSize:20 }
})
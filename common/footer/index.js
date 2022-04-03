import React from 'react';
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {handleLogout} from "../../auth/function"
import {useRoute} from '@react-navigation/native';
const Index = ({navigation}) => {

  const route = useRoute();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <FontAwesome name="home" size={32} color={route.name==="Home"? "#2290ff":"gray"} style={{marginTop:6}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Account")}>
          <FontAwesome name="user" size={30} color={route.name==="Account"? "#2290ff":"gray"} style={{marginTop:6}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
          <AntDesign name="shoppingcart" size={32} color={route.name==="Cart"? "#2290ff":"gray"} style={{marginTop:6}}/>
          </TouchableOpacity>
          <MaterialIcons name="logout" size={32} color={"gray"} style={{marginTop:6}} onPress={()=>handleLogout(navigation)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"5%",
        backgroundColor:"white",
        borderTopWidth:1,
        borderColor:"gray",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
      
    }
})

export default Index;

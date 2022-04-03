import React from 'react';
import {View, StyleSheet,Text, ImageBackground} from 'react-native';

const Index = () => {
    const image = { uri: "https://activelebanon.org/wp-content/uploads/2018/02/tshirt-2.jpg" };
    return (
        <View style={styles.container}>
           <ImageBackground source={image} style={styles.image} /> 
           <View style={styles.subContainer}>
            <Text style={styles.txt}>Take a look about our new new products</Text>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        position:"relative",
        width:"80%",
        height:"20%",
        position:"absolute",
        backgroundColor:"white",
        borderRadius:20,
        top:"15%",
        left:"10%",
        borderColor:"lightgray",
        borderWidth:1,
        justifyContent:"flex-end",
    },
    image:{
        flex:1,
        justifyContent:"center",
        width:"100%",
        height:"100%"
    },
    txt:{
        fontWeight:"100",
        fontSize:15,
        marginTop:"10%"
      
    },
    subContainer:{
        width:"100%",
        height:"40%",
        opacity:0.6,
        position:"absolute",
        top:"20%",
        backgroundColor:"white"
    }
})

export default Index;

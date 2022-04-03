import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';

const Index = ({navigation,subcategory,mainCategory}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("SubSubCategory",{grandcategory:mainCategory,parentcategory:subcategory})}>
        <View style={styles.container}>
        <Text style={styles.txt}>{subcategory}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:"7%",
        marginLeft:"5%",
        width:"90%",
        borderBottomWidth:1,
        borderBottomColor:"gray",
        marginBottom:"3%"
    },
    txt:{
        color:"#52514f",
        fontSize:15,
        marginBottom:"1%",
        marginLeft:"3%",
    
    }
})

export default Index;

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NavBar from "../../components/subsubcategories/navBar/index";
import ListOfCategory from "../../components/subsubcategories/listOfCategories/index";
const Index = ({ navigation, route }) => {
 
  return (
    <View style={styles.container}>
      <NavBar
        grandcategory={route.params.grandcategory}
        navigation={navigation}
      />
    <Text
        style={{
          color: "gray",
          fontWeight: "bold",
          marginTop: "2%",
          marginLeft: "5%",
          marginBottom: "1%",
          fontFamily: "sans-serif",
        }}
      >
       {route.params.parentcategory}
      </Text>
      <ListOfCategory
        grandcategory={route.params.grandcategory}
        parentcategory={route.params.parentcategory}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f5f3",
    marginBottom: "1%",
   
  },
});

export default Index;

import React from "react";
import { View, StyleSheet ,ScrollView} from "react-native";
import SubCategory from "../subCategory/index";
const Index = ({ navigation,data,mainCategory}) => {
  
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{ display: "flex", flexDirection: "column"}}
        >
          {data.map((i, index) => {
            return (
              <SubCategory
                key={index}
                navigation={navigation}
                subcategory={i.name}
                mainCategory={mainCategory}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import Category from "../category/index";
import {ListItem} from "../../../redux/actions/ItemAction"

const Index = ({ navigation, grandcategory, parentcategory }) => {
  const [values, setValues] = useState({
    categories: [],
  });
  const dispatch=useDispatch();

  useEffect(async () => {
    try {
      const response = await axios.get(
        "http://192.168.0.133:4000/subsubcategories",
        {
          params: {
            grandcategory: grandcategory,
            parentcategory: parentcategory,
          },
        }
      );
      setValues({
        ...values,
        categories: response.data,
      });
      dispatch(ListItem(parentcategory,grandcategory))
    } catch (error) {
      console.log(data);
    }
  }, []);
  console.log(values.categories[0])
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",justifyContent:"space-evenly" }}
        >
          {values.categories.map((i, index) => {
            return (
              <Category
                key={index}
                img={i.img}
                title={i.title}
                navigation={navigation}
                description={i.description}
                salary={i.salary}
                rate={i.rate}
               id={i.subcategory_id}
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

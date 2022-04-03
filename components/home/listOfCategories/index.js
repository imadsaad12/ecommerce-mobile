import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Category from "../category/index";
import { ListCategory } from "../../../redux/actions/CategoryActions";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";

const Index = ({ navigation, search }) => {
  const [values, setValues] = useState([]);
  //const CategoryList = useSelector((state) => state.CategoryList);
  //const dispatch = useDispatch();
  //const { categories, loading, error } = CategoryList;

  useEffect(async () => {
   // dispatch(ListCategory());
   console.log(search)
   const { data } = await axios.get("http://192.168.0.133:4000/home");
    const handleSearch = () => {
      if (search === "") {
        setValues(data);
      } else {
        const filtered = data.filter((i) =>
          i.name.startsWith(search)
        );
        setValues(filtered);
      }
    };
    handleSearch()
  }, [search]);
  
//console.log(values)
  return (
    <View style={{ flex: 1 }}>
      {false ? (
        <Spinner
          visible
          textContent={"Loading..."}
          animation="fade"
          color="gray"
        />
      ) : (
        <ScrollView>
          <View
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {values.map((i, index) => {
              return (
                <Category
                  key={index}
                  image={i.img}
                  text={i.name}
                  navigation={navigation}
                />
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;

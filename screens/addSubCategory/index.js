import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const Index = ({ navigation }) => {
  const [state, setstate] = useState({ name: undefined, parentcategory: undefined });
  const handleChange = (field, value) => {
    if (field == "name") setstate({ ...state, name: value });
    else {
      setstate({ ...state, parentcategory: value });
    }
  };
  const handleAdd = () => {
    axios
      .post("http://192.168.0.133:4000/addsubcategory", state)
      .then((res) => {
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height: 80,
          backgroundColor: "#f2f5f3",
        }}
      >
        <TouchableOpacity
          style={{ marginTop: "10%", marginLeft: "2%" }}
          onPress={() => navigation.navigate("Account")}
        >
          <AntDesign name="leftcircleo" size={24} color="gray" />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: "34%",
            marginTop: "10%",
            fontSize: 17,
            color: "gray",
          }}
        >
          Add Category
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="subcategory name" onChangeText={(text)=>handleChange("name",text)} />
        <TextInput style={styles.input} placeholder="parentcategory" onChangeText={(text)=>handleChange("parentcategory",text)}/>
        <View style={{ width: 200 }}>
          <Button title="add" style={styles.btn} onPress={()=>handleAdd()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    flex: 1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: 170,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: 5,
    backgroundColor: "#dcf0fc",
    width: 330,
    height: 40,
    color: "black",
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  btn: {
    borderRadius: 10,
    marginTop: 40,
  },
});

export default Index;

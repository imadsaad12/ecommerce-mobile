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
  const [state, setstate] = useState({
    name:undefined,
    img:undefined,
    parentcategory:undefined,
    grandcategory:undefined,
    title:undefined,
    description:undefined,
    salary:undefined,
    rate:undefined, });
  const handleChange = (field, value) => {
    if (field == "name") setstate({ ...state, name: value });
    else if(field==="title"){
        setstate({ ...state, title: value });
    }
    else if(field==="img"){
        setstate({ ...state, img: value });
    }
    else if(field==="salary"){
        setstate({ ...state, salary: value });
    }
    else if(field==="parentcategory"){
        setstate({ ...state, parentcategory: value });
    }
    else if(field==="grandcategory"){
        setstate({ ...state, grandcategory: value });
    }
    else if(field==="rate"){
        setstate({ ...state, rate: value });
    }
    else if(field==="description"){
        setstate({ ...state, description: value });
    }
  };
  const handleAdd = () => {
    axios
      .post("http://192.168.0.133:4000/additem", state)
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
        <TextInput style={styles.input} placeholder="name" onChangeText={(text)=>handleChange("name",text)} />
        <TextInput style={styles.input} placeholder="title" onChangeText={(text)=>handleChange("title",text)} />
        <TextInput style={styles.input} placeholder="description" onChangeText={(text)=>handleChange("description",text)} />
        <TextInput style={styles.input} placeholder="salary" onChangeText={(text)=>handleChange("salary",text)} />
        <TextInput style={styles.input} placeholder="rate" onChangeText={(text)=>handleChange("rate",text)} />
        <TextInput style={styles.input} placeholder="parentcategory" onChangeText={(text)=>handleChange("parentcategory",text)} />
        <TextInput style={styles.input} placeholder=" grandcategory" onChangeText={(text)=>handleChange("grandcategory",text)} />
        <TextInput style={styles.input} placeholder="img" onChangeText={(text)=>handleChange("img",text)}/>
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

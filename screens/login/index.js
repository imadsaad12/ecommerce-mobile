import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { handleLogin } from "../../auth/function";
import { EvilIcons } from "@expo/vector-icons";
import { user } from "../../auth/function";
const profile = user();
const Index = ({ navigation }) => {
  const [userInput, setUserInput] = useState({
    email: undefined,
    password: undefined,
  });

  useEffect(() => {
    // if(profile){
    //   navigation.navigate("Home")
    // }
  }, []);

  const handleOnSubmit = () => {
    axios
      .post("http://192.168.0.133:4000/login", userInput)
      .then((result) => {
        handleLogin(result.data, navigation);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (filed, value) => {
    if (filed === "email") setUserInput({ ...userInput, email: value });
    else setUserInput({ ...userInput, password: value });
    console.log(userInput);
  };

  return (
    <View style={{ backgroundColor: "#2290ff", flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          MohoShop
        </Text>
        <View style={styles.form}>
          <Text style={{ fontSize: 25, color: "white", marginBottom: "9%" }}>
            Sign in
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: "white",
              marginBottom: "5%",
            }}
          >
            <AntDesign
              name="user"
              size={24}
              color="white"
              style={{ marginLeft: "3%" }}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={"white"}
              value={userInput.email}
              onChangeText={(email) => handleChange("email", email)}
              textContentType="emailAddress"
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: "white",
            }}
          >
            <EvilIcons
              name="lock"
              size={30}
              color="white"
              style={{ marginLeft: "2%", marginTop: "2%" }}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={"white"}
              value={userInput.password}
              onChangeText={(password) => handleChange("password", password)}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            onPress={handleOnSubmit}
            style={{
              backgroundColor: "white",
              width: 330,
              height: 35,
              marginTop: "8%",
            }}
          >
            <Text
              style={{ color: "#2290ff", textAlign: "center", marginTop: "2%" }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={{ display: "flex", flexDirection: "row" ,marginRight:"17%",marginTop:80}}
        >
          <Text style={styles.txt}>Don't have an account ?</Text>
          <Text
            style={{
              fontSize: 14,
              color: "white",
              textAlign: "center",
              marginTop: 100,
              borderBottomWidth:2,
              borderColor:"white",
              fontWeight:"bold"
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 140,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: 80,
    height: 180,
  },
  input: {
    borderRadius: 5,
    backgroundColor: "transparent",
    width: 280,
    height: 40,
    color: "white",
    fontWeight: "600",
    marginLeft: "3%",
  },
  txt: {
    fontSize: 14,
    color: "white",
    width: 250,
    textAlign: "center",
    marginTop: 100,
    paddingLeft:80
  },
  btn: {
    borderRadius: 10,
    marginTop: 40,
  },
 
});

export default Index;

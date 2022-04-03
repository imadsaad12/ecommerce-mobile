import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
const Index = ({ navigation }) => {
  const [show, setshow] = useState(true);
  const [userInput, setUserInput] = useState({
    email: undefined,
    password: undefined,
    username: undefined,
  });

  useEffect(() => {}, []);

  const handleOnSubmit = async () => {
    axios
      .post("http://192.168.0.133:4000/signup", userInput)
      .then((result) => {
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (filed, value) => {
    if (filed === "email") setUserInput({ ...userInput, email: value });
    else if (filed === "username") {
      setUserInput({ ...userInput, username: value });
    } else {
      setUserInput({ ...userInput, password: value });
    }
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
            Sign up
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
              placeholder="Username"
              placeholderTextColor={"white"}
              value={userInput.email}
              onChangeText={(email) => handleChange("username", email)}
             
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: "white",
              marginBottom: "5%",
            }}
          >
            <MaterialIcons
              name="email"
              size={24}
              color="white"
              style={{ marginLeft: "3%", marginTop: "2%" }}
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
              justifyContent:"space-between"
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
              secureTextEntry={show}
            />
            <TouchableOpacity style={{marginTop:"2%"}} onPress={()=>setshow(!show)}>
             <Feather name="eye-off" size={22} color="white" style={{marginRight:30}} />
            </TouchableOpacity>
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
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
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
    width:330
  },
  input: {
    borderRadius: 5,
    backgroundColor: "transparent",
    width: 265,
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
    paddingLeft: 80,
  },
  btn: {
    borderRadius: 10,
    marginTop: 40,
  },
});

export default Index;

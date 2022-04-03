import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { user } from "../../auth/function";
import { useDispatch, useSelector } from "react-redux";
import { GetOrders } from "../../redux/actions/AccountActions";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
const profile = user();
const Index = ({ navigation }) => {
  const [values, setvalues] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("http://192.168.0.133:4000/orders", {
      params: { userId: profile._W.userId },
    });
    setvalues(data);
  }, []);
  const costing = (value) => {
    const cost = value;
    return parseFloat(cost)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <View style={styles.conatiner}>
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
          Orders
        </Text>
      </View>
      <ScrollView>
        {values.map((i, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.subContainer}
              onPress={() =>
                navigation.navigate("ItemInfo", { id: i.subcategory_id })
              }
            >
              <Image source={{ uri: i.img }} style={styles.img} />
              <View style={styles.infoContaine}>
                <Text style={{ fontSize: 15, color: "gray" }}>{i.title}</Text>
                <Text
                  style={{ fontWeight: "400", color: "#383030", width: 150 }}
                >
                  {i.description}
                </Text>
                <Text
                  style={{
                    marginTop: "10%",
                    fontWeight: "bold",
                    color: "#292525",
                  }}
                >
                  LBP {costing(i.salary)}{" "}
                </Text>
              </View>
              <AntDesign
                name="checkcircleo"
                size={30}
                color="green"
                style={{ marginLeft: "10%" }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "2%",
    marginTop: "5%",
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgray",
  },
  infoContaine: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "7%",
    marginTop: "6%",
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
});

export default Index;

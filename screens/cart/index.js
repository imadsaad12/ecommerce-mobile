import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { user } from "../../auth/function";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay";
// import RNRestart from 'react-native-restart';

const profile = user();
const Index = ({ navigation }) => {
  const [values, setvalues] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    const { data } = await axios.get("http://192.168.0.133:4000/Cart", {
      params: { userId: profile._W.userId },
    });
    setvalues(data);
  });
  const costing = (value) => {
    const cost = value;
    return parseFloat(cost)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const handleOrder = async (productId) => {
    try {
      const req = await axios.post("http://192.168.0.133:4000/order", {
        userId: profile._W.userId,
        productId: productId,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = async (productId) => {
    try {
      const req = await axios.post("http://192.168.0.133:4000/removefromcart", {
        userId: profile._W.userId,
        productId: productId,
      });
      d
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      {loading ? (
        <Spinner
          visible
          textContent={"Loading..."}
          animation="fade"
          color="gray"
        />
      ) : (
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
              onPress={() => navigation.navigate("Home")}
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
              Cart
            </Text>
          </View>
          <ScrollView>
            {values.map((i, index) => {
              return (
                <View
                  key={index}
                  style={styles.subContainer}
                  //   onPress={() =>
                  //     navigation.navigate("ItemInfo", { id: i.subcategory_id })
                  //   }
                >
                  <Image source={{ uri: i.img }} style={styles.img} />
                  <View style={styles.infoContaine}>
                    <Text
                      style={{
                        fontSize: 17,
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {i.title}
                    </Text>
                    <Text
                      style={{
                        fontWeight: "400",
                        color: "#383030",
                        width: 150,
                      }}
                    >
                      {i.description}
                    </Text>
                    <Text
                      style={{
                        marginTop: "4%",
                        fontWeight: "bold",
                        color: "#292525",
                      }}
                    >
                      LBP {costing(i.salary)}{" "}
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: 120,
                        marginTop: "3%",
                        marginBottom: "1%",
                      }}
                    >
                      <Button
                        title="order"
                        color={"#2290ff"}
                        onPress={() => handleOrder(i.subcategory_id)}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{ marginLeft: "10%" }}
                    onPress={() =>{ handleCancel(i.subcategory_id)} }
                  >
                    <MaterialIcons name="cancel" size={24} color="lightgray" />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </>
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

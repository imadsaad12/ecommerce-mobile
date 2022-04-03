import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { GetTotal } from "../../../redux/actions/AccountActions";
import { user } from "../../../auth/function";
const profile = user();
const Index = () => {
  const amount = useSelector((state) => state.TotalPayment);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(GetTotal(profile._W.userId));
  }, []);
  const costing = () => {
    const cost = amount.total;
    return parseFloat(cost)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <View style={styles.container}>
      <View style={styles.overAll}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: "10%",
            marginTop: "3%",
          }}
        >
          LBP {costing()}{" "}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "200",
              marginLeft: "10%",
              marginTop: "1%",
            }}
          >
            Overall payments
          </Text>
          <FontAwesome
            name="money"
            size={15}
            color="black"
            style={{ marginLeft: "3%", marginTop: "2%" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 100,
    marginTop: "3%",
  },
  overAll: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#c4dbff",
    height: 90,
    width: "92%",
    borderRadius: 5,
    marginBottom: "1%",
    marginTop: "1%",
  },
});

export default Index;

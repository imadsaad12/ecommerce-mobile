import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SimilarItems from "../../components/itemInfo/similarItems/index";
import Spinner from "react-native-loading-spinner-overlay";
import { user } from "../../auth/function";

const profile = user();

const Index = ({ navigation, route }) => {
  const [values, setvalues] = useState({});
  const [loading, setloading] = useState(false);
  const [isFav, setisFav] = useState(false);
  const [modal, setmodal] = useState(false);
  useEffect(async () => {
    const { data } = await axios.get("http://192.168.0.133:4000/item", {
      params: {
        productId: route.params.id,
        userId: profile._W.userId,
      },
    });
    setvalues(data.item);
    setisFav(data.isFav);
  }, []);

  const costing = () => {
    const cost = values.salary;
    return parseFloat(cost)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const handleFav = async () => {
    try {
      const req = await axios.post("http://192.168.0.133:4000/addfav", {
        userId: profile._W.userId,
        productId: values.subcategory_id,
        isFav: !isFav,
      });
    } catch (error) {
      console.log(error);
    }
    setisFav(!isFav);
  };
  const handleOrder = async () => {
    setloading(true);
    try {
      const req = await axios.post("http://192.168.0.133:4000/order", {
        userId: profile._W.userId,
        productId: values.subcategory_id,
      });
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setloading(false);
      setmodal(true);
    }, 1000);
  };
  const handleAddToCart = async () => {
    setloading(true);
    try {
      const req = await axios.post("http://192.168.0.133:4000/addTocart", {
        userId: profile._W.userId,
        productId: values.subcategory_id,
      });
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setloading(false);
      setmodal(true);
    }, 1000);
  };
  return (
    <>
      {loading ? (
        <Spinner
          visible={loading}
          textContent={"Loading..."}
          animation="fade"
          color="gray"
        />
      ) : (
        <>
          <Modal visible={modal}>
            <View
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#2290ff",
              }}
            >
              <View style={{ marginTop: "60%" }}>
                <AntDesign
                  name="checkcircle"
                  size={120}
                  color="white"
                  style={{ marginLeft: "20%" }}
                />
                <Text
                  style={{
                    fontSize: 32,
                    marginTop: "5%",
                    marginBottom: 10,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  DONE !
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  Your order was placed successfully.
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  For more details orders in account page
                </Text>
                <TouchableOpacity
                  onPress={() => setmodal(false)}
                  style={{
                    backgroundColor: "white",
                    width: 200,
                    marginLeft: "10%",
                    height:30,
                    marginTop:"10%",
                    borderRadius:5
                  }}
                >
                  <Text style={{ color: "#2290ff",fontSize:17,fontWeight:"bold",textAlign:"center" }}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={[modal ? styles.container2 : styles.container]}>
            <View style={styles.topContainer}>
              <Image source={{ uri: values.img }} style={styles.img} />
              <TouchableOpacity
                style={{ position: "absolute", top: 13, left: 12 }}
                onPress={() =>
                  navigation.navigate("SubSubCategory", {
                    parentcategory: values.parentcategory,
                    grandcategory: values.grandcategory,
                  })
                }
              >
                <AntDesign name="leftcircleo" size={24} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleFav} style={styles.fav}>
                <Ionicons
                  name="heart-circle"
                  size={30}
                  color={isFav ? "red" : "gray"}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                borderTopEndRadius: 15,
                borderTopStartRadius: 15,
                width: "98%",
                top: "60%",
                right: "1%",
                backgroundColor: "#f2f5f3",
                height: "100%",
                marginLeft: 10,
                position: "absolute",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "7%",
                }}
              >
                <Text
                  style={{
                    marginLeft: "3%",
                    marginTop: "3%",
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "#181818",
                  }}
                >
                  {values.title}
                </Text>
                <Text
                  style={{
                    marginRight: "3%",
                    marginTop: "5%",
                    fontSize: 17,
                    color: "gray",
                  }}
                >
                  LBP {costing()}
                </Text>
              </View>
              <Text
                style={{ marginTop: "10%", marginLeft: "3%", fontSize: 19 }}
              >
                {values.description}
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20%",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "45%",
                    borderColor: "#2290ff",
                    borderWidth: 1,
                    height: 40,
                    marginLeft: "2%",
                    borderRadius: 10,
                  }}
                  onPress={() => handleOrder()}
                >
                  <Text style={{ textAlign: "center", marginTop: 8 }}>
                    Order
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "45%",
                    backgroundColor: "#2290ff",
                    borderColor: "#2290ff",
                    borderWidth: 1,
                    height: 40,
                    marginLeft: "7%",
                    borderRadius: 10,
                  }}
                  onPress={() => handleAddToCart()}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: 8,
                    }}
                  >
                    Add To Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 15, marginLeft: "3%", color: "gray" }}>
                Similar Items
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("SubSubCategory", {
                      parentcategory: values.parentcategory,
                      grandcategory: values.grandcategory,
                    })
                  }
                >
                  <Text
                    style={{
                      color: "blue",
                      marginRight: "2%",
                      paddingRight: 5,
                    }}
                  >
                    See all
                  </Text>
                </TouchableOpacity>
                <AntDesign name="right" size={20} color="blue" />
              </View>
            </View>
            <SimilarItems
              parentcategory={values.parentcategory}
              grandcategory={values.grandcategory}
              navigation={navigation}
            /> */}
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: "8%",
    position: "relative",
  },
  container2: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: "8%",
    opacity: 0.6,
  },
  img: {
    width: "100%",
    height: 500,
  },
  topContainer: {
    position: "relative",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "2%",
    marginBottom: "2%",
    borderWidth: 2,
    borderColor: "gray",
    height: 120,
    width: "98%",
    marginLeft: "1%",
  },
  txt: {
    fontSize: 25,
    fontWeight: "300",
    marginLeft: "5%",
  },
  discription: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: "5%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 300,
    width: 300,
  },
  fav: {
    position: "absolute",
    top: 13,
    right: 10,
  },
});

export default Index;

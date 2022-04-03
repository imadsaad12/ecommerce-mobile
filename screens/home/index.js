import React, { useEffect ,useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import Navbar from "../../common/Navbar/index";
import Categories from "../../components/home/listOfCategories/index";
import Footer from "../../common/footer";
import { useDispatch,useSelector } from "react-redux";
import {GetOrders, GetTotal} from "../../redux/actions/AccountActions"
import { GetFav } from "../../redux/actions/AccountActions";
import {user} from "../../auth/function"
import { GetCart } from "../../redux/actions/CartActions";

const profile=user();
const Index = ({ navigation }) => {
 const [search, setSearch] = useState("");
 const dispatch=useDispatch()
 useEffect(() => {
  //dispatch(GetFav(profile._W.userId))
  dispatch(GetOrders(profile._W.userId))
  dispatch(GetTotal(profile._W.userId))
  dispatch(GetCart(profile._W.userId))
  
 });
 console.log(search)
  return (
    <View style={styles.container}>
      <Navbar setSearch={setSearch}/>
      <Text
        style={{
          color: "gray",
          fontWeight: "bold",
          marginTop: "2%",
          marginLeft: "5%",
          marginBottom: "1%",
          fontFamily: "sans-serif",
        }}
      >
        All Categories
      </Text>
      <Categories navigation={navigation} search={search}/>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f5f3",
    marginBottom: "1%",
  },
});

export default Index;

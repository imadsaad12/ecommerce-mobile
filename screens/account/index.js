import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Footer from "../../common/footer/index";
import OverALL from "../../components/account/overall/index";
import RowOption from "../../components/account/rowOption/index";
import { user } from "../../auth/function";
const profile = user();

const Index = ({ navigation }) => {
  const image =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
  console.log(profile);
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={{ uri: image }} style={styles.img} />
        <View style={styles.subContainer}>
          <Text style={styles.txt}>{profile._W.username}</Text>
          <Text>{profile._W.email}</Text>
        </View>
      </View>
      <OverALL />
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
          <RowOption navigation={navigation} option="Orders" />
        </TouchableOpacity>
        <RowOption navigation={navigation} option="Reviews" />
        <TouchableOpacity onPress={() => navigation.navigate("Fav")}>
          <RowOption navigation={navigation} option="Favorites" />
        </TouchableOpacity>
        {profile._W.role === "admin" ? (
          <>
            <Text
              style={{
                fontSize: 17,
                color: "gray",
                textAlign: "center",
                marginTop: 30,
              }}
            >
              Admin
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Add Category")}
            >
              <RowOption navigation={navigation} option="Add Category" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Add Sub Category")}
            >
              <RowOption navigation={navigation} option="Add Sub Category" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Add Item")}>
              <RowOption navigation={navigation} option="Add Item" />
            </TouchableOpacity>
          </>
        ) : null}
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginBottom: 1,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10%",
    backgroundColor: "white",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: "3%",
    marginBottom: "1%",
    marginTop: "1%",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "12%",
    marginTop: "6%",
  },
  txt: {
    fontSize: 20,
    color: "gray",
  },
});

export default Index;

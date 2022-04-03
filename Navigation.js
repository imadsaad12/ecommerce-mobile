import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home/index";
import Category from "./screens/category/index";
import SubSubCategory from "./screens/subsubcategories/index";
import LogIn from "./screens/login/index"
import SignUp from "./screens/signup/index"
import Account from "./screens/account/index"
import ItemInfo from "./screens/itemInfo/index"
import Fav from "./screens/Fav/indx"
import Orders from "./screens/orders/index"
import Cart from "./screens/cart/index"
import AddCategory from "./screens/addCategory/index"
import AddSubCategory from "./screens/addSubCategory/index"
import AddItem from "./screens/addItem/index"

export default function Navigation() {
  const Stack = createStackNavigator();
  const screenoption = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn" screenOptions={screenoption}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Add Category" component={AddCategory} />
        <Stack.Screen name="Add Sub Category" component={AddSubCategory} />
        <Stack.Screen name="Add Item" component={AddItem} />
        <Stack.Screen name="Fav" component={Fav} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="SubSubCategory" component={SubSubCategory} />
        <Stack.Screen name="ItemInfo" component={ItemInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

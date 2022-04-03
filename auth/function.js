import * as SecureStore from 'expo-secure-store';
import jwt_decode from 'jwt-decode';

export const handleLogin=async(token,navigation)=>{
    await SecureStore.setItemAsync('token',token);
    //console.log(await SecureStore.getItemAsync('token'))
    navigation.navigate("Home");
} 
export const handleLogout=async(navigation)=>{
    await SecureStore.deleteItemAsync('token');
    navigation.navigate("LogIn");
} 

export const user=async()=>{
   const token = await SecureStore.getItemAsync('token');
   const decoded =  jwt_decode(token)
    return decoded;
}


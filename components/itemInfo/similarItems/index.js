import React, { useEffect ,useState} from 'react';
import {View, StyleSheet,ScrollView,Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {ListItem} from "../../../redux/actions/ItemAction"
import Item from "./item/index"
import Spinner from "react-native-loading-spinner-overlay";
const Index = ({navigation,parentcategory,grandcategory}) => {
    const [value, setValue] = useState([]);
    const itemList = useSelector(state=>state.ItemList)
    const dispatch=useDispatch();
    const {items,loading}=itemList
    useEffect(()=>{
        
        setValue(items)
    },[])
    console.log(items)
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
             <Spinner
                visible={loading}
                textContent={"Loading..."}
                animation="fade"
                color="gray"
            />
          <View
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",justifyContent:"space-evenly" }}
          >
            {value.map((i, index) => {
              return (
                <Item
                  key={index}
                  img={i.img}
                  title={i.title}
                  navigation={navigation}
                  description={i.description}
                  salary={i.salary}
                  rate={i.rate}
                 id={i.subcategory_id}
                />
              );
            })}
          </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({})

export default Index;

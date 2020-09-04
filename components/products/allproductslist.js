// import React from "react";
import { styles } from "../products/style";
import { View, Text,Image,TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { FlatList } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";

export default function ProductComponent({ navigation }) {


    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     axios.get(' http://localhost:3000/allProducts ')
    //         .then(res => {
    //             console.log(res.data)
    //             setProducts(res.data)
    //         })
    // })

    const [products, setProducts] = useState([]);
    const [searchproducts, setsearchproducts] = useState([]);
    const [valuesearch, setvaluesearch] = useState("");
    const [search, setsearch] = useState(false);
    // setshow(true)
    const isFocused = useIsFocused();
  
    useEffect(() => {
      console.log("useef");
      getAllProducts();
    }, [isFocused]);
  
    const getAllProducts = () => {
      axios.get("http://localhost:3000/allproducts").then((res) => {
        console.log(res.data);
        setProducts(res.data);
        console.log(products);
        // setshow(false);
      });
    };
  
    const searchFunction = (value) => {
      let searchV = value;
      if (searchV === "") {
        getAllProducts();
        // this.setState({
        //   searchproducts: this.state.products,
        //   search: false,
        // });
  
        setsearchproducts(products);
        setsearchproducts(false);
      }
      // this.setState({ searchValue: searchV });
      setvaluesearch(searchV);
      console.log(searchV);
      let searchF = products.filter((p) => {
        console.log(p.price);
        console.log(searchV);
        return (
          p.name.toLowerCase().match(searchV.toLowerCase()) ||
          p.price === parseInt(searchV)
        );
      });
      console.log(searchF);
  
      if (searchF) {
        console.log("search");
        // this.setState({ searchproducts: searchF, search: true });
        setsearchproducts(searchF);
        setsearch(true);
        // console.log(this.state.searchproducts);
      }
    };
  
    // productSelected=(id)=>{
  
    // }




    return (
        <ScrollView>
            <View style={styles.container}>
            
                <TouchableOpacity style={styles.addbutton}
                    onPress={() => { navigation.navigate('AddProduct') }}      >
                    <Text style={styles.add}>Add</Text>
                </TouchableOpacity>

                <View>
                
                    <FlatList
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        data={products}
                        renderItem={({ item }) => {
                            return(
                              <View style={{width: "50%", }}>
                              <View style={{width: "50%",height: 220}}>
                              <Image source={item.image} style={{width: "50%",height: 220,margin: 7,borderRadius: 7,}}></Image>
                              </View>
                              <View>
                            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { item: item })}>
                                <Text style={styles.listitem}>{item.name}</Text>
                            </TouchableOpacity>
                            </View>
                            </View>
                            )
                        
                        }}>


                    </FlatList>
                    
                    {/* <FlatList
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        data={searchproducts}
                        renderItem={({ item }) => {
                            return(
                            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { item: item })}>
                                <Image source={item.image}></Image>
                                <Text style={styles.listitem}>{item.name}</Text>
                            </TouchableOpacity>)
                        
                        }}>


                    </FlatList>} */}
                </View>
            </View>
        </ScrollView>



    )
}
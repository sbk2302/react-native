import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'darkblue',
        justifyContent: 'centre',
    },
    listitem:{
        marginTop:20,
        fontSize:30,
        backgroundColor:'lightblue',
        padding:20,
        color:"black"
    },
    add:{
        color:"black",
        fontSize:20,
    }, 
    addbutton:{
        width:"50%",
        backgroundColor:"lightblue",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
    
    },
    containerStyle:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center'  
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
    },
    productStyle:{
        fontWeight:"italic",
        fontSize:20,
        color:"#b1b669",
        fontFamily:'sans-serif-medium'
  
    },
    nameStyle:{
        fontWeight:"bold",
        fontFamily:'my-custom-font',
        fontSize:20,
        color:"#fb5b5a",
        marginBottom:20
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:25,
        color:"white",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"white",
        height:50,
        marginBottom:20,
        padding:20,
        justifyContent:"center"
    },
    inputText:{
        height:50,
        color:"white"
    },
    lgnbutton:{
        width:"80%",
        backgroundColor:"goldenrodyellow",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10
    }

})
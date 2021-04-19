import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import { TextInput } from 'react-native-gesture-handler';

export default class Transaction extends React.Component {
    constructor(){
        super()
        this.state = {hasCamPermissions:null, scanned:false, scannedData: "", buttonState:"normal"}
    }

    getCamPermission = async() => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({hasCamPermissions:status==="granted",buttonState:"clicked",scanned:false})
    }

    handleBarCodeScanner = async({type,data}) => {
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:"normal"
        })
    }

    render() {
        const hasCamPermissions = this.state.hasCamPermissions
        const buttonState = this.state.buttonState
        const scanned = this.state.scanned
        if(buttonState==="clicked" && hasCamPermissions) {
            return(
                <BarCodeScanner onBarCodeScanned={scanned? undefined : this.handleBarCodeScanner} style={StyleSheet.absoluteFillObject}></BarCodeScanner>
            )
        }

        else if(buttonState==="normal") {

        return(
            <View style = {styles.container}>
                <View>
                    <Image source={require("../assets/booklogo.jpg")} style={{width:200, height:200}}></Image>
                    <Text style={{textAlign: "center", fontSize: 30}}>Willy</Text>
                </View>
               <View style = {styles.inputView}>
                    <TextInput style = {styles.inputBox} placeholder="book id"/>
                    <TouchableOpacity style={styles.scanButton}>
                        <Text style={styles.buttonText}>
                            Scan
                        </Text></TouchableOpacity>
               </View>

               <View style = {styles.inputView}>
                    <TextInput style = {styles.inputBox} placeholder="student id"/>
                    <TouchableOpacity style={styles.scanButton}>
                        <Text style={styles.buttonText}>
                            Scan
                        </Text></TouchableOpacity>
               </View>
            </View>
        )
    }
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText:{
        fontSize: 20,
        textAlign: "center",
        marginTop: 10,
    },
    displayText:{
        fontSize: 15,
        textDecorationLine: "underline",
    },
    buttonStyle:{
        backgroundColor: "blue",
        padding: 10,
        margin: 10
    },
    inputView:{
        flexDirection: "row",
        margin: 20
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth:0,
        fontSize: 20
    }, 
    scanButton:{
        backgroundColor: 'blue',
        width: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
    }
})

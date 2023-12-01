import React from "react";
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";



function Weekly({ }) {
    return (
        <View style={styles.blueBackGround}>
            <ScrollView>
                <View style={styles.Weekbox}>
                    <Text style={styles.Headertext}>Monday</Text>
                    <Image 
                        source={require("Assets/cloud.png")}
                        style={styles.image}/>

                        <Text>Style this text to the right for the APi info</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text style={styles.Headertext}>Tuesday</Text>
                    <Image 
                        source={require("Assets/heavyrain.png")}
                        style={styles.image}/>

                        <Text>Style this text to the right for the APi info</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text style={styles.Headertext}>Wednesday</Text>
                    <Image 
                        source={require("Assets/mist.png")}
                        style={styles.image}/>

                        <Text>Style this text to the right for the APi info</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text style={styles.Headertext}>Thursday</Text>
                    <Image 
                        source={require("Assets/moderaterain.png")}
                        style={styles.image}/>

                        <Text>Style this text to the right for the APi info</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text style={styles.Headertext}>Friday</Text>
                    <Image 
                        source={require("Assets/partlycloudy.png")}
                        style={styles.image}/>

                        <Text>Style this text to the right for the APi info</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text style={styles.Headertext}>Saturday</Text>
                    <Image 
                        source={require("Assets/sun.png")}
                        style={styles.image}/>

                        <Text>Style this text to the right for the APi info</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text style={styles.Headertext}>Sunday</Text>
                    <Image 
                        source={require("Assets/sun.png")}
                        style={styles.image}/>

                        <Text>Style this text to the right for the APi info</Text>
                </View>

                <View style={styles.footerBox}>
                
                </View>

            </ScrollView>

        </View>

        
    );
};

const styles = StyleSheet.create({
    Weekbox: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 10,
      },
      
      footerBox: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 5,
        margin: 60,
      },

      blueBackGround: {
        backgroundColor: 'royalblue',
      },
      image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
      },

    Headertext: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',

      },
      Infotext: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',

      },
});

export default Weekly;
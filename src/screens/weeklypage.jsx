import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

function Weekly({ }) {
    return (
        <View style={styles.blueBackGround}>
            
                <View style={styles.Weekbox}>
                    <Text>Monday</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text>Tuesday</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text>Wednesday</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text>Thursday</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text>Friday</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text>Saturday</Text>
                </View>

                <View style={styles.Weekbox}>
                    <Text>Sunday</Text>
                </View>

                <View style={styles.footerBox}>
                    <Text></Text>
                </View>



        </View>

        
    );
}

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

    text: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',

      },
});

export default Weekly;
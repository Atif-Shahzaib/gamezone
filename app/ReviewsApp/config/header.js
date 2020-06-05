import React from 'react';
import {Text, View, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import styles from './css';
export default function Header({navigation, title}){
    const openMenu= () => {
        navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openMenu}/>
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/heart_logo.png')} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Dimensions, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface RecentSearchItem {
        id: number;
        pic: string;
        name: string;
        type: string;
        artist: string;
    }
const { width } = Dimensions.get('window');
const IMAGE_SIZE = width * 0.15
const RecentSearchItems: ListRenderItem<RecentSearchItem> = (props) => {
  const { item, index, separators } = props;
  return (
    <TouchableOpacity key={index}>
        <View style={styles.itemContainer}>

            <View style={styles.pic}>
                <Image source={{uri: item.pic}} style={{height: '100%', 'width': '100%'}} resizeMode='contain'/>
            </View>
            <View style={styles.textContainer}>  
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.typeText}>{item.type} - {item.artist}</Text>
            </View>
            <View style={styles.iconContainer}>
                <MaterialIcons name='add' style={styles.addIcon} size={25}/>
                <MaterialIcons name='close' style={styles.closeIcon} size={20}/>
            </View>

        </View>
      
    </TouchableOpacity>
  )
}

export default RecentSearchItems

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        margin: 5
    },
    pic: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE * 0.1,
        overflow: "hidden",
    },
    textContainer: {
        flexDirection: 'column',
        margin: '2.5%'
    },
    nameText: {
        fontSize: 18,
    },
    typeText: {
        fontSize: 14,
    },
    iconContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
        alignSelf: 'center'
    },
    closeIcon: {
        margin: 10,
        marginRight: 5,
        alignSelf: 'center'
    },
    addIcon: {
        margin: 10,
        alignSelf: 'center'
    }
})
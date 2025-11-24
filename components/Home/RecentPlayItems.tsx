import { ListRenderItem, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
interface RecentPlayItem {
        id: number;
        pic: string;
        name: string;
        type: string;
        artist: string;
    }
const { width } = Dimensions.get('window');
const IMAGE_SIZE = width * 0.125
const RecentPlayItem: ListRenderItem<RecentPlayItem> = (props) => {
    const { item, index, separators } = props;
  return (
    <View key={index} style={styles.container}>
        <View style={styles.itemContainer}>
            <View style={styles.pic}>
                <Image source={{uri: item.pic}} style={{height: '100%', 'width': '100%'}} resizeMode='contain'/>
            </View>
            <Text numberOfLines={2} style={styles.nameText}>{item.name}</Text>
        </View>
      
    </View>
  )
}

export default RecentPlayItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
        flexDirection: 'row',
        margin: 5,
        borderWidth: 1,
        borderRadius: IMAGE_SIZE * 0.1
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
        fontSize: 16,
        width: '75%',
        padding: 5,
        alignSelf: 'center',
        fontWeight: '600'
    }
})
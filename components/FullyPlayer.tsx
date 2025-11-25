import PlayerContext from '@/constants/PlayerProvider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useContext } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface SongItem {
    pic: string;
    name: string;
    playing: boolean,
    artist: string;
}
const width = Dimensions.get('window').width;
const IMAGE_SIZE = width * 0.1
const FullPlayer = ({onPress}: any) => {
  const player = useContext(PlayerContext);
  
  if (!player) return null;

  const { song, setSong } = player;

  return (
    console.log('here'),
    <TouchableOpacity style={styles.container} onPress={onPress}>
        
    </TouchableOpacity>
  );
};


export default FullPlayer

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        width: '95%',
        marginLeft: '2.5%',
        borderRadius: 10,
        bottom: '9.5%',
        height: '6.5%',
        backgroundColor: "#000000",
        justifyContent: "center",
        paddingHorizontal: 6,
    },
    bodyContainer: {
        flexDirection: 'row'
    },
    nameText: {
        fontSize: 14.50,
        color: "#fafafa",
        paddingLeft: 10,
        alignSelf: 'center'
    },
    picContainer: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE * 0.1,
        overflow: "hidden",
    },
    icon: {
        marginLeft: 'auto',
        marginRight: '2.5%',
        alignSelf: 'center'
    }
})
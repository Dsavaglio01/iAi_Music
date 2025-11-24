import RecentSearches from '@/components/Search/RecentSearches';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const search = () => {
  return (
    <SafeAreaView>
        <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.search}>
                <Text style={styles.searchText}>Search Music</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name='close' size={27.5} style={styles.close}/>
            </TouchableOpacity>
        </View>
        <View style={styles.divider}/>
        <RecentSearches />
    </SafeAreaView>
  )
}

export default search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    search: {
        borderWidth: 0.5,
        width: '83%',
        marginLeft: '5%',
        borderRadius: 5


    },
    searchText: {
        fontSize: 16,
        padding: 5
    },
    close: {
        alignSelf: 'center',
        paddingRight: '2.5%'
    },
    divider: {
        borderWidth: 0.5,
        marginTop: '5%'
    }
})
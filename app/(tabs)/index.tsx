import RecentPlays from '@/components/Home/RecentPlays';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Recent Plays</Text>
      <RecentPlays />
      <Text style={styles.title}>New Popular Releases</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    margin: '2.5%'
  }
  

});

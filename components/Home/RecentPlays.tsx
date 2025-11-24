import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import RecentPlayItems from './RecentPlayItems';
interface RecentPlayItem {
        id: number;
        pic: string;
        name: string;
        type: string;
        artist: string;
    }
const RecentPlays = () => {
    const data: RecentPlayItem[] = [{'id': 1, 'pic': 
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXMIwcsTtTu6QsOEk8FAK0GeU0ALgBkyAMuBIX4qxRcfL25Gt-n2gD5tFg2YQmppF-gK0P7bVviuicg6aLMclBCf_oRDNAvg',
        'name': 'Master of Puppets',
        'type': 'Song',
        'artist': 'Metallica'
        },
        {'id': 2, 'pic': 
        'https://www.billboard.com/wp-content/uploads/2022/03/6.-Pink-Floyd-%E2%80%98Dark-Side-of-the-Moon-1973-album-art-billboard-1240.jpg?w=600',
        'name': 'Dark Side of the Moon',
        'type': 'Album',
        'artist': 'Pink Floyd'
        },
        {'id': 3, 'pic': 
        'https://upload.wikimedia.org/wikipedia/en/5/53/Wu-TangClanEntertheWu-Tangalbumcover.jpg',
        'name': 'Enter the 36k Chambers',
        'type': 'Album',
        'artist': 'Wu-Tang Clan'
        },
        {'id': 4, 'pic': 
        'https://i.scdn.co/image/ab67616d0000b273d843fabb75fef14010e30cae',
        'name': 'In Da Club',
        'type': 'Song',
        'artist': '50 Cent'
        },
        {'id': 5, 'pic': 
        'https://i.scdn.co/image/ab67616d0000b27325c0ffb4eda4b7b34205185f',
        'name': 'Blow',
        'type': 'Song',
        'artist': 'Ke$ha'
        },
        {'id': 6, 'pic': 
        'https://i.scdn.co/image/ab67616d0000b273861f0d79ff28c0206bb34474',
        'name': "C'mon",
        'type': 'Song',
        'artist': 'Ke$ha'
        },
        {'id': 7, 'pic': 
        'https://i.scdn.co/image/ab67616d0000b2737a3d77a6bd0814a5998f7749',
        'name': 'Dancing with the Devil',
        'type': 'Song',
        'artist': 'Breaking Benjamin'
        },
        {'id': 8, 'pic': 
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Kendrick_Lamar_-_Damn.png/250px-Kendrick_Lamar_-_Damn.png',
        'name': 'DAMN.',
        'type': 'Album',
        'artist': 'Kendrick Lamar'
        }
    ]
  return (
    <FlatList<RecentPlayItem>
        data={data}
        numColumns={2}
        renderItem={(info) => (
            <RecentPlayItems {...info} />
        )}
    />
  )
}

export default RecentPlays

const styles = StyleSheet.create({})
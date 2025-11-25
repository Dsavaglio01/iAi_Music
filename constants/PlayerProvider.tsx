import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface SongItem {
  pic: string;
  name: string;
  playing: boolean;
  artist: string;
}

interface PlayerContextType {
  song: SongItem | null;
  setSong: React.Dispatch<React.SetStateAction<SongItem | null>>;
}

export const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [song, setSong] = useState<SongItem | null>(null);

  useEffect(() => {
    setSong({name: 'Master of Puppets', artist: "Metallica", playing: true,
        pic: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXMIwcsTtTu6QsOEk8FAK0GeU0ALgBkyAMuBIX4qxRcfL25Gt-n2gD5tFg2YQmppF-gK0P7bVviuicg6aLMclBCf_oRDNAvg'})
  }, [])
  return (
    <PlayerContext.Provider value={{ song, setSong }}>
      {children}
    </PlayerContext.Provider>
  );
};
export default PlayerContext;

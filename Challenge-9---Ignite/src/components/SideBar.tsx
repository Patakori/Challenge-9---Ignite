import { useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

import '../styles/sidebar.scss';
import { HookContext } from "../hook/context";

import { List, ListRowRenderer} from 'react-virtualized'

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {

  const { selectedGenreId, handleClickButton }:any = useContext(HookContext)

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
  useEffect(() => {
    
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);


  const rowRenderer: ListRowRenderer = ({key, index, style }) => {
    return (
      <div key={key} style={style}>
        <Button
              title={genres[index].title}
              iconName={genres[index].name}
              onClick={() => handleClickButton(genres[index].id)}
              selected={selectedGenreId === genres[index].id}
            />
      </div>
    )
  }
  

  return (
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          <List
            height={500}
            rowHeight={72}
            width={384}
            overscanRowCount={10}
            rowCount={genres.length}
            rowRenderer={rowRenderer}
          />
        </div>
      </nav>
  )
}
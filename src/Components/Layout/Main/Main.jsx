import React, { useState } from 'react';
import axios from 'axios';
import './Main.css';

import { SearchBox } from '../../UI/SearchBox/SearchBox.jsx';
import { Card } from '../../UI/Card/Card.jsx';

export const Main = () => {
  const [infoCard, setInfoCard] = useState([])
  const URL='https://api.giphy.com/v1/stickers/search?'
  const api_key = 'api_key=mJhM8ctUHaCH4hFtllCksGlX6RKby26S'
  const q= '&q='
  const limit= '&limit=16'


  const gifs = (event) =>{
    axios.get(`${URL}${api_key}${q}${encodeURI(event.target.value)}${limit}`)
    .then(response=>{
      setInfoCard(response.data.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <main className='container_main'>
      <SearchBox wordSearch={gifs}/>
      <div className='container_cards'>
        {
          infoCard.map(info =>(
            <Card  key={info.id} urlImageCard={info.images.downsized_medium.url} titleCard={info.title}/>
          ))
        }
      </div>
    </main>
  )
}

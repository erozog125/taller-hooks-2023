import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const Tenor = () => {

  const URL = "https://api.tenor.com/v1/trending";

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const getTrendingsGifs = async () => {
      const response = await axios.get(URL,{
        params: {
          key: "B5S1TNIXJSEY",
          limit: 15
        }
      });
      setGifs(response.data.results);
    };
    getTrendingsGifs();
  },[])
  

  return (
    <div>
      {
        gifs.map( gif =>( <img className='img-gif' key={gif.id} src={gif.media[0].gif.url} alt={gif.content_description} />))
      }
    </div>
  )
}

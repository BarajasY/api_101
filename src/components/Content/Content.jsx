import React, {useEffect} from 'react';
import './content.css';

const Content = () => {

    const initialUrl = "https://rickandmortyapi.com/api/character";

    const fetchCharacters = (url) => { /* Función FetchCharacters que contiene nuestro Fetch */
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data.results))
            .catch(error => console.log(error))
    };

    useEffect(() => { /* useEffect útil para efectos colaterales como una petición a la web */
        fetchCharacters(initialUrl)
    }, [])
    

  return (
    <div>Content</div>
  )
}

export default Content
import React, { useEffect, useState } from 'react';
import './content.css';
import { Pagination } from '../index';

const Content = () => {

  const [Character, setCharacter] = useState([]);
  const [Info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacter(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchCharacters(initialUrl)
  }, [])

  const onPrevious = () => {
    fetchCharacters(Info.prev)
  }

  const onNext = () => {
    fetchCharacters(Info.next)
  }


  return (
    <>
      <div className="cards_container">
        {Character.map((item, index) => ( /* .map function to iterate through all of our characters */
          <div className="card_container" key={index}>
            <img src={item.image} alt="character" />
            <div className="card_body">
              <h5 className="card_name">{item.name}</h5>
              <p>{item.location.name}</p>
              <p>{item.species}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination prev={Info.prev} next={Info.next} onPrevious={onPrevious} onNext={onNext} />
    </>
  )
}

export default Content
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
// import Character from "./../../components/UI/Plagination/Plagination";
import { Pagination, PaginationItem } from '@mui/material';
import './style/characters.css';
import ApplyTextStroke from '../../components/UI/ApplyTextStroke/ApplyTextStroke';

const Characters = () => {
  const [data, setData] = useState([]);
  let pageNum;  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const jsonData = await response.json();
      setData(jsonData); // сохраняем только массив с результатами
      pageNum = jsonData.info.pages;

      console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <section className="characters">
      <Header />

      <div className="wrapper">
        <div className="characters__filters-container">
          <select className="filter filter__select filters--species" id="">
            <option value="species">Species</option>
          </select>

          <select className="filter filter__select filters--status" id="">
            <option value="status">Status</option>
          </select>

          <select className="filter filter__select filters--gender" id="">
            <option value="gender">Gender</option>
          </select>

          <button className="reset__btn filter">Reset</button>
        </div>


        <div className="characters__card-wrapper">
          {data.results && data.results.map(character => (
            <div key={character.id} id={character.id} className="characters__card">
                <img src={character.image} className="characters__img" alt={character.name}/>

                <div className="card__name-container">
                  <span className="card__name-line"></span>
                  <ApplyTextStroke text={character.name} textSize="20" className="card__name" />
                  <span className="card__name-line"></span>
                </div>

                <div className="card__info">
                  <p className="card__info-text">
                      <span>Location:</span> {character.location.name}
                  </p>
                  <p className="card__info-text">
                      <span>Species:</span> {character.species}
                  </p>
                  <p className="card__info-text">
                      <span>Status:</span> {character.status}
                  </p>
                  <p className="card__info-text">
                      <span>Gender:</span> {character.gender}
                  </p>
                </div>
            </div>
          ))}
        </div>

        
        <div className="characters__plagination">
            <Pagination 
              count={10} // Total number of pages
              page={1} // Current page
              // onChange={handlePageChange} // Event handler for page change
              // classes={{
              //   button: "",
              // }}
              color="primary"
            />
        </div>

      </div>
    </section>
  );
}
export default Characters;

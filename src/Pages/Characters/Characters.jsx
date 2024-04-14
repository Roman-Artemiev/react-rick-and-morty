import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
// import Character from "./../../components/UI/Plagination/Plagination";
import './style/characters.css';
import ApplyTextStroke from '../../components/UI/ApplyTextStroke/ApplyTextStroke';
import TitleView from '../../components/UI/TitleView/TitleView';
import Plagination from '../../components/UI/Plagination/Plagination';
import FiltrSelect from '../../components/UI/FiltrSelect/FiltrSelect';
import FilterResetBtn from '../../components/UI/FilterResetBtn/FilterResetBtn';
import FilterNotFound from '../../components/UI/FilterNotFound/FilterNotFound';

const Characters = ({ isCharacters }) => {
  const [data, setData] = useState([]);
  
  const [pageCount, setPageCount] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const [species, setSpecies] = useState([]);
  const [status, setStatus] = useState([]);
  const [gender, setGender] = useState([]);

  const [currentSpecies, setCurrentSpecies] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentGender, setCurrentGender] = useState("");


  const [isNotFound, setIsNotFound] = useState(false);


  useEffect(() => {
    fetchAllData();
}, [currentPage, currentSpecies, currentStatus, currentGender, pageCount, isNotFound]);



  const fetchAllData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}&status=${currentStatus.toLocaleLowerCase()}&species=${currentSpecies.toLocaleLowerCase()}&gender=${currentGender.toLocaleLowerCase()}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          console.error('Resource not found:', response.statusText);
          setIsNotFound(true);
        } else {
          throw new Error('Failed to fetch data: ' + response.statusText);
        }
      }   else {
        setIsNotFound(false);
      }
        const jsonData = await response.json();
        setData(jsonData); 
        setPageCount(jsonData.info.pages);
        // console.log(currentSpecies, currentStatus, currentGender);
        setIsNotFound(false);
        console.log(jsonData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      // window.location.reload(true);
    }
  };
  
  useEffect(() => {
    const fetchCharactersData = async () => {
      try { 
        const requests = [];
        const speciesArr = [];
        const statusArr = [];
        const genderArr = [];
  
        for (let i = 0; i < 42; i++) {
          requests.push(fetch(`https://rickandmortyapi.com/api/character?page=${i}`));
        }
        
        const responses = await Promise.all(requests);
  
        for (const response of responses) {
          const data = await response.json();
          
          data.results.forEach((item) => {
            if (!speciesArr.includes(item.species)) {
              speciesArr.push(item.species);
            }
            if (!statusArr.includes(item.status)) {
              statusArr.push(item.status);
            }
            if (!genderArr.includes(item.gender)) {
              genderArr.push(item.gender);
            }
          });
        }
  
        setSpecies(speciesArr);
        setStatus(statusArr);
        setGender(genderArr);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchCharactersData();
  }, []);


  const changePage = (event, thisPage) => {
    setCurrentPage(thisPage);
  }

  const changeSpecies = (event) => {
    setCurrentSpecies(event.target.value);
    fetchAllData();
  };

  const changeStatus = useCallback(event => {
    setCurrentStatus(event.target.value);
    fetchAllData();
  }, []);

  const changeGender = useCallback(event => {
    setCurrentGender(event.target.value);
    fetchAllData();
  }, []);

  

  const resetFilters = () => {
    setCurrentSpecies("");
    setCurrentStatus("");
    setCurrentGender("");
    setIsNotFound(false);
    fetchAllData();
  }


  const [shortPaginationView, setShortPaginationView] = useState(false);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 600) {
        setShortPaginationView(true);
      } else {
        setShortPaginationView(false);
      }
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <section className="characters">
      <Header isCharacters={isCharacters} />

      <div className="wrapper">
        <div className="characters__filters-container">
          <FiltrSelect
              text = "Species"
              id = "species"
              onChange = {changeSpecies}
              selectValue = {currentSpecies}
              array = {species}
          />


          <FiltrSelect
              text = "Status"
              id = "status"
              onChange = {changeStatus}
              selectValue = {currentStatus}
              array = {status}
          />

          <FiltrSelect
              text = "Gender"
              id = "gender"
              onChange = {changeGender}
              selectValue = {currentGender}
              array = {gender}
          />

           <FilterResetBtn
            onClick={resetFilters}
           />
        </div>


        <div className="characters__card-wrapper">
          {data.results && data.results.map(character => (
            <div key={character.id} id={character.id} className="characters__card">
                <div className="characters__img">
                  <img src={character.image} alt={character.name}/>
                </div>

                <TitleView
                  textSize="20"
                  text={character.name}
                  lineWidth="40"
                  lineHeight="3"
                />

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


          <FilterNotFound
            isNotFound={isNotFound}
            text="Sorry, but there are simply no quiet characters"
          />
        
          <Plagination
            defaultPage={6} siblingCount={shortPaginationView ? 1 : 0}
            pageCount={pageCount}
            currentPage={currentPage}
            handleChangePage={changePage}
          />

      </div>
    </section>
  );
}
export default Characters;

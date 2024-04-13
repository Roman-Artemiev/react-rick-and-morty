import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
// import Character from "./../../components/UI/Plagination/Plagination";
import { Pagination, PaginationItem } from '@mui/material';
import './style/characters.css';
import ApplyTextStroke from '../../components/UI/ApplyTextStroke/ApplyTextStroke';
import notFoundIllustration from "./../../components/main/img/not-foudn__illustration.png"
import TitleView from '../../components/UI/TitleView/TitleView';
import Plagination from '../../components/UI/Plagination/Plagination';

const Characters = () => {
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
}, [currentPage, currentSpecies, currentStatus, currentGender, pageCount]);



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
    fetchAllData();
  }


  function ApplyTextStrokeSelect({ text, strokeColor, textColor, textSize, containerElement }) {
    useEffect(() => {
        if (containerElement) {
            applyTextStroke(text, strokeColor, textColor, containerElement, textSize);
        }
    }, [text, strokeColor, textColor, textSize, containerElement]);

    return null; // This component doesn't render anything
  }

  function applyTextStroke(text, strokeColor, textColor, containerElement, textSize) {
      var tSize = parseInt(textSize);
      var sSmooth = 4;
      var sSize = 1;

      function getCSS(tFamily, tBold, tSize, tColor, size, color, smooth) {
          var s = "";

          var sm = smooth > 0 ? smooth + "px" : smooth + "  ";
          var wp = size + "px";
          for (var i = 0; i <= size; i++) {
              var ip = i > 0 ? i + "px" : i + "  ";

              s += "\t\t-" + ip + " -" + wp + " " + sm + " " + color + ",\n";
              s += "\t\t " + ip + " -" + wp + " " + sm + " " + color + ",\n";
              s += "\t\t-" + ip + "  " + wp + " " + sm + " " + color + ",\n";
              s += "\t\t " + ip + "  " + wp + " " + sm + " " + color + ",\n";
              s += "\t\t-" + wp + " -" + ip + " " + sm + " " + color + ",\n";
              s += "\t\t " + wp + " -" + ip + " " + sm + " " + color + ",\n";
              s += "\t\t-" + wp + "  " + ip + " " + sm + " " + color + ",\n";
              s += "\t\t " + wp + "  " + ip + " " + sm + " " + color + ",\n";
          }

          s = s.slice(0, -2);

          return {
              css: ".ts {\n" + "\tfont-family: " + tFamily + ";\n\tfont-size: " + tSize + "px;" + (tBold ? "\n\tfont-weight: bold;" : "") + "\n\tcolor: " + tColor + ";\n\ttext-shadow: \n" + s + ";\n}\n/* created with http://protocoder.ru/css/strokeTextGen */\n",
              prop: s
          };
      }

      function renew() {
          var tFamily = `'Permanent Marker', cursive`;
          var tBold = false;
          var s = getCSS(tFamily, tBold, tSize, strokeColor, sSize, strokeColor, sSmooth);

          containerElement.style.fontFamily = tFamily;
          containerElement.style.fontWeight = tBold ? "bold" : "normal";
          containerElement.style.fontSize = tSize + "px";
          containerElement.style.color = textColor;
          containerElement.style.textShadow = s.prop;
      }

      renew();
  }
  

  return (
    <section className="characters">
      <Header />

      <div className="wrapper">
        <div className="characters__filters-container">
          <ApplyTextStrokeSelect
              text="Species"
              strokeColor='#09B20E'
              textColor='#BDFFA0'
              textSize="20"
              containerElement={document.getElementById("species")}
          />
          <select onChange={changeSpecies} id="species" className="filter filter__select filters--species" value={currentSpecies}>
              <option value=" ">Species</option>
              {species.map((specie, index) => (
                  <option key={index} value={specie}>{specie}</option>
              ))}
          </select>

          <ApplyTextStrokeSelect
              text="Status"
              strokeColor='#09B20E'
              textColor='#BDFFA0'
              textSize="20"
              containerElement={document.getElementById("status")}
          />
          <select onChange={changeStatus} id="status" className="filter filter__select filters--status" value={currentStatus}>
              <option value=" ">Status</option>
              {status.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
              ))}
          </select>

          <ApplyTextStrokeSelect
              text="Gender"
              strokeColor='#09B20E'
              textColor='#BDFFA0'
              textSize="20"
              containerElement={document.getElementById("gender")}
          />
          <select onChange={changeGender} id="gender" className="filter filter__select filters--gender" value={currentGender}>
              <option value=" ">Gender</option>
              {gender.map((gender, index) => (
                  <option key={index} value={gender}>{gender}</option>
              ))}
          </select>

          <ApplyTextStroke
          onClick={resetFilters}
            text="Reset"
            textSize="20"
            className="reset__btn filter"
           />
        </div>


        <div className="characters__card-wrapper">
          {data.results && data.results.map(character => (
            <div key={character.id} id={character.id} className="characters__card">
                <img src={character.image} className="characters__img" alt={character.name}/>

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

        <div className={`characters__not-found ${isNotFound ? "" : '_hide'}`}>
          <img src={notFoundIllustration} alt="Not Found Rick And Morty" />
          <p className='characters__not-found-text'>Sorry, but there are simply no quiet characters</p>
        </div>

        
          <Plagination
            pageCount={pageCount}
            currentPage={currentPage}
            handleChangePage={changePage}
          />

      </div>
    </section>
  );
}
export default Characters;

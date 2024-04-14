import React, { useEffect, useState } from 'react';
import "./style/locations.css"

import Header from '../../components/Header/Header';
import SearchInput from '../../components/UI/SearchInput/SearchInput';
import FiltrSelect from '../../components/UI/FiltrSelect/FiltrSelect';
import TitleView from '../../components/UI/TitleView/TitleView';
import Plagination from '../../components/UI/Plagination/Plagination';
import FilterResetBtn from '../../components/UI/FilterResetBtn/FilterResetBtn';
import FilterNotFound from '../../components/UI/FilterNotFound/FilterNotFound';


const Locations = ({ isLocations }) => {
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const [type, setType] = useState([]);
    const [dimension, setDimension] = useState([]);
  
    const [currentType, setCurrentType] = useState("");
    const [currentDimension, setCurrentDimension] = useState("");


    const [isNotFound, setIsNotFound] = useState(false);
    const [onSearchReset, setOnSearchReset] = useState(false);



    useEffect(() => {
        fetchData();
    }, [currentPage, searchQuery, currentType, currentDimension, isNotFound]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/location?page=${currentPage}&name=${searchQuery}&type=${currentType}&dimension=${currentDimension}`);
            const jsonData = await response.json();

            if (!response.ok) {
                if (response.status === 404) {
                  console.error('Resource not found:', response.statusText);
                  setIsNotFound(true);
                } else {
                  throw new Error('Failed to fetch data: ' + response.statusText);
                }
            }  else {
                setIsNotFound(false);
            }

            setData(jsonData.results);
            setPageCount(jsonData.info.pages);
            console.log(jsonData)
        } catch (error) {
            console.log("Error fetching data in episodes: ", error);
        }
    };


    useEffect(() => {
        const fetchCharactersData = async () => {
          try { 
            const requests = [];
            const typeArr = [];
            const dimensionArr = [];
      
            for (let i = 0; i < 8; i++) {
              requests.push(fetch(`https://rickandmortyapi.com/api/location?page=${i}`));
            }
            
            const responses = await Promise.all(requests);
      
            for (const response of responses) {
              const data = await response.json();
              
              data.results.forEach((item) => {
                if (!typeArr.includes(item.type) && item.type !== "") {
                    typeArr.push(item.type);
                }
                if (!dimensionArr.includes(item.dimension) && item.dimension !== "") {
                    dimensionArr.push(item.dimension);
                }
              });
            }
      
            setType(typeArr);
            setDimension(dimensionArr);
          } catch (error) {
            console.error('Error:', error);
          }
        };
      
        fetchCharactersData();
    }, []);


    const changeType = (event) => {
        setCurrentType(event.target.value);
        fetchData();
    };

    
    const changeDimension = (event) => {
        setCurrentDimension(event.target.value);
        fetchData();
    };

    
    const changePage = (event, thisPage) => {
        setCurrentPage(thisPage);
    };
    
    const handleSearch = (query) => {
        setSearchQuery(query);
        setOnSearchReset(false);
    };


    const resetFilters = () => {
        setCurrentType("");
        setCurrentDimension("");
        setIsNotFound(false);
        setSearchQuery("");
        setOnSearchReset(true);
        fetchData();
    }
    
    
  return (
    <section className='locations'>
        <Header isLocations={isLocations}/>

        <div className="wrapper">
            <SearchInput onSearch={handleSearch} placeholder={"Search Location"} onReset={onSearchReset} />
            
            <div className="locations__filters">
                <FiltrSelect
                    text = "Type"
                    id = "type"
                    onChange = {changeType}
                    selectValue = {currentType}
                    array = {type}
                />

                <FiltrSelect
                    text = "Dimension"
                    id="dimension"
                    onChange={changeDimension}
                    selectValue={currentDimension}
                    array={dimension}
                />

                <FilterResetBtn
                    onClick={resetFilters}
                />
            </div>


            <div className="locations__wrapper">
                {data && data.map((location) => (
                    <div key={location.id} className="locations__box">
                        <TitleView textSize="28" text={location.name} lineWidth="50" lineHeight="3"/>
                        <div className='locations__box-info__container'>
                            <p className='locations__box-info__text'><span>Type:</span> {location.type}</p>
                            <p className='locations__box-info__text'><span>Dimension:</span> {location.dimension}</p>
                        </div>
                    </div>
                ))}
            </div>


            <FilterNotFound
                isNotFound={isNotFound}
                text="Sorry, but there are simply no quiet location"
            />


            <Plagination pageCount={pageCount} currentPage={currentPage} handleChangePage={changePage} />
        </div>
    </section>
  )
}

export default Locations
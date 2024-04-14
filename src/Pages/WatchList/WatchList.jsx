import React, { useEffect, useState } from 'react'
import "./style/watch-list.css"
import Header from '../../components/Header/Header'
import SearchInput from '../../components/UI/SearchInput/SearchInput';
import axios from 'axios';
import TitleView from '../../components/UI/TitleView/TitleView';
import FilterNotFound from '../../components/UI/FilterNotFound/FilterNotFound';


const WatchList = ({ isWatchList }) => {
    const [episodes, setEpisodes] = useState(JSON.parse(localStorage.getItem("favoriteEpisodes")));
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isNotFound, setIsNotFound] = useState(false);

    const storedFavoriteEpisodes = localStorage.getItem("favoriteEpisodes");
    const initialFavoriteEpisodes = storedFavoriteEpisodes ? JSON.parse(storedFavoriteEpisodes) : [];

    const [favoriteEpisodes, setFavoriteEpisodes] = useState(initialFavoriteEpisodes);



    useEffect(() => {
      setEpisodes(JSON.parse(localStorage.getItem("favoriteEpisodes")))
    }, [storedFavoriteEpisodes, favoriteEpisodes]);


    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleToggleFavorite = (episode) => {
      const episodeId = episode.id;
      if (favoriteEpisodes.includes(episodeId)) {
        const updatedFavoriteEpisodes = favoriteEpisodes.filter(id => id !== episodeId);
        setFavoriteEpisodes(updatedFavoriteEpisodes.length > 0 ? updatedFavoriteEpisodes : []);
      } else {
        setFavoriteEpisodes(prevFavoriteEpisodes => [...prevFavoriteEpisodes, episodeId]);
        setIsNotFound(true);
      }
    };
    
    useEffect(() => {
      localStorage.setItem("favoriteEpisodes", JSON.stringify(favoriteEpisodes));
      
      const fetchCharactersData = async () => {
        try {
          const result = await Promise.all(favoriteEpisodes.map(async (episodeId) => {
            const response = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
            return response.data;
          }));
      
          setData(result);
          if(result.length == 0) 
          { setIsNotFound(true) } 
          else
           { setIsNotFound(false) }

          console.log(result)
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
      fetchCharactersData();
    }, [favoriteEpisodes]);
    
    
    const filteredData = data.filter(episode => {
      return episode.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    

    useEffect(() => {
        localStorage.setItem("favoriteEpisodes", JSON.stringify(favoriteEpisodes));
    }, [favoriteEpisodes]);



  return (
    <div className='watch-list'>
        <Header isWatchList={isWatchList}/>

        <div className="wrapper">
            <SearchInput onSearch={handleSearch} placeholder={"Seach by the name"}/>

            <div className="watch-list__container">
                {filteredData && filteredData.map((episode, index) => (
                    <div key={episode.id} className={`episodes__box ${favoriteEpisodes.includes(episode.id) ? "_favorite" : ""}`}>
                        <div onClick={() => handleToggleFavorite(episode)} className={`episodes__box-favorite`}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0863 5.51394C14.3756 4.86471 14.5204 4.5401 14.7219 4.44014C14.8969 4.35329 15.1024 4.35329 15.2774 4.44014C15.4789 4.5401 15.6236 4.86471 15.913 5.51394L18.218 10.6851C18.3036 10.877 18.3464 10.973 18.4126 11.0465C18.4711 11.1115 18.5428 11.1635 18.6226 11.1991C18.713 11.2394 18.8175 11.2504 19.0265 11.2724L24.6569 11.8667C25.3638 11.9413 25.7171 11.9786 25.8745 12.1393C26.0111 12.2789 26.0746 12.4745 26.0461 12.6678C26.0134 12.8903 25.7494 13.1281 25.2214 13.604L21.0155 17.3942C20.8595 17.5349 20.7814 17.6053 20.732 17.6909C20.6883 17.7668 20.6609 17.8509 20.6518 17.9379C20.6414 18.0362 20.6631 18.139 20.7068 18.3446L21.8815 23.883C22.029 24.5784 22.1028 24.926 21.9985 25.1253C21.9079 25.2985 21.7416 25.4192 21.549 25.4519C21.3273 25.4894 21.0194 25.3119 20.4036 24.9568L15.4993 22.128C15.3173 22.023 15.2263 21.9706 15.1295 21.95C15.0439 21.9319 14.9554 21.9319 14.8698 21.95C14.773 21.9706 14.682 22.023 14.5 22.128L9.59565 24.9568C8.97993 25.3119 8.67207 25.4894 8.4503 25.4519C8.25767 25.4192 8.09137 25.2985 8.00082 25.1253C7.89658 24.926 7.97032 24.5784 8.1178 23.883L9.2925 18.3446C9.3361 18.139 9.3579 18.0362 9.34755 17.9379C9.33839 17.8509 9.31105 17.7668 9.2673 17.6909C9.21787 17.6053 9.13982 17.5349 8.98373 17.3942L4.77795 13.604C4.24994 13.1281 3.98593 12.8903 3.9531 12.6678C3.9246 12.4745 3.98812 12.2789 4.12479 12.1393C4.28214 11.9786 4.63558 11.9413 5.34245 11.8667L10.9728 11.2724C11.1818 11.2504 11.2863 11.2394 11.3766 11.1991C11.4566 11.1635 11.5281 11.1115 11.5867 11.0465C11.6529 10.973 11.6957 10.877 11.7812 10.6851L14.0863 5.51394Z" fill="white"/>
                            </svg>
                        </div>
                        <TitleView textSize="28" text={episode.episode} lineWidth="50" lineHeight="3"/>
                        <div className="episodes__box-container">
                            <div className="episodes__box-info">
                                <div className='episodes__box-info__container'>
                                    <p className='episodes__box-info__text'><span>Name:</span> {episode.name}</p>
                                    <p className='episodes__box-info__text'><span>Date:</span> {episode.air_date}</p>
                                </div>
                                <button onClick={() => handleToggleFavorite(episode)} className='episodes__box-info__btn'>
                                  Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <FilterNotFound isNotFound={isNotFound} text="The episode has not yet been selected. Choose one to see it here"/>
        </div>  
    </div>
  )
}

export default WatchList
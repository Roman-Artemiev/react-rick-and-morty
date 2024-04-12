    // import React, { useEffect, useState } from "react";
    // import ReactPaginate from "react-paginate";
    // import ApplyTextStroke from "../ApplyTextStroke/ApplyTextStroke";

import ApplyTextStroke from "../ApplyTextStroke/ApplyTextStroke";

    // import "./style/plagination.css"

    // export default function Character(props) {
    //     const { data } = props;
    //     console.log(data)

    //     const [currentItems, setCurrentItems] = useState([]);
    //     const [pageCount, setPageCount] = useState(0);
    //     const [itemOffset, setItemOffset] = useState(0);
    //     const itemsPerPage = 20;

    //     useEffect(() => {
    //         const endOffset = itemOffset + itemsPerPage;
    //         setCurrentItems(data.slice(itemOffset, endOffset));
    //         setPageCount(Math.ceil(42 / itemsPerPage));
    //     }, [itemOffset, itemsPerPage, data])


    //     const handlePageClick = (event) => {
    //         const newOffset = (event.selected * itemsPerPage) % 42;
    //         setItemOffset(newOffset);
    //     };

    //     return (
    //         <>
    //             <div className="characters__card-wrapper">
    //                 {currentItems.map(character => {
    //                     return (
                            // <div key={character.id} id={character.id} className="characters__card">
                            //     <img src={character.image} className="characters__img" alt={character.name}/>
                
                            //     <div className="card__name-container">
                            //     <span className="card__name-line"></span>
                            //     <ApplyTextStroke text={character.name} textSize="20" className="card__name" />
                            //     <span className="card__name-line"></span>
                            //     </div>
                
                            //     <div className="card__info">
                            //     <p className="card__info-text">
                            //         <span>Location:</span> {character.location.name}
                            //     </p>
                            //     <p className="card__info-text">
                            //         <span>Species:</span> {character.species}
                            //     </p>
                            //     <p className="card__info-text">
                            //         <span>Status:</span> {character.status}
                            //     </p>
                            //     <p className="card__info-text">
                            //         <span>Gender:</span> {character.gender}
                            //     </p>
                            //     </div>
                            // </div>
    //                     );
    //                 })}
    //             </div>
    //             <ReactPaginate
    //                 breakLabel="..."
    //                 nextLabel={
    //                     <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                         <path d="M11.5221 27.5054C12.1729 28.1562 13.2283 28.1562 13.8791 27.5054L22.0248 19.3517C23.3255 18.0497 23.325 15.94 22.0237 14.6387L13.8731 6.48815C13.2223 5.83728 12.1669 5.83728 11.5161 6.48815C10.8651 7.13903 10.8651 8.1943 11.5161 8.84518L18.4921 15.8212C19.1429 16.4722 19.1429 17.5274 18.4921 18.1782L11.5221 25.1484C10.8713 25.7992 10.8713 26.8545 11.5221 27.5054Z" fill="#292929"/>
    //                     </svg>
    //                 }
    //                 onPageChange={handlePageClick}
    //                 pageRangeDisplayed={3}
    //                 pageCount={pageCount}
    //                 previousLabel={
    //                     <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                         <path d="M22.4779 6.49463C21.8271 5.8438 20.7717 5.8438 20.1209 6.49463L11.9752 14.6483C10.6745 15.9503 10.675 18.06 11.9763 19.3613L20.1269 27.5118C20.7777 28.1627 21.8331 28.1627 22.4839 27.5118C23.1349 26.861 23.1349 25.8057 22.4839 25.1548L15.5079 18.1788C14.8571 17.5278 14.8571 16.4726 15.5079 15.8218L22.4779 8.85163C23.1287 8.2008 23.1287 7.14547 22.4779 6.49463Z" fill="#292929"/>
    //                     </svg>
    //                 }
    //                 renderOnZeroPageCount={null}
    //                 containerClassName="characters__plagination"
    //                 pageLinkClassName="characters__plagination-link"
    //                 previousClassName="characters__plagination-prev characters__plagination-nav"
    //                 nextClassName="characters__plagination-next characters__plagination-nav"
    //                 activeLinkClassName="characters__plagination-active"
    //             />
    //         </>
    //     );
    // }


// function CustomPaginationButton({ page, ...props }) {
//     return (
//         <ApplyTextStroke
//         text={page}
//         strokeColor="#09B20E"
//         textColor="#BDFFA0"
//         textSize={16}
//         strokeSize="2"
//         className="yourCustomClass"
//         elementType="button"
//         elementValue={page}
//         {...props}
//         />
//     );
// }
    
// export default CustomPaginationButton;
      

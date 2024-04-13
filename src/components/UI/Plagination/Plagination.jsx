import React from 'react'
import { Pagination, PaginationItem } from '@mui/material';

import "./style/plagination.css"


const Plagination = ({ pageCount, currentPage, handleChangePage }) => {
  return (
    <div className="plagination">
    <Pagination 
      count={pageCount} // Total number of pages
      page={currentPage} // Current page
      onChange={handleChangePage} // Event handler for page change
      color="primary"
    />
</div>
  )
}

export default Plagination
import React from 'react';
import ReactPaginate from 'react-paginate';

import { IPaginationProps } from "./Pagination.types";

import './Pagination.scss';


const defaultProps = {
  containerClassName: 'pagination',
  pageClassName: 'pagination__page',
  activeClassName: 'pagination__page--active',
  pageLinkClassName: 'pagination__page-link',
  nextClassName: 'pagination__nav pagination__nav--next',
  previousClassName: 'pagination__nav pagination__nav--prev',
  breakClassName: 'pagination__break',
}
const iconNext = (
  <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.236568 11.5527C-0.0788559 11.8838 -0.0788559 12.4206 0.236568 12.7517C0.551991 13.0828 1.06339 13.0828 1.37882 12.7517L6.76343 7.0995C7.07886 6.76841 7.07886 6.23159 6.76343 5.9005L1.37882 0.248323C1.06339 -0.0827742 0.551991 -0.0827742 0.236568 0.248323C-0.0788559 0.579419 -0.0788559 1.11623 0.236568 1.44733L5.05006 6.5L0.236568 11.5527Z" fill="#33AA7E"/>
  </svg>
);
const iconPrev = (
  <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.76343 11.5527C7.07886 11.8838 7.07886 12.4206 6.76343 12.7517C6.44801 13.0828 5.93661 13.0828 5.62118 12.7517L0.236567 7.0995C-0.0788565 6.76841 -0.0788565 6.23159 0.236567 5.9005L5.62118 0.248323C5.93661 -0.0827742 6.44801 -0.0827742 6.76343 0.248323C7.07886 0.579419 7.07886 1.11623 6.76343 1.44733L1.94994 6.5L6.76343 11.5527Z" fill="#33AA7E"/>
  </svg>
);


const Pagination = (props: IPaginationProps) => {
  const {
    onChange,
    pageCount,
    pageRangeDisplayed = 1,
    marginPagesDisplayed = 2,
    forcePage,
  } = props;


  return (
    <div className='pagination__wrap'>
      <ReactPaginate
        {...defaultProps}
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        onPageChange={e => onChange(e.selected + 1)}
        forcePage={forcePage}
        nextLabel={(<>
          {iconNext}
        </>)}
        previousLabel={(<>
          {iconPrev}
        </>)}
      />
    </div>
  )
}

export default Pagination;
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import API from "../../api/api";
import { MultiLangContext } from '../../context/MultiLang/MultiLang';

import './Search.scss';
import { classModifier } from "../../utils";
import { ROUTES } from "../../config/constants";


const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const {words} = useContext(MultiLangContext);

  const [searchState, setSearchState] = useState<{
    value: string;
  }>({
    value: '',
  });

  const searchButton = (inputValue: string) => {
    if (inputValue.length === 64) {
      API.getTransaction(inputValue)
        .then(res => {
          history.push(ROUTES.setTxRoute(inputValue))
        })
        .catch(err => {
          console.log(err)
          history.push('/not-found')
        });
    } else if (inputValue.length === 40) {
      API.getAddress(inputValue, 1)
        .then(res => {
          history.push(ROUTES.setAddressRoute(inputValue))
        })
        .catch(err => {
          console.log(err)
          history.push('/not-found')
        });
    } else {
      API.getBlock(inputValue)
        .then(res => {
          history.push(ROUTES.setBlockRoute(inputValue))
        })
        .catch(err => {
          console.log(err);
          history.push('/not-found')
        });
    }
  }

  const handleChange = (e: any) => {
    const value = e.target.value.split(' ').join('');

    setSearchState(prev => ({
      ...prev,
      value: value,
    }));
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      searchButton(searchState.value)
    }
  }

  useEffect(() => {
    if (location.pathname !== '/not-found') {
      setSearchState(prev => ({
        ...prev,
        value: '',
      }));
    }
  }, [location.pathname]);


  return (
    <div className={classModifier('search',
      [(location.pathname === '/') ? 'main' : 'all'],
    )}>
      <div className="search__container">
        <div className="search-input__container">
          <input
            className='search-input'
            type="text"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={searchState.value}
            placeholder={words.searchPlaceholder}
          />

          <button
            className='search-input__button'
            onClick={() => searchButton(searchState.value)}
          >
            <span>{words.find}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context/GlobalState';
import SearchForm from './SearchFilter';

const Countries = () => {
  const { loading, searchResults, regions, allRegions, filterRegions} = useGlobalContext();
  
  if (loading) {
    return <Loading/>
  }

  return (
    <div>
      <SearchForm/>
      <select onChange={(e) => {
          filterRegions(e.target.value)
        }}
        aria-label="Filter Countries By Region"
        >
        <option value= "All" >All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        </select>
      {searchResults.map((country) => {
        const {name, population, region, capital, flag, numericCode} = country
        return (
        <article key={numericCode}>
          <Link to={`/countries/${name}` }>
            <div>
              <img src={flag} alt={name}/>
              <h3>{name}</h3>
              <h4>{population}</h4>
              <h4>{region}</h4>
              <h4>{capital}</h4>
            </div>
          </Link>
        </article>
        )
      })}
    </div>
  )
}

export default Countries;
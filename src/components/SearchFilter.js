import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import React from "react";
import { useGlobalContext } from '../context/GlobalState';
import Loading from "./Loading";

const SearchForm = () => {

  const { loading,  setSearchTerm } = useGlobalContext();

  if (loading) {
    return <Loading/>
  }

  return (
      <form onSubmit={e => e.preventDefault()}>
        {/* <input
        type="text" 
        placeholder = "Search for country"
        onChange={ e => setSearchTerm(e.target.value)}
        /> */}
        <TextField
        type="text"
        id="input-with-icon-textfield"
        placeholder="Search for country"
        onChange={ e => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
      </form>
  )
}

export default SearchForm;

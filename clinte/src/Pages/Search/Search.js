import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Search() {
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <label>
            <FontAwesomeIcon icon={faSearch} flip="horizontal" size="lg" style={{color: "#a0a8b6", marginLeft: "30px" }} />
            <input type="text" placeholder='Search...' style={{marginLeft: "10px" }} />
        </label>
    </div>
  )
}

export default Search

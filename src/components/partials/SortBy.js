import React from 'react'

const SortBy = ({ setFilter }) => {

  return(
    <div className="btn-group" role="group" >
      <button type="button" className="btn btn-secondary" onClick={() => setFilter("name")}>Name</button>
      <button type="button" className="btn btn-secondary" onClick={() => setFilter("birthday")}>Birthday</button>
      <button type="button" className="btn btn-secondary" onClick={() => setFilter("portrayer")}>Portrayer</button>
    </div>
  )
}

export default SortBy;
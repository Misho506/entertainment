import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import SortBy from "../partials/SortBy";
import { requestCharacters } from "../../redux/modules/characters";
import Character from "../partials/Character";

const HomePage = (props) => {
  const [filter, setFilter] = useState("");
  const [ characters, setCharacters ] = useState(props.characters);
  // ONLY TO SHOW 6 CHARACTERS
  const [updatedCharacters, setUpdatedCharacters] = useState(["1", "2", "3", "4", "5", "6"]);

  useEffect(() => {
    props.requestCharacters();
    setCharacters(props.characters);
  }, [])

  return (
    <div className="pt-3 pl-4">
      <h3>Sort By</h3>
      <SortBy setFilter={setFilter}/>
        {/* ONLY TO SHOW THE STATUS OF THE FILTER */}
      {/* filterBy :{filter} */}
      <div className="row justify-content-center mw-100">
        {
          updatedCharacters.map((character, index) => (
            <Character key={index}/>
          ))
        }
      </div>
      
      <button type="button" class="btn btn-secondary" onClick={() => setUpdatedCharacters([...updatedCharacters, "1", "2", "3", "4", "5", "6"])}>Load More</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    requestCharacters
  }, dispatch)
}

const mapStateToProps = (state) => ({
  characters: state.characters.characters,
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
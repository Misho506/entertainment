import React from "react";

const Character = ({img = "https://assets.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg", name, occupation, status, birthday}) => (
  <div class="card p-0 m-2 col-3 " >
    <img src={img} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
)

export default Character;
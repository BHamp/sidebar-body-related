import React from 'react';
import { PromiseProvider } from 'mongoose';

const Minidescription = (props) => {
    const genres = props.minidescription.genre.join(", ")
    const releasedate = props.minidescription.releasedate.substring(4,10) + ", " + props.minidescription.releasedate.substring(11,15)
    console.log("Minidescription props: ", props)
      return (
        <div className="sidebardesc">
          <div>
          <span id="key">TITLE:</span><span id="minidescriptionvalue"> {props.name}</span>
          </div>
          <div>
          <span id="key">GENRE:</span><span id="minidescriptionurl"> {genres}</span>
          </div>
          <div>
          <span id="key">DEVELOPER:</span><span id="minidescriptionurl"> {props.minidescription.developer}</span>
          </div>
          <div>
          <span id="key">PUBLISHER:</span><span id="minidescriptionurl"> {props.minidescription.publisher}</span>
          </div>
          <div>
          <span id="key">FRANCHISE:</span><span id="minidescriptionvalue"> {props.minidescription.franchise}</span>
          </div>
          <div>
          <span id="key">RELEASE DATE:</span><span id="minidescriptionvalue"> {releasedate}</span>
          </div>
          <br></br>
          <div>
              <div id="sidebaritems"><a href="www.google.com">Visit the website </a></div>
              <div id="sidebaritems"><a href="www.google.com">View update history </a></div>
              <div id="sidebaritems"><a href="www.google.com">Read related news </a></div>
              <div id="sidebaritems"><a href="www.google.com">View discussions </a></div>
              <div id="sidebaritems"><a href="www.google.com">Visit the Workshop </a></div>
              <div id="sidebaritems"><a href="www.google.com">Visit the website </a></div>
              <div id="sidebaritems"><a href="www.google.com">Find Community Groups </a></div>
          </div>
        </div>
      )
    }
  
export default Minidescription;
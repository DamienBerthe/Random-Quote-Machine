import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {kek} from './actions';
import { Twitter } from 'react-feather';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const randomIndex = useSelector(state => state.randomIndex);
  const dispatch = useDispatch();
  const possibleAnswers = [
    'Orkz is made fer\' two fings! Fightin\', and winnin\'!',
    'Orkses is never defeated in battle. If we win we win, if we die we die fighting so it don\'t count. If we runs for it we don\'t die neither, cos we can come back for annuver go, see!',
    'Get \'em boyz! Dakka dakka dakka! WAAAGH! THE ORKS! WAAAGH!',
    'We don\'t fight fer food, or fer teef, or guns, or cos we\'s told to fight. We fight cos we woz born to fight. And win.',
    'Humies is all weak scum that deserve ta get stomped. \'Cept for One-Eye Yarrick. He knows how ter fight.',
    'We\'re da best. Think diffrent do ya? Come and have a go then, ya runty little wimp!',
    'All Orks is equal, but some Orks are more equal dan uvvas.',
    'I am the Arch-fiend, the Despoiler of Worlds, and by my hands shall the false Emperor fall.',
    'If the path to salvation leads through the halls of purgatory, then so be it.',
    'Long shall be your suffering. Joyous be your pain.',
    'Destroy, for the sake of Destruction. Kill, for the sake of Killing.',
    'Know this! What will come to pass is no longer war! It is endless sacrifice in His name. Blood for the Blood God... let the universe drown in it!',
    'A man can be convinced to do anything, no matter how abhorrent, with the right motivation.',
    'Kill! Maim! Burn! Kill! Maim! Burn! Kill! Maim! Burn! Kill! Maim! Burn! Kill! Maim! Burn! Kill! Maim! Burn! Kill! Maim! Burn!',
    'Question: What has the Emperor ever done for me? Answer: What have you ever done for the Emperor?',
    'There is only the Emperor, and he is our Shield and Protector.',
    'Never take a gamble you’re not prepared to lose.',
    'Life’s so much easier when you’ve got someone to blame.',
    'Praise the sun that brings the dawn of our final doom.',
    'You carry the Emperor\'s will as your torch, with it destroy the shadows.',
    'I haven\'t lost an arm, brother. It\'s right over there.'
  ];
  const authors =[
    'Unknown Nob, Battle of Magna Bonum',
    'Commonly held Ork view of warfare',
    'Rotgob, Ork strategist',
    'Grukk, Ork Boy',
    'Ghazghkull Mag Uruk Thraka',
    'Gasgrakh, Goff Nob',
    'Goff Warboss Bugrat Skumdreg',
    'Abaddon the Despoiler',
    'Ahzek Ahriman of the Thousand Sons',
    'Asteroth, Daemon Prince of Slaanesh',
    'Unknow',
    'Crull, Warlord of the World Eaters',
    'First Chaplain Erebus',
    'Khârn of the World Eaters',
    'Training questions, Administration Cant and Dogma',
    'Statement of fact, Second Book of Chantings',
    'Abdul Goldberg, Rogue Trader',
    'Gilbran Quail, Collected Essays',
    'Unknow',
    'Verses of Sigismund, Book CIV, Verse I',
    'Captain Alessio Cortez, Crimson Fists'
  ];
  const answer = possibleAnswers[randomIndex]
  const x = "https://twitter.com/intent/tweet?text="+answer
  const y ='#'+(0xFFFFFFFF-Math.random()*0xFFFFFFFF).toString(16).substr(0, 6)
  return (
    <div className="App" id="quote-box">
      <div className="z" >
        <button id="new-quote" style={{backgroundColor:y}} onClick={() => dispatch(kek())}>BOOM</button>
      </div>
      <div className="z" id="text">
        <i>{answer}</i>
      </div>
      <div className="z" id="author">
        - {authors[randomIndex]}
      </div>
      <div className="z">
        <a id="tweet-quote" href={x}><button style={{backgroundColor:y} }><Twitter  size={30} /></button></a>
      </div>
    </div>
  );
}

export default App;

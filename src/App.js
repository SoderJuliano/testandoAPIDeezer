import {  Deezer }from './deezer';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  
  const [n, setn] = useState(false)

  const [hits, sethits] = useState('hits do momento')
  const [array, setArray] = useState(['teste'])
  let final = []
const fill = () =>{
  if(array.length>1){
    array.forEach(element => {
      let s = element.title
      final.push(<span>{element.title}</span>,<button id={element.title} onClick={()=>{add(s)}}>add favoritos</button>,<br/>)
    })
  }
}
  if(n===false){
    setn(true)
    var options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/playlist/1592591647',
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '0ed6c5e582mshd8c96552aa7add8p17a08djsnc5fb55485e83'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      sethits(response.data.description)
      setArray(response.data.tracks.data)
     // console.log(array)
    }).catch(function (error) {
      console.error(error);
    });
  }


  let musicas = []
  let music = [<input type="text" id="in" placeholder="nome da musica para remover" />, <button onClick={()=>removelist(document.getElementById("in").value)}>remover</button>]
  const track = () =>{
    
   document.getElementsByClassName("list")[0].innerHTML = hits
   array.forEach(element => {
    document.getElementsByClassName('list')[0].innerHTML += element.title+"<br>"
});
  
  }
const verlista = () =>{
  document.getElementsByClassName('list')[0].innerHTML = "<h1>FAVORITAS</h1>"
  document.getElementsByClassName('list')[0].innerHTML += musicas
  musicas.forEach(element => {
    console.log("el "+element)
    music.push(<p key={element}>{element}</p>)
    
  });
  
}

const removelist = (nn) =>{
 // console.log('rerr '+musicas.includes(nn))
  if(musicas.includes(nn)){
    musicas.splice(musicas.indexOf(nn), 1)
  }
  
  console.log(musicas)
  verlista()
}
const add = (m) =>{
  console.log("add "+m)
  musicas.push(m)
}
  return (
    <div className="App">
      <Deezer></Deezer>
       <button onClick={()=>{track()}}>MAIS TOCADAS</button>
       <button onClick={()=>verlista()}>ver favoritos</button>
       <div className="list">
         {fill()}
         {final}
        
       </div>
       {music}
      </div>
  );

  
}

export default App;

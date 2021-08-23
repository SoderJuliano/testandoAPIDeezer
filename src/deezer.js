import { useState } from "react";
import axios from 'axios';

const Deezer = ()=>{
   
  const pesquisar = () =>{
    var options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: document.getElementsByClassName("pes")[0].value},
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': '0ed6c5e582mshd8c96552aa7add8p17a08djsnc5fb55485e83'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          let string = ''
          response.data.data.forEach(element => {
            string += "* <a href='"+element.link+"'>"+element.title+"</a><br>"
          });
          document.getElementsByClassName("list")[0].innerHTML = string
      }).catch(function (error) {
          console.error(error);
      });
  }

  const main = () =>{

    return(
        <div>
            <input type="text" placeholder="pesquise artista que voce quer" className="pes" />
            <button onClick={()=>pesquisar()}>pesquisar</button>
        </div>
    )
  }

  const render = () =>{
      return main()
  }
  return render()
}
export {Deezer};
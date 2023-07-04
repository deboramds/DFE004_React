
 import React, { useEffect } from 'react';
 import Tmdb from './Tmdb';

 export default () => {
  
   useEffect(()=>{ //carregar o conteúdo
     const loadAll = async () => {
       //Pegando a lista TOTAL
      let list = await Tmdb.getHomeList(); //Await =>espera a requisição da api para carregar o conteúdo
      console.log(list);
     }
    
     loadAll();
   }, []);

   return (
     <div>
       Olá mundo
     </div>
  );
  }

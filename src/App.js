// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "../Login/login"; // Renomeando a importação para LoginForm
import { Home } from "../Home/home";

// Definir o componente que irá lidar com as rotas
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} /> {/* Usando o LoginForm aqui */}
        <Route path="/home" element={<Home />} />
        {/* Adicione mais rotas aqui, se necessário */}
      </Routes>
    </BrowserRouter>
  );
};

// restante do código do App.js






// //  import React, { useEffect, useState } from 'react';
//  import { AppRoutes } from './components/routes/routes';
// //  import './App.css';
// //  import Tmdb from './Tmdb';
// //  import MovieRow from './components/MovieRow';
// //  import featuredMovie from './components/featuredMovie';


// export const App = () => {
//   return <AppRoutes />;
// };





//  export default () => {

//   const[movieList, setMovieList]= useState ([]);
//   const [featuredData, setFeaturedData] = useState(null);

  
//    useEffect(()=>{ //carregar o conteúdo
//      const loadAll = async () => {
//       //  Pegando a lista TOTAL
//       let list = await Tmdb.getHomeList(); //Await =>espera a requisição da api para carregar o conteúdo
//       setMovieList(list);


//       //pegsndo o Featured
//       let originals = list.filter(i=>i.slug==='originals'); 
//       let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1)); 
//       let chosen = originals[0].items.results[randomChosen];
//       let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
//       setFeaturedData(chosenInfo);
//     }
    
//      loadAll();
//    }, []);

//    return (
//      <div className = "page">

//      {featuredData &&
//      <featuredMovie  item={featuredData} />
//      }
//       <section className="lists">
//         {movieList.map((item, key)=>(
//           <MovieRow key={key} title={item.title} items={item.items} />
//         ))}
//       </section>
//      </div>
//   );
//   }

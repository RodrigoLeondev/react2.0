import React from "react";
import EpisodeBrowser from "../../components/EpisodeBrowser/EpisodeBroser";

 function Episodes() {
   const episodeArray = [
      {
         name: 'Piloto the Simpsons',
         air_date: 'December 17, 1989',
         episode: "S01E01",
         cover_image: 'https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg'
      },
      {
         name: 'bla bla the Simpsons',
         air_date: 'December 30, 1989',
         episode: "S01E02",
         cover_image: 'https://ic.c4assets.com/brands/the-simpsons/9bf1784f-73a2-47ae-94c9-118483974839.jpg?interpolation=progressive-bicubic&output-format=jpeg'
      },
      {
         name: 'coucou the Simpsons',
         air_date: 'December 17, 1989',
         episode: "S01E03",
         cover_image: 'https://exchange4media.gumlet.io/news-photo/103970-Thesimpsons.jpg'
      },
      {
         name: 'Homer the Simpsons',
         air_date: 'December 17, 1989',
         episode: "S01E04",
         cover_image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/11/the-simpsons-exclusive-6f18b77.jpg'
      }
   ]
    return <EpisodeBrowser episodes = {episodeArray}/>
 }

 export default Episodes;
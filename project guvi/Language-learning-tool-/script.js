const lyrics = [
  { time: 0, text: "(Music plays...)" },
  { time: 17, text: "Thelimanam mazhavillin niramaniyum neram (When the sky is decorated with colors of rainbow) " },
  { time: 22, text: "Niramarnnoru kanavennil theliyunna pole (A colourful dream is blossoming in me)  " },
  { time: 26, text: "Puzhayoram thazhukunnee thanu neeran kaattum (Wind blowing through this river side)" },
  { time: 31, text: "Pulakangal izhaneythoru kuzhaloothiya pole (Is like the tunes from a flute weaved with thrill)" },
  { time: 35, text: "Kulirekum kanavil nee kathiradiya kaalam (During the time when I experienced this cool dream)" },
  { time: 40, text: "Manathaaril madhumaasam thaliraadiya neram (A spring season came to my heart)" },
  { time: 44, text: "Akamarukum mayilinakal thuyilunarum kaalam (The peacock couples are sleeping beside me wake up)" },
  { time: 48, text: "En akathaaril anuraagam pakarunna yaamam (And my inside is filled up with love)" },
  { time: 53, text: "Azhake, azhakil theerthoru shilayazhake (O beauty, you are like a beautiful sculpture)" },
  { time: 61, text: "Malare, ennuyiril vidarum panimalare (O flower. You are the rose flower blossoming inside me)" }, 
  { time: 72 , text: "(Music plays...)" }, 
  { time: 105 , text: "Malare ninne kaanathirunnal (Flower, in your absence all the colors)" },
  { time: 109, text: "Mizhivekiya niramellam maayunna pole (Which decorated me are fading off)" },
  { time: 114, text: "Alivoden arikathinnanayathirunnal (If you are not showing mercy to come beside me) " },
  { time: 118, text: "Azhakekiya kanavellam akalunna pole (All the beautiful dreams are going away the beats and rhythms)" },
  { time: 122, text: "Njanente aathmavin aazhathinullil (Which I have kept deep inside my soul tenderly)." },
  { time: 135.5, text: "Athilolamarorumariyaathe sookshicha Thaalangal raagangal eenangalaai Oro oro varnangalai (Without anyone's knowledge are coming out as tunes and colors)" },
  { time: 140, text: "Idarunna ennte idanenjinullil (You are raining inside my broken heart)" },
  { time: 145, text: "Pranayathin mazhayayi nee pozhiyunnee naalil (As a romantic rain this beautiful day)" },
  { time: 149.5, text: "Thalarunnorente thanuthorum ninte (Flower, my tiring body is waking up)" },
  { time: 153, text: "Alathallum pranayathalunarum (Because of your lashing love)" },
  { time: 156.5, text: "Malare, azhake. (O beauty)" },
  { time: 166 , text: "(Music plays...)" }, 
  { time: 236.5, text: "Kulirekum kanavil nee kathiradiya kaalam (During the time when I experienced this cool dream)" },
  { time: 240.5, text: "Manathaaril madhumaasam thaliraadiya neram (A spring season came to my heart)" },
  { time: 245, text: "Akamurukum mayilinakal thuyilunarum kaalam (The peacock couples sleeping inside me wake up..." },
  { time: 250, text: "En akathaaril anuraagam pakarunna yaamam (And my inside is filling up with love)" },
  { time: 254.4, text: "Azhake, azhakil theerthoru shilayazhake (O beauty, you are like a beautiful sculpture)" },
  { time: 262, text: "Malare, ennuyaril vidarum panimalare (O flower, you are the rose flower blossoming inside me)" },      
  { time: 274 , text: "(Music plays...)" },
  // Add more lines as needed
];

const audio = document.getElementById('audio');
const lyricsDiv = document.getElementById('lyrics');

audio.addEventListener('timeupdate', () => {
  const currentTime = Math.floor(audio.currentTime);
  const currentLyric = lyrics.find(lyric => lyric.time === currentTime);
  if (currentLyric) {
    lyricsDiv.textContent = currentLyric.text;
  }
});

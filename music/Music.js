const content = [
    {
      id: "1",
      song: "music/song1.mp3",
      image: "img/img1.jpg",
      artist: "sherry Mann",
      title: "3 peg la ka",
    },
    {
      id: "2",
      song: "music/song2.mp3",
      image: "img/img2.jpg",
      artist: "Sartaj",
      title: "Auzzar",
    },
    {
      id: "3",
      song: "music/song3.mp3",
      image: "img/img3.jpg",
      artist: "Ranjit bawa",
      title: "Ni jinde",
    },
    {
      id: "4",
      song: "music/song4.mp3",
      image: "img/img4.jpg",
      artist: "Imran khan",
      title: "Satisfiy",
    },
    {
      id: "5",
      song: "music/song5.mp3",
      image: "img/img5.jpg",
      artist: "Sartaj",
      title: "udarrian",
    },
    {
      id: "6",
      song: "music/song6.mp3",
      image: "img/img6.jpg",
      artist: "Sartaj",
      title: "Vaar",
    },
    {
      id: "7",
      song: "music/song7.mp3",
      image: "img/img7.jpg",
      artist: "Sartaj",
      title: "zafarnama",
    },
    {
      id: "8",
      song: "music/song8.mp3",
      image: "img/img10.jpg",
      artist: "Sidhu",
      title: "Dollar",
    },
    {
      id: "9",
      song: "music/song9.mp3",
      image: "img/img11.jpg",
      artist: "Sidhu",
      title: "Game",
    },
    {
      id: "10",
      song: "music/song10.mp3",
      image: "img/img14.jpg",
      artist: "A Gill",
      title: "Diwanapan",
    },
    {
      id: "11",
      song: "music/song11.mp3",
      image: "img/img9.jpg",
      artist: "diljit",
      title: "High End",
    },
    {
      id: "12",
      song: "music/song12.mp3",
      image: "img/img8.jpg",
      artist: "Sukbir",
      title: "Ishq",
    },
    {
      id: "13",
      song: "music/song13.mp3",
      image: "img/img13.jpg",
      artist: "A Gill",
      title: "Kurta",
    },
    {
      id: "14",
      song: "music/song14.mp3",
      image: "img/img12.jpg",
      artist: "Punjab",
      title: "Niraml S",
    },
    {
      id: "15",
      song: "music/song15.mp3",
      image: "img/img15.jpg",
      artist: "K.S M",
      title: "Jatt",
    },
  ];
  
  const playbtn = document.querySelector(".play");
  const nextbtn = document.querySelector(".next");
  const prevbtn = document.querySelector(".prev");
  const cover = document.getElementById("cover-img");
  const singer = document.querySelector(".singer");
  const musictitle = document.querySelector(".mysong");
  const fontsbox = document.querySelector(".fonts");
  const Music = document.querySelector("#audio");
  const fontbtn = document.querySelector(".fa-circle-play");
  
  let currentsong = 0;
  // setting funtion for setting object elements
  const setcontent = (data) => {
    singer.innerHTML = data.artist;
    Music.src = data.song;
    cover.src = data.image;
    musictitle.innerHTML = data.title;
  };
  
  setcontent(content[currentsong]);
  
  // taking a funtion for pause class
  function pause() {
    fontbtn.classList.remove("fa-circle-play");
    fontbtn.classList.add("fa-circle-pause");
  }
  
  // for playing song
  playbtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-circle-play")) {
      Music.play();
      pause();
    } else {
      Music.pause();
      fontbtn.classList.remove("fa-circle-pause");
      fontbtn.classList.add("fa-circle-play");
    }
  });
  
  // putting funtionalty next button
  nextbtn.addEventListener("click", () => {
    currentsong++;
    pause();
    if (currentsong > content.length - 1) {
      currentsong = 0;
    }
    setcontent(content[currentsong]);
    Music.play();
  });
  // putting funtionalty prev button
  
  prevbtn.addEventListener("click", () => {
    currentsong--;
    pause();
    if (currentsong < 0) {
      currentsong = content.length - 1;
    }
    setcontent(content[currentsong]);
    Music.play();
  });
  
  // part 2
  // working on song box adding more songs in box
  
  const songsbox = document.querySelector(".songs");
  
  function setsongs(datas) {
    const settingdata = datas.map((items) => {
      const { song, image, artist, title } = items;
      return `<div class="mp3-box">
      <audio id="audio" src=${song}></audio>
      <div class="pics">
          <img src=${image} id="mp3-img" alt="cover-pic">
      </div>
      <div class="artist">${artist}</div>
      <div class="song-title">
         ${title}
      </div>
      <div class="play-font">
         <i class="fa-solid fa-play"></i>
      </div>
      </div>
      </div>`;
    });
    const settingsong = settingdata.join("");
    songsbox.innerHTML += settingsong;
  
    const songs = document.querySelectorAll('.mp3-box');
    
    songs.forEach((song) =>{
      const mysongs=song.firstElementChild
      const addsongs=mysongs.src.slice(22)

      // for image
      const img=mysongs.nextElementSibling
      const imgcover =img.firstElementChild.src.slice(22)

      // for artist name
      const artist = img.nextElementSibling
      const artistName = artist.innerHTML
      

      // for title
      const title = artist.nextElementSibling
      const songtitle = title.innerHTML

      // for font

      const font=title.nextElementSibling
      console.log(font)

    song.addEventListener('click', (e) =>{
      Music.src=addsongs;
      cover.src=imgcover;
      musictitle.innerHTML = songtitle;
      singer.innerHTML = artistName;
      font.classList.add("coverrotate");

      fontbtn.classList.remove("fa-circle-play");
      fontbtn.classList.add("fa-circle-pause");

      Music.play();
    })
      
    })





// const playfonts = document.querySelectorAll(".play-font");
//     playfonts.forEach((element) => {
//       const mysongs = element.previousElementSibling.src;
//       const addsongs = mysongs.slice(0,22);
//       const myimg = element.parentElement.parentElement.firstElementChild.firstElementChild.src;
//       const addimg = myimg.slice(22);
//       const addtitle = element.parentElement.previousElementSibling.innerHTML;
//       const addartist =element.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML;
//       element.addEventListener("click", () => {
//         element.classList.add("coverrotate");
//         Music.src = addsongs;    
//         cover.src = addimg;
//         musictitle.innerHTML = addtitle;
//         singer.innerHTML = addartist;
//         fontbtn.classList.remove("fa-circle-play");
//         fontbtn.classList.add("fa-circle-pause");
  
//         Music.play();
//       });
//       });

    ;
  }
  
  // working on progress bar with timeupdate
  const progresser = document.querySelector(".progresser");
  const totaltime = document.querySelector(".total-time");
  const runningtimeduration = document.querySelector(".running-time");
  
  Music.addEventListener("timeupdate", function (event) {
    const { currentTime, duration } = event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progresser.style.width = `${progress_time}%`;
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    if (sec_duration < 10) {
      sec_duration = `0${sec_duration}`;
    }
    let songduration = `${min_duration}:${sec_duration}`;
  
    if (duration) {
      totaltime.textContent = songduration;
    }
    // working with running time
  
    let min_currenttime = Math.floor(currentTime / 60);
    let sec_currenttime = Math.floor(currentTime % 60);
    if (sec_currenttime < 10) {
      sec_currenttime = `0${sec_currenttime}`;
    }
    let runingduration = `${min_currenttime}:${sec_currenttime}`;
    if (currentTime) {
      runningtimeduration.textContent = runingduration;
    }
  });
  
  // working with progress bar
  const progressbar = document.querySelector(".progresser-box");
  progressbar.addEventListener("click", (event) => {
    const { duration } = Music;
    const progresstime =(event.offsetX / event.srcElement.clientWidth) * duration;
    Music.currentTime = progresstime;
  });
  
  setsongs(content);
  
  
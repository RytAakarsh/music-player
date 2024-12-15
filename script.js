const music = new Audio('./Musics/1.mp3');
music.addEventListener('canplaythrough', () => {
    console.log("Audio loaded successfully.");
}, false);
music.addEventListener('error', () => {
    console.error("Error loading audio:", music.error);
}, false);
// music.play();

const songs = [
    {
        id : "1",
        songName: `Mere Dholna 3.0 <br>
                <div class="subtitle">Singer-Sonu Nigam
                </div>`,
        poster: "https://c.saavncdn.com/713/Mere-Dholna-3-0-Sonu-Nigam-Version-From-Bhool-Bhulaiyaa-3-Hindi-2024-20241104131003-500x500.jpg"

    },
    {
        id : "2",
        songName: `Ami Je Tomar <br>
                        <div class="subtitle">Singer-Amaal | Shreya
                        </div>`,
        poster: "https://c.saavncdn.com/443/Bhool-Bhulaiyaa-3-Hindi-2024-20241108131003-500x500.jpg"

    },
    {
        id : "3",
        songName: `Ik Bagal <br>
                                        <div class="subtitle">Singer-Piyush Mishra 
                                        </div>`,
        poster: "https://c.saavncdn.com/426/Gangs-Of-Wasseypur-Hindi-2012-20221212051137-500x500.jpg"

    },
    {
        id : "4",
        songName: `Ye Tuney Kya Kiya <br>
                                                                            <div class="subtitle">Singer-Javed Bashir | Pritam 
                                                                            </div>`,
        poster: "https://c.saavncdn.com/243/Once-Upon-A-Time-In-Mumbaai-Dobara-2013-500x500.jpg"

    },
    {
        id : "5",
        songName: `Zaalima <br>
        <div class="subtitle">Singer-Arijit Singh | Harshdeep Kaur
        </div>`,
        poster: "https://c.saavncdn.com/334/Raees-Hindi-2016-20200430093124-500x500.jpg"

    },
    {
        id : "6",
        songName: `Neele Neele Ambar Par <br>
        <div class="subtitle">Singer-Kalyanji | Anandji | Kishore 
        </div>`,
        poster: "https://c.saavncdn.com/310/Kalaakaar-Hindi-2016-20170918062425-500x500.jpg"

    },
    {
        id : "7",
        songName: `Ishq-Lost Found <br>
                                            <div class="subtitle">Singer-Ameer | faheem | Rauhan 
                                            </div>`,
        poster: "https://c.saavncdn.com/306/Lost-Found-Hindi-2024-20240517153134-500x500.jpg"

    },
    // {
    //     id : "8",
    //     songName: `Ishq-Lost Found <br>
    //                                         <div class="subtitle">Singer-Ameer | faheem | Rauhan 
    //                                         </div>`,
    //     poster: "https://c.saavncdn.com/306/Lost-Found-Hindi-2024-20240517153134-500x500.jpg"

    // },
    {
        id : "1",
        songName: `Mere Dholna 3.0 <br>
                <div class="subtitle">Singer-Sonu Nigam 
                </div>`,
        poster: "https://c.saavncdn.com/713/Mere-Dholna-3-0-Sonu-Nigam-Version-From-Bhool-Bhulaiyaa-3-Hindi-2024-20241104131003-500x500.jpg"

    },
    {
        id : "8",
        songName: `Aaj Bhi<br>
                    <div class="subtitle">Singer-Vishal Mishra 
                    </div>`,
        poster: "https://c.saavncdn.com/710/Aaj-Bhi-Hindi-2020-20200407000137-500x500.jpg"

    },
    {
        id : "2",
        songName: `Ami Je Tomar <br>
                        <div class="subtitle">Singer-Amaal | Shreya
                        </div>`,
        poster: "https://c.saavncdn.com/443/Bhool-Bhulaiyaa-3-Hindi-2024-20241108131003-500x500.jpg"

    },
    {
        id : "9",
        songName: `Aarambh <br>
                            <div class="subtitle">Singer-Piyush Mishra 
                            </div>`,
        poster: "https://c.saavncdn.com/317/Gulaal-Hindi-2009-20221125215618-500x500.jpg"

    },
    {
        id : "10",
        songName: `The Nights(Avicii) <br>
                                <div class="subtitle">Singer-Avicii 
                                </div>`,
        poster: "https://c.saavncdn.com/184/The-Nights-Avicii-By-Avicii-English-2014-20240126224231-500x500.jpg"

    },
    {
        id : "12",
        songName: `Baghon Mein Bahar Hai <br>
                                    <div class="subtitle">Singer-Mohammed Rafi | Lata Mangeshkar 
                                    </div>`,
        poster: "https://c.saavncdn.com/951/Aradhana-Hindi-1969-500x500.jpg"
    },
    {
        id : "3",
        songName: `Ik Bagal <br>
                                        <div class="subtitle">Singer-Piyush Mishra 
                                        </div>`,
        poster: "https://c.saavncdn.com/426/Gangs-Of-Wasseypur-Hindi-2012-20221212051137-500x500.jpg"

    },
    {
        id : "7",
        songName: `Ishq-Lost Found <br>
                                            <div class="subtitle">Singer-Ameer | faheem | Rauhan 
                                            </div>`,
        poster: "https://c.saavncdn.com/306/Lost-Found-Hindi-2024-20240517153134-500x500.jpg"

    },
    {
        id : "13",
        songName: `Kisi Ki Muskurahaton Se <br>
                                            <div class="subtitle">Singer- Sankar ft. Mukesh
                                            </div>`,
        poster: "https://c.saavncdn.com/428/Anari-Hindi-1975-20200919143923-500x500.jpg"
    },
    {
        id : "14",
        songName: `Mere Mahboob Qayamaat Hogi <br>
                                                <div class="subtitle">Singer-Kishore Kumar 
                                                </div>`,
        poster: "https://c.saavncdn.com/550/Mr-X-In-Bombay-Hindi-1964-20200901153955-500x500.jpg"

    },
    {
        id : "15",
        songName: `Mere Samnevali Khidki Mein <br>
                                                    <div class="subtitle">Singer-R.D.Burman ft. Kishore Kumar 
                                                    </div>`,
        poster: "https://c.saavncdn.com/654/Padosan-Hindi-1968-500x500.jpg"

    },
    {
        id : "16",
        songName: `Millionaire <br>
                                                        <div class="subtitle">Singer-Yo Yo Honey Singh 
                                                        </div>`,
        poster: "https://c.saavncdn.com/173/GLORY-Hindi-2024-20240926151002-500x500.jpg"

    },
    {
        id : "6",
        songName: `Neele Neele Ambar Par <br>
                                                            <div class="subtitle">Singer-Kalyanji | Anandji | Kishore 
                                                            </div>`,
        poster: "https://c.saavncdn.com/310/Kalaakaar-Hindi-2016-20170918062425-500x500.jpg"

    },
    {
        id : "17",
        songName: `Sajni <br>
                                                                <div class="subtitle">Singer-Arijit Singh
                                                                </div>`,
        poster: "https://c.saavncdn.com/252/Laapataa-Ladies-Hindi-2024-20241104085935-500x500.jpg"

    },
    {
        id : "18",
        songName: `Ud Jayega Hans Akela <br>
                                                                    <div class="subtitle">Singer-Divya Kumar | Ravi Ra 
                                                                    </div>`,
        poster: "https://c.saavncdn.com/830/Kota-Factory-Season-3-Music-from-the-Netflix-Series-Hindi-2024-20240612131217-500x500.jpg"

    },
    {
        id : "19",
        songName: `Uptown Funk <br>
                                                                        <div class="subtitle">Singer-Mark Ronson ft. Bruno Mars, Jeff Bhasker 
                                                                        </div>`,
        poster: "https://c.saavncdn.com/049/Uptown-Funk-English-2014-500x500.jpg"

    },
    {
        id : "4",
        songName: `>Ye Tuney Kya Kiya <br>
                                                                            <div class="subtitle">Singer-Javed Bashir | Pritam 
                                                                            </div>`,
        poster: "https://c.saavncdn.com/243/Once-Upon-A-Time-In-Mumbaai-Dobara-2013-500x500.jpg"

    },
    {
        id : "20",
        songName: `Ye Jo Mohabbat Hai <br>
                                                                                <div class="subtitle">Singer-R.D.Burman ft. KIshore Kumar 
                                                                                </div>`,
        poster: "https://c.saavncdn.com/715/Kati-Patang-Hindi-1970-500x500.jpg"

    },
    {
        id : "5",
        songName: `Zaalima <br>
                                                                                    <div class="subtitle">Singer-Arijit Singh | Harshdeep Kaur
                                                                                    </div>`,
        poster: "https://c.saavncdn.com/334/Raees-Hindi-2016-20200430093124-500x500.jpg"
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', ()=>{
    if ( music.paused || music.currentTime <= 0 ){
        music.play();
        wave.classList.add('active1');
        console.log('active1 class added');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        masterPlay.style.color = '#fcfcfd';
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        masterPlay.style.color = '#fafafa';
    }
})

let index = 0;
let poster_master_play = document.getElementById('poster-master-play');
let title = document.getElementById('title'); 
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click',(el) => {
        index = el.target.id;
        console.log(index);
        music.src = `Musics/${index}.mp3`;
        poster_master_play.src = `images/${index}.jpg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        masterPlay.style.color = '#fcfcfd';

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        })

    })
})
































let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop-song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
});

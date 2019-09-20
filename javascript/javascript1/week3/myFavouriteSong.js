const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

function addSongToDatabase(song) {
    songDatabase.push(song);
    return songDatabase;
}
console.log(addSongToDatabase({ songId:5,title: 'November Rains',artist: 'Guns and Roses',}));

//Adding song of same title (Optional)
console.log(addSongToDatabase({ songId:6,title: 'November Rains',artist: 'Mc Kelly',}));


function getSongByTitle(title) {
    const songByTitle = [];
    for(let i=0;i<songDatabase.length;i++) {
        if(songDatabase[i].title === title) {
            songByTitle.push(songDatabase[i]);
        }
    }
    return songByTitle;
}

const searchSong = getSongByTitle('November Rains');
console.log(searchSong);

const myPlaylist = [];
const myPlaylist01 = [];

function addSongToMyPlaylist(title) {
    myPlaylist.push(getSongByTitle(title));
    console.log(myPlaylist); // [{ songId: 2, title: '3 nails in wood', artist: 'The carpenters' }]
}

addSongToMyPlaylist('3 nails in wood');
addSongToMyPlaylist('Blacker than black');

function addSongToPlaylist(title, playlist) {
    playlist.push(getSongByTitle(title));
    console.log(playlist);
}

addSongToPlaylist('3 nails in wood', myPlaylist01);
addSongToPlaylist('My baby', myPlaylist);
const api_key = '9d20fc2a502b1b5e4281053dfd273a6a';

const requests = {
    trending: `/trending/all/day?api_key=${api_key}`,
    netflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    actionMovies: `/disover/movie?api_key=${api_key}&with_genres=28`,
    comedyMovies: `/disover/movie?api_key=${api_key}&with_genres=35`,
    horrorMovies: `/disover/movie?api_key=${api_key}&with_genres=27`,
    romanceMovies: `/disover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentriesMovies: `/disover/movie?api_key=${api_key}&with_genres=99`,
}

export default requests;
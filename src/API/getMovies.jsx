const key = import.meta.env.VITE_API_KEY;

export async function getTopRatedShows(){
    const movies = await fetch("https://api.themoviedb.org/3/trending/tv/week?api_key="+key);
    return movies;
}

export async function getTopRatedMovies(){
    const movies = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key="+key);
    return movies;
}

export async function getFantasyTvShows(){
    const shows = await fetch("https://api.themoviedb.org/3/discover/tv?api_key="+key+"&with_genres=10765");
    return shows;
}

export async function searchMovies(title){
    const movies = await fetch("https://api.themoviedb.org/3/search/multi?api_key="+key+"&query="+title);
    return movies;
}
import axios from 'axios';
const API_KEY = '7a92417a5af1e8667d171d8c5ef3af4e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


export async function fetchTrending() {
  try {

    const { data } = await axios('trending/movie/day', {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    });

    return data.results;
  } catch (error) {
    console.log(error);
  }
}

 export async function fetchMoviesByKeyword() {
  try {
    // Loading.pulse({
    //   svgColor: 'orange',
    // });
    const { data } = await axios('search/movie', {
      params: {
        api_key: API_KEY,
        query: this.searchQuery,
      },
    });
    return data.results; //returns an OBJECT. e.g.{page: 1, results: Array(20), total_pages: 8, total_results: 147}
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieById(movieId) {
  //will throw an error if title "undefined";
  try {
    const { data } = await axios(`movie/${movieId}`, {
      //for this to work make sure this.searchQuery type is number!!!
      params: {
        api_key: API_KEY,
      
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}


export async function fetchReviews(movieId){
    try{
    const { data } = await axios(`movie/${movieId}/reviews`, {
        //for this to work make sure this.searchQuery type is number!!!
        params: {
          api_key: API_KEY,
        
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
}

export async function fetchCast(movieId){
    try{
        const { data } = await axios(`movie/${movieId}/credits`, {
            //for this to work make sure this.searchQuery type is number!!!
            params: {
              api_key: API_KEY,
            
            },
          });
          return data;
        } catch (error) {
          console.log(error);
        }
}
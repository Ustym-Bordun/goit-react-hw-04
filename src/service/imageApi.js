import axios from 'axios';

const fetchPhotos = async (query, currentPage) => {
  const responce = await axios.get('/search/photos', {
    baseURL: 'https://api.unsplash.com/',
    params: {
      query: query,
      page: currentPage,
      per_page: '12',
      client_id: 'VlEOoqHux4msB1K3BSCBdDN30mYrRhlLAmkTeHKIeSs',
    },
  });

  // console.log(responce);
  return responce.data;
};

export default fetchPhotos;

/* 
https://api.unsplash.com/
/search/photos

?client_id=WlhDx3QJGuL7onPljCL9sGWrZc0RmZS4gyH8bwfSx9A
?client_id=VlEOoqHux4msB1K3BSCBdDN30mYrRhlLAmkTeHKIeSs
*/

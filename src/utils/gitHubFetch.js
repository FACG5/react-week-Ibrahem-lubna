const checkResponse = response => {  
    if (response.status !== 200) {
      console.log(`Error with the request! ${response.status}`);
      return;
    }
    return response.json();
  };
  
  export const getUserData = link => {      
    return fetch(link)
      .then(checkResponse)
      .catch(err => {
        throw new Error(`fetch getUserData failed ${err}`);
      });
  };
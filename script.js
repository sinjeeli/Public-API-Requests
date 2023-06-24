console.log('hello world');
//

function fetchData(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((error) => console.log('Error:', error));
  }

  

  
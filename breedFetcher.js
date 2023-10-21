const request = require('request');

const BASE_URL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = (breedName, callback) => {
  request(BASE_URL + breedName, (error, response, body) => {
  // Check for request errors
    if (error) {
      callback(`Failed to fetch breed details: ${error}`, null);
      return;
    }

    const data = JSON.parse(body);

    // Check if the breed is not found
    if (data.length === 0) {
      callback(`Could not find breed: ${breedName}`, null);
      return;
    }

    // Extract and return the breed description
    const breed = data[0];
    callback(null, breed.description);
  });
};


fetchBreedDescription('Siberian', (error, description) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log(description);
  }
});

import Ember from 'ember';


export default Ember.Route.extend({

    model() {
      return fetch('http://localhost:8080/stacks', {
        method: 'GET',
        mode: 'cors', // Set the mode to 'cors' to enable cross-origin requests
        headers: {
          'Content-Type': 'application/json',
          'crossorigin': 'http://localhost:4200/' // Add your crossorigin attribute here
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          throw error;
        });
    }
});



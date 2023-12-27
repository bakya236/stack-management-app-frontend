import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        console.log(params);
        var stackId = params.stack_id;
        console.log(stackId)

        return fetch(`http://localhost:8080/usagehistory/${stackId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
          });
      }

});

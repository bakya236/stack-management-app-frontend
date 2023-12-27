import Ember from 'ember';
//import {get, set } from '@ember/object';

export default Ember.Controller.extend({
  isEmailPopupOpen: false,
  email: '',

  actions: {
    openEmailPopup() {
      this.set('isEmailPopupOpen', true);
    },

    closeEmailPopup() {
      this.set('isEmailPopupOpen', false);
    },

    verifyEmail() {
      if (this.email.trim() !== '') {
      localStorage.setItem('email', this.email);
      this.set('isEmailPopupOpen', false); 
      this.set('email', ''); 
    }else {
      alert('Please enter a valid email');
    }
    }}
});

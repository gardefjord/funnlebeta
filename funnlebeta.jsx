// Define a collection to hold our tasks
Links = new Mongo.Collection("links");

if (Meteor.isClient) {
  // This code is executed on the client only
 Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
 
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}
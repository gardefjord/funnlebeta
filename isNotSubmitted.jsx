IsNotSubmitted = React.createClass({

  handleSubmit(event) {

    event.preventDefault();
    var thisWeek = moment().isoWeek();
    // Find the text fields via the React ref
    var url = ReactDOM.findDOMNode(this.refs.linkInput).value.trim();
    var desc = ReactDOM.findDOMNode(this.refs.descInput).value.trim();

    Links.insert({
      url: url,                       // the ULR
      desc: desc,                       // description of the link
      createdAt: thisWeek,            // current week
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username  // username of logged in user
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.linkInput).value = "";
    ReactDOM.findDOMNode(this.refs.descInput).value = "";
  },

  render() {
    return (
        <div className="addLink">
          <p>Add your link for next week here:</p>
          <form className="new-link" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="linkInput"
              required="required"
              placeholder="Type to add a new link" />
            <input
              type="text"
              ref="descInput"
              required="required"
              placeholder="Type to add a description to your link" />
            <input 
              type="submit" 
              value="Submit" />
          </form>

        </div>
    );
  }
});
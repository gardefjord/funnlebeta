// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
 
  // Loads items from the Links collection and puts them on this.data.links
  getMeteorData() {
    return {
      links: Links.find({}).fetch(),
      incompleteCount: Links.find({checked: {$ne: true}}).count(),
      currentUser: Meteor.user()
    }
  },
 
  renderLinks() {
    // Get links from this.data.links
    var isAddedLink = Links.findOne({owner: Meteor.userId()}, {sort: {created: -1}});
    console.log(isAddedLink);
    if(isAddedLink === undefined){
      return <div>You haven't submitted any links yet :(</div>
    } else {
      return this.data.links.map((link) => {
        return <Link key={link._id} link={link} />;
      });
    }
    
  },


 
  render() {
    return (
      <div className="container">
        <header>

          <h1>Funnle</h1>

          <AccountsUIWrapper />

        </header>

        { this.data.currentUser ?

        <div className="container">

          <AddLink />

          <div className="user__links">
            <p>Here are your old links:</p>
            <ul>
              {this.renderLinks()}
            </ul>

          </div>

        </div> : ''
        }
      </div>
    );
  }
});
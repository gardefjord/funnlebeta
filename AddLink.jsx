// Link component - represents a single todo item
AddLink = React.createClass({

  canSubmitLink() {

    var thisWeek = moment().isoWeek();

    var latestAddedLink = Links.findOne({owner: Meteor.userId()}, {sort: {created: -1}});

    if(latestAddedLink === undefined){
      return <IsNotSubmitted />;

    } else {
      var latestWeek = latestAddedLink.createdAt;

      if( latestWeek === thisWeek){
        console.log("isSubmitted");
        return <IsSubmitted />;
        
      } else {
        console.log("isNotSubmitted");
        return <IsNotSubmitted />;
        
      }
    }
    
  },
  

  render() {
    return (
        <div>{this.canSubmitLink()}</div>
    );
  }
});

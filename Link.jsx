// Link component - represents a single todo item
Link = React.createClass({
  propTypes: {
    // This component gets the link to display through a React prop.
    // We can use propTypes to indicate it is required
    link: React.PropTypes.object.isRequired
  },
  deleteThisLink() {
    var answer = confirm("Do you really want to delete this link?")
    if(answer == true){
      Links.remove(this.props.link._id);
    } else {
      return;
    };
  },
  render() {
    return (
      <li>
        <span className="text">
          <p><strong>{this.props.link.username}</strong></p>
          <p>
            URL: <a href="{this.props.link.url}">{this.props.link.url}</a> 
            <br />
{/*            <span>Added: {this.props.link.createdAt}</span>
*/}          </p>
          <p>Description: {this.props.link.desc}</p>
          <p>createdAt:week {this.props.link.createdAt}</p>
          <p>owner: {this.props.link.owner}</p>
          <p>username: {this.props.link.username}</p>

        </span>
        <button className="delete" onClick={this.deleteThisLink}>
          delete this link
        </button>
      </li>
    );
  }
});
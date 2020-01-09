import React from "react";
import { connect } from "react-redux";

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }
  onChange = e => {
    this.setState({ url: e.target.value });
  };
  addPlaylist = () => {
    this.props.dispatch({ type: "UpdateState", payload: this.state.url });
    this.setState({ url: "" });
  };
  getVideoId = () => {
    const links = this.props.Links;
    const id =
      links.length &&
      links[links.length - 1].substring(
        links[links.length - 1].indexOf("=") + 1
      );
    return id;
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="url"
          pattern="https://.*"
          size="30"
          placeholder="Enter Url"
          value={this.state.url}
          onChange={this.onChange}
        />
        <button onClick={this.addPlaylist}>Add</button>
        <div>
          {this.props.Links.map(link => (
            <p>{link}</p>
          ))}
        </div>
        <div>
          <iframe
            width="420"
            height="345"
            src={`https://www.youtube.com/embed/${this.getVideoId()}`}
          ></iframe>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(CreatePlaylist);

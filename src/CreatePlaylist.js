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
  addPlaylist = e => {
    e.preventDefault();
    this.props.dispatch({ type: "URL_ADDED", payload: this.state.url });
    this.setState({ url: "" });
  };
  getVideoId = () => {
    const links = this.props.Links;
    const linkId =
      links.length &&
      links[links.length - 1].substring(
        links[links.length - 1].indexOf("=") + 1
      );
    return linkId;
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addPlaylist}>
          <input
            type="url"
            style={{ height: "30px", width: "30%" }}
            placeholder="Enter-Url"
            pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
            value={this.state.url}
            onChange={this.onChange}
          />
          <button type="submit" style={{ height: "36px" }}>
            Add
          </button>
        </form>
        <div>
          <h1 style={{ color: "silver" }}>Playlist</h1>
          <hr style={{ width: "34%" }} />
          {this.props.Links.map(link => (
            <ul>{link}</ul>
          ))}
        </div>
        <div>
          <h1 style={{ color: "silver" }}>VideoPlayer</h1>
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

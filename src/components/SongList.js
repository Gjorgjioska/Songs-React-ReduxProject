import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    return <h1>SongList</h1>;
  }
}

export default connect()(SongList);

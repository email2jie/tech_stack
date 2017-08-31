import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import ListItem from './ListItem.js';

class LibraryList extends Component {
  componentWillMount() {
    //ListView setup
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library){
    return <ListItem library={library}/>;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);

//connect helper is called then returns a function, that function is immediately called again by LibraryList

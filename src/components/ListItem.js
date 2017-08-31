import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListView extends Component {

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    console.log(this.props);

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
      )
}
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }

};

const mapStateToProps = state => {
  return { selection: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListView);
//connect first param maps state to props, second params binds action to component as props

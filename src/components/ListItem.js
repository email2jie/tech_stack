import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListView extends Component {
  componentWillUpdate() {
    const CustomLayoutAnimation = {
      duration: 50,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.curveEaseInEaseOut,
      },
    };

    LayoutAnimation.configureNext(CustomLayoutAnimation);
  }
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
        );
}
  }

render() {
  const { titleStyle } = styles;
  const { id, title } = this.props.library;
  const { expanded, selectLibrary } = this.props;

  return (
    <TouchableWithoutFeedback
      onPress={() => { expanded ? selectLibrary(null) : selectLibrary(id)}} //toggle description
    >
      <View>
        <CardSection>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
        {this.renderDescription()}

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

const mapStateToProps = (state, ownProps) => { //ownProps is the props of the component
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListView);
//connect first param maps state to props, second params binds action to component as props

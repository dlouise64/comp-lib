import React from 'react';
import renderer from 'react-test-renderer';
import COMPONENT_NAME from 'DIR';

test('<COMPONENT_NAME /> renders correctly', () => {
  const tree = renderer.create(<COMPONENT_NAME />).toJSON();
  expect(tree).toMatchSnapshot();
});

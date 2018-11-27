import React from 'react';
import renderer from 'react-test-renderer';
import Well from './Well';

test('<Well /> renders correctly', () => {
  const tree = renderer.create(<Well />).toJSON();
  expect(tree).toMatchSnapshot();
});

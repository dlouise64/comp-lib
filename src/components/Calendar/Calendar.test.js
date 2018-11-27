import React from 'react';
import renderer from 'react-test-renderer';
import Calendar from './Calendar';

test('<Calendar /> renders correctly', () => {
  const tree = renderer.create(<Calendar />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label';

test('<Label /> renders correctly', () => {
  const tree = renderer.create(<Label
    htmlFor="my_label"
    label="Sign in"
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('<Button /> renders correctly', () => {
  const tree = renderer.create(<Button
    message="I am a button"
    size="medium" />).toJSON();
  expect(tree).toMatchSnapshot();
});

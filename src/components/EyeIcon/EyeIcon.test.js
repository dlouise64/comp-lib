import React from 'react';
import renderer from 'react-test-renderer';
import EyeIcon from './EyeIcon';

test('<EyeIcon /> renders correctly', () => {
  const tree = renderer.create(<EyeIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import Separator from './Separator';

test('<Separator /> renders correctly', () => {
  const tree = renderer.create(<Separator />).toJSON();
  expect(tree).toMatchSnapshot();
});

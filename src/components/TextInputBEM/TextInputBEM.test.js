import React from 'react';
import renderer from 'react-test-renderer';
import TextInputBEM from './TextInputBEM';

test('<TextInputBEM /> renders correctly', () => {
  const tree = renderer.create(<TextInputBEM
    htmlId="my_id"
    name="my_name"
    label="the label"
    onChange={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

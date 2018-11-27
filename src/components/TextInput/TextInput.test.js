import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';

test('<TextInput /> renders correctly', () => {
  const tree = renderer.create(<TextInput
    htmlId="my_id"
    name="my_name"
    label="the label"
    onChange={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

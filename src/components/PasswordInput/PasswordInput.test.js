import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';

test('<PasswordInput /> renders correctly', () => {
  const tree = renderer.create(<PasswordInput />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import PassportInput from './PassportInput';

test('<PassportInput /> renders correctly', () => {
  const tree = renderer.create(<PassportInput
    onSubmit={()=>{}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

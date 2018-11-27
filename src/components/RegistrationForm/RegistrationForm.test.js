import React from 'react';
import renderer from 'react-test-renderer';
import RegistrationForm from './RegistrationForm';

test('<RegistrationForm /> renders correctly', () => {
  const tree = renderer.create(<RegistrationForm
    onSubmit={()=>{}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

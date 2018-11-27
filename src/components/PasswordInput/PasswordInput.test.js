import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';

test('<PasswordInput /> renders correctly', () => {
  const tree = renderer.create(<PasswordInput
    htmlId="password"
    name="password"
    onChange={() => {}}
    value=""
    minLength={8}
    placeholder="Enter Password"
    showVisibilityToggle
    quality={0}
    width={120}

    />).toJSON();
  expect(tree).toMatchSnapshot();
});

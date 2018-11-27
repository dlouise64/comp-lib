import React from 'react';
import renderer from 'react-test-renderer';
import PassportSearch from './PassportSearch';

test('<PassportSearch /> renders correctly', () => {
  const tree = renderer.create(<PassportSearch />).toJSON();
  expect(tree).toMatchSnapshot();
});

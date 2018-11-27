import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './PageHeader';

test('<PageHeader /> renders correctly', () => {
  const tree = renderer.create(<PageHeader
    message="The Title"
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

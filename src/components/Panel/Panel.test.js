import React from 'react';
import renderer from 'react-test-renderer';
import Panel from './Panel';

test('<Panel /> renders correctly', () => {
  const tree = renderer.create(<Panel
    title="Panel title"
    theme="success"
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import TextInputBEM from 'sil-react/TextInputBEM';

/** Optional Text Input BEM */
export default function ExampleTextInputBEM() {
  return (
    <TextInputBEM
      htmlId="example-optional"
      label="email"
      name="email"
      onChange={() => {}}
      required
      error="Email is required"
    />
  );
}

import React from 'react';
import TextInput from 'sil-react/TextInput';

/** Required Text Box with error*/
export default function ExampleError() {
  return (
    <TextInput
      htmlId="example-optional"
      label="email"
      name="email"
      required
      error="email is required"
      onChange={() => {}}
    />
  );
}

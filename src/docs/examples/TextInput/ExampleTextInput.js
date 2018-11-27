import React from 'react';
import TextInput from 'sil-react/TextInput';

/** Optional Text Box */
export default function ExampleOptional() {
  return (
    <TextInput
      htmlId="example-optional"
      label="email"
      name="email"
      onChange={() => {}}
    />
  );
}

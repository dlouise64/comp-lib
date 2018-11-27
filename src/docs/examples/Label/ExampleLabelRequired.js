import React from 'react';
import Label from 'sil-react/Label';

/** Label Required */
export default function ExampleLabelRequired() {
  return <Label
    label="Label for label"
    htmlFor="req_label"
    required
  />;
}

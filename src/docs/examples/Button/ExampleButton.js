import React, { Fragment } from 'react';
import Button from 'sil-react/Button';

/** Includes several predefined button styles,
  * each serving its own semantic purpose,
  * with a few extras thrown in for more control.
**/

export default function ExampleButton() {
  return <Fragment>
    <p>
      <Button />
    </p>
    <p>
      <Button message="This is a button" />
    </p>
    <p>
      <Button
        message="This is a button"
        theme="info"
      />
    </p>
    <h3>Sizes</h3>
    <p>
      <Button
        message="This is a button"
        theme="info"
        size="small"
      />
    </p>
    <p>
      <Button
        message="This is a button"
        theme="info"
        size="medium"
      />
    </p>
    <p>
      <Button
        message="This is a button"
        theme="info"
        size="large"
      />
    </p>
  </Fragment>
}

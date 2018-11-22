import React, { Fragment } from 'react';
import Panel from 'sil-react/Panel';

/** A Panel */

export default function ExamplePanel() {
  return (
    <Fragment>

      <Panel />

      <Panel
        title="Best dates to apply"
        list={[
          '1 April 2018 -- 13 April 2018',
          '5 May -- 13 May 2018'
        ]}
        theme="success"
      />

      <Panel
        title="Do not apply"
        list={[
          '1 April 2018 -- 13 April 2018',
          '5 May -- 13 May 2018'
        ]}
        theme="warning"
      />

    </Fragment>
  )
}

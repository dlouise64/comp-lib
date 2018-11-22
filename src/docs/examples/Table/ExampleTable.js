import React from 'react';
import Table from 'sil-react/Table';

/** A Table */

export default function ExampleTable() {
  return <Table data={{
    header: ['Name', 'Address', 'Phone'],
    body: ['Joe Blogs', '555 Blog Street', '555-111-222']
  }}/>
}

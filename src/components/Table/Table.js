import React from 'react';
import PropTypes from 'prop-types';

/** Use for actions in forms, dialogs, and more with support for multiple sizes, states, and more. */

const Table = ({data}) => {
  return <table>
    {console.log(data)}
    {data.header &&
      <thead>
        {
          data.header.map(key => {
            return (
              <th key={key}>{key}</th>
            )
          })
        }
      </thead>
    }
    {data.body && <tbody>
      {
        data.body.map(item=>{
          return <td>{item}</td>
        })
      }
    </tbody>}
    {data.footer && <tfoot>
      {
        data.footer.map(item=>{
          return <td>{item}</td>
        })
      }
    </tfoot>}
  </table>
}

Table.propTypes = {
  /** Object of arrays */
  data: PropTypes.object.isRequired
}

export default Table;

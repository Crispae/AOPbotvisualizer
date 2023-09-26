import React from 'react'

function NodeContent({ value, degree, url }) {

    
  return (
    

        <>
        <div className="node_info">
          <p align="left">
            <b>{value}</b>
          </p>
          <hr />
          <table>
            <tbody>
              <tr>
                <td align="left">
                  <strong>Degree:</strong>
                </td>
                <td align="right">{degree}</td>
              </tr>
              <tr>
                <td align="left">
                  <strong>Identifier:</strong>
                </td>
                <td align="right">
                  <a href={url}>{value}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        </>
      
  );
}

export default NodeContent





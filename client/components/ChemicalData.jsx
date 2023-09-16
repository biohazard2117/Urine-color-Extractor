import React from "react";

function ChemicalData({ data }) {
  return (
    <div>
      <h2>Chemical Data</h2>
      <table>
        <thead>
          <tr>
            <th>Chemical</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([chemical, values]) => (
            <tr key={chemical}>
              <td>{chemical}</td>
              <td>{`[${values.join(", ")}]`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChemicalData;

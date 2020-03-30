import React from 'react';

import Slider from './Slider';

import '../node_modules/@material/data-table/dist/mdc.data-table.css';

const camelCase = name =>
  String(name)
    .split(' ')[0]
    .toLowerCase();

export const Column = ({
  numeric = false,
  slider = false,
  children,
  field = camelCase(children)
}) => (
  <th
    className="mdc-data-table__header-cell"
    role="columnheader"
    scope="col"
    {...(slider && { style: { width: '300px' } })}
  >
    {children}
  </th>
);

const Cell = ({ row, field, numeric, slider }) => {
  const classNames = ['mdc-data-table__cell'];
  if (numeric) {
    classNames.push('mdc-data-table__cell--numeric');
  }
  const value = row[field];
  const content = slider ? <Slider value={value} /> : value;
  return <td className={classNames.join(' ')}>{content}</td>;
};

const Table = ({ children, data = [] }) => (
  <div className="mdc-data-table">
    <table className="mdc-data-table__table">
      <thead>
        <tr className="mdc-data-table__header-row">{children}</tr>
      </thead>
      <tbody className="mdc-data-table__content">
        {data.map((row, index) => {
          const id = `u${index + 3}`;
          const columns = children.map(({ props: { numeric, slider, field } }, colIndex) => (
            <Cell
              key={`column${colIndex}`}
              row={row}
              numeric={numeric}
              slider={slider}
              field={field}
              {...(colIndex === 0 && { id })}
            />
          ));
          return (
            <tr key={id} data-row-id={id} className="mdc-data-table__row" aria-selected="false">
              {columns}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default Table;

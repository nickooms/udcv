import React, { useEffect, useState } from 'react';

import Table, { Column } from './Table';
import { getLanguages } from './api';

const Languages = () => {
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    const loadLanguages = async () => {
      setLanguages(await getLanguages());
    };
    loadLanguages();
  }, []);

  if (languages === null) {
    return <p>Loading languages...</p>;
  }

  return (
    <Table data={languages}>
      <Column field="name">Language</Column>
      <Column field="level">Level</Column>
    </Table>
  );
};

export default Languages;

const URL = 'http://localhost:4000';

const fetchJSON = async url => {
  const response = await fetch(`${URL}/${url}`);
  const json = await response.json();
  return json;
};

export const getLanguages = async () => fetchJSON('languages');

import React from 'react';
// import { MDCSlider } from '@material/slider';

import Table, { Column } from './Table';
import languages from './data/languages';
// import Slider from './Slider';
// import { getLanguages } from './api';

const Languages = () => {
  // useEffect(() => {
  //   const slider = new MDCSlider(document.querySelector('.mdc-slider'));
  //   slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));
  // }, []);
  // const [languages, setLanguages] = useState(null);

  // useEffect(() => {
  //   const loadLanguages = async () => {
  //     setLanguages(await getLanguages());
  //   };
  //   loadLanguages();
  // }, []);

  // if (languages === null) {
  //   return <p>Loading languages...</p>;
  // }

  // return <div style={{ margin: 32 }}></div>;

  return (
    <Table data={languages}>
      <Column field="name">Language</Column>
      {/* <Column field="level">Level</Column> */}
      <Column field="skill" slider>
        Level
      </Column>
    </Table>
  );
};

export default Languages;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AddAddress from './AddAddress';
import AddressMap from './AddressMap';

import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AddAddress />} />
        <Route path="/address-map" element={<AddressMap />} />
      </Routes>
      <div />
    </>
  );
}

export default App;

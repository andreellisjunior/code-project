import React from 'react';
import GoogleMaps from 'src/components/GoogleMaps';
import SavedAddresses from 'src/components/SavedAddresses';
import SearchForm from 'src/components/SearchForm';

const AddressMap = () => {
  return (
    <div className="address-collection-wrapper">
      <div className="address-list">
        <SearchForm />
        <SavedAddresses />
      </div>
      <div className="map-wrapper">
        <GoogleMaps />
      </div>
    </div>
  );
};

export default AddressMap;

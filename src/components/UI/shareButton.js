import React from 'react';
import 'react-sharingbuttons/dist/main.css';
import { Facebook, Twitter } from 'react-sharingbuttons';

const SharingButtons = ({ title, url }) => {
  return (
    <>
      <Facebook url={url} />
      <Twitter url={url} shareText={title} />
    </>
  );
};

export default SharingButtons;

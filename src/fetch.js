import React, { useState, Fragment } from 'react';

function fetchMock(lang='en_US'){
  return new Promise(resolve => resolve(data[lang]));
};

const data = {
  'en-US': [/* data isn't shown */],
  'la-PG': [],
};

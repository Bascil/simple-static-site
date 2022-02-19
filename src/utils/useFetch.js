import { useState, useEffect } from 'react';
import english from '../data/english.json';
import hindi from '../data/hindi.json';

export const useFetch = (options) => {
  const [data, setData] = useState({});

  useEffect(() => {
    options.language == 'en' ? setData(english) : setData(hindi);
  }, [options]);

  return { data };
};

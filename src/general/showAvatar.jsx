
import React from 'react';
import { useFetch } from '../customHooks/useFetch.jsx';

export function ShowAvatar() {

  const [url] = React.useState('https://api.github.com/users/cathlearmo');
  const { data } = useFetch(url, []);

  return <img src={data.avatar_url}/>;
}


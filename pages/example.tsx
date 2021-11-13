import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import { END } from 'redux-saga';
import { wrapper } from '../store/store';
import { loadData } from '../store/users/action';

const Example: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData())
  }, [])

  return (<>
    <h1>aa</h1>
  <br/>
    
  </>);
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    // store.dispatch(loadData());
    // store.dispatch(END);
});

export default Example;

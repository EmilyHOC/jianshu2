import axios from 'axios';
import *as constants from './actionTypes';

export const getHomeInfo= ()=>{
  return (dispatch)=>{
    axios.get('/api/home.json').then((res)=>{
      const result= res.data.data;
      const action={
        type:constants.CHANGE_HOME_DATA,
        topicList:result.topicList,
      }
      dispatch(action);
    })
  }

}
import { fromJS } from 'immutable';
import *as constants from './actionTypes'


const defaultState=fromJS({
  topicList:[]
})
export default (state=defaultState,action) =>{
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList:fromJS(action.topicList)
      })
    default :return state;
  }
}
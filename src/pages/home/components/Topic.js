import React,{ Component } from 'react';
import {connect} from 'react-redux';
import './index.less';

class Topic extends Component{
  render() {
    const {list} = this.props;
    return (
      <div className="topicListWrapper">
        {
          list.map((item) => (
            <div className="topicItem" key={item.get('id')}>
              <img
                className='topic-pic'
                src={item.get('imgUrl')}
                alt=''
              />
              {item.get('title')}
            </div>
          ))
        }

      </div>
    )
  }

}
const mapStateToProps=(state)=>({
    list:state.getIn(['home','topicList'])
})
export default connect(mapStateToProps,null)(Topic);
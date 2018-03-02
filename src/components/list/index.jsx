import React, {Component} from 'react'
import ListItem from './listItem'
import './list.css'

class List extends Component {
  render () {
    let data = this.props.dataType
    return (
      <ul className='container-list' ref={ul => (this.ul = ul)}>
        {
          data.map((item, index) => {
            return <ListItem
              key={index} item={item} index={this.props.index} handleClick={this.props.handleGetDetail.bind(this)}
              />
          })
        }
      </ul>
    )
  }
}

export default List

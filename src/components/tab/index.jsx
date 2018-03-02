import React, {Component} from 'react'
import TabItem from './tabItem'
import './tab.css'

class Tab extends Component {
  render () {
    let items = this.props.item
    return (
      <ul className='tab-list'>
        {
          items.map((item, index) => {
            return <TabItem
              key={index}
              item={item}
              index={index}
              curIndex={this.props.index}
              changeTab={this.props.changeTab.bind(this)}
            />
          })
        }
      </ul>
    )
  }
}
export default Tab

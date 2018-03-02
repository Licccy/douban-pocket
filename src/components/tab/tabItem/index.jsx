import React, {Component} from 'react'
import './item.css'

class TabItem extends Component {
// 当前点击的tab增加类名，使其颜色变蓝
  curTab (index) {
    return index === this.props.curIndex ? 'cur-tab' : ''
  }
  render () {
    return (
      <div className={'tab-item ' + this.curTab(this.props.index)} onClick={this.props.changeTab.bind(this, this.props.index)}>
        <span>{this.props.item}</span>
      </div>
    )
  }
}
export default TabItem

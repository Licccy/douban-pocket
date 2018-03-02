import React, {Component} from 'react'
import './input.css'

class Input extends Component {
  render () {
    const placeholder = this.props.index === 0
            ? '书名、作者、ISBN'
            : this.props.index === 1
            ? '电影、影人、影院、电视剧'
                : '唱片名、表演者、条码、ISRC'
    return (
      <div className='search'>
        <input className='search-input' placeholder={placeholder} />
        <button className='search-btn' onClick={this.props.inputSearch.bind(this)}>搜索</button>
      </div>
    )
  }
}
export default Input

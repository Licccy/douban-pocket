import React, {Component} from 'react'
import fetchJsonp from 'fetch-jsonp'
import Input from './components/input'
import Tab from './components/tab'
import List from './components/list'
import Detail from './components/detail'
import './style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: ['图书', '电影', '音乐'],
      type: ['book', 'movie', 'music'],
      curIndex: 0,
      detailPage: false,
      search: {
        book: 'https://api.douban.com/v2/book/search?q=javascript&count=50&start=0',
        movie: 'https://api.douban.com/v2/movie/top250?count=50&start=0',
        music: 'https://api.douban.com/v2/music/search?q=周杰伦&count=50&start=0'
      },
      book: [],
      music: [],
      movie: [],
      select: {
        directors: [],
        casts: [],
        author: [],
        tags: [],
        genres: []
      }
    }
  }
  componentDidMount () {
    this.preload()
  }
  // 预加载
  preload () {
    let index = this.state.curIndex
    switch (index) {
      case 0:
        fetchJsonp(this.state.search.book).then((response) => {
          return response.json()
        }).then((json) => {
          this.setState({
            book: json.books
          })
        })
        break
      case 1:
        fetchJsonp(this.state.search.movie).then((response) => {
          return response.json()
        }).then((json) => {
          this.setState({
            movie: json.subjects
          })
        })
        break
      case 2:
        fetchJsonp(this.state.search.music).then((response) => {
          return response.json()
        }).then((json) => {
          this.setState({
            music: json.musics
          })
        })
        break
    }
  }
// tab栏点击切换页面、input框输入内容清空
  handleChangeTab (index) {
    this.setState({
      curIndex: index
    })
    this.preload()
    document.getElementsByClassName('search-input')[0].value = ''
  }
// 获取当前点击对象的内容详情页
  handleGetDetail (detail) {
    this.setState({
      select: detail,
      detailPage: true
    })
  }
  // 退出详情页
  exitDetailPage () {
    this.setState({
      detailPage: false
    })
  }
  // 搜索
  inputSearch () {
    let keyword = document.getElementsByClassName('search-input')[0].value
    let type, dataType
    let index = this.state.curIndex
    index === 0 ? [type, dataType] = ['book', 'books'] : index === 1 ? [type, dataType] = ['movie', 'subjects'] : [type, dataType] = ['music', 'musics']
    this.setState({
      keyword: keyword
    })
    let url = 'https://api.douban.com/v2/' + type + '/search?q=' + keyword + '&count=30&start=0'
    fetchJsonp(url).then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        // search: url,
        [type]: json[dataType]
      })
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }
  render () {
    let detailPage = this.state.detailPage ? 'visible' : 'hide'
    let datatype = this.state.curIndex === 0 ? this.state.book : this.state.curIndex === 1 ? this.state.movie : this.state.music
    return (
      <div className='app'>
        <Input index={this.state.curIndex} inputSearch={this.inputSearch.bind(this)} />
        <List index={this.state.curIndex} dataType={datatype} handleGetDetail={this.handleGetDetail.bind(this)} />
        <Tab item={this.state.name} index={this.state.curIndex} changeTab={this.handleChangeTab.bind(this)} />
        <Detail class={detailPage} index={this.state.curIndex} select={this.state.select} exitDetailPage={this.exitDetailPage.bind(this)} />
      </div>
    )
  }
}

module.exports = App

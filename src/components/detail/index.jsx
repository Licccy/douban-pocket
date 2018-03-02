import React, {Component} from 'react'
import './detail.css'

class Detail extends Component {
    // 根据不同状态返回不同的详情页
  render () {
    let select = this.props.select
    let type
    switch (this.props.index) {
      case 0:
        type = '图书'
        return (
          <div className={'item-detail ' + this.props.class}>
            <div className='nav'>
              <div className='exit-btn' onClick={this.props.exitDetailPage.bind(this)}>{type}</div>
              <div className='item-title'>{select.title}</div>
            </div>
            <div className='detail'>
              <div className='detail-info'>
                <img src={select.img} />
                <div className='info-list'>
                  <p>名称: {select.title}</p>
                  <p>作者: {select.author}</p>
                  <p>出版社: {select.publisher}</p>
                  <p>日期: {select.pubdate}</p>
                  <p>评分: {select.rating}</p>
                  <p>价钱: {select.price}</p>
                  <p>
                    {
                      select.tags.map((item, index) => {
                        return <span className='tag-item' key={index}>{item.name}</span>
                      })
                    }
                  </p>
                </div>
              </div>
              <div className='catalog'>
                <h2>序言</h2>
                <p className='brief'>{select.catalog}</p>
              </div>
              <div className='summary'>
                <h2>简介</h2>
                <p className='brief'>{select.summary}</p>
              </div>
            </div>
          </div>
        )
      case 1:
        type = '电影'
        return (
          <div className={'item-detail ' + this.props.class}>
            <div className='nav'>
              <div className='exit-btn' onClick={this.props.exitDetailPage.bind(this)}>{type}</div>
              <div className='item-title'>{select.title}</div>
            </div>
            <div className='detail'>
              <div className='film-info'>
                <div className='film-poster'>
                  <img src={select.images} />
                </div>
                <div className='film-list'>
                  <h2>简介</h2>
                  <p>名称: <span className='title'>{select.title}</span>
                    {
                      select.genres.map((item, index) => {
                        return <span className='film-genres' key={index}>{item}</span>
                      })
                    }
                  </p>
                  <p>上映时间: {select.year}</p>
                  <p>导演: {
                             select.directors.map((item, index) => {
                               return <span key={index}>{item.name}</span>
                             })
                           }
                  </p>
                  <p>{select.title}({select.original_title})</p>
                </div>
              </div>
              <div className='film-casts'>
                <h2>演员</h2>
                <div className='casts-list'>
                  {
                    select.casts.map((item, index) => {
                      return <img className='film-avatars' key={index} src={item.avatars.medium} />
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        )
      case 2:
        type = '音乐'
        return (
          <div className={'item-detail ' + this.props.class}>
            <div className='nav'>
              <div className='exit-btn' onClick={this.props.exitDetailPage.bind(this)}>{type}</div>
              <div className='item-title'>{select.title}</div>
            </div>
            <div className='detail'>
              <div className='detail-info'>
                <img src={select.img} />
                <div className='info-list'>
                  <p>名称: <span className='title'>{select.title}</span>
                    {
                      select.tags.map((item, index) => {
                        return <span className='tag-item' key={index}>{item.name}</span>
                      })
                    }
                  </p>
                  <p>作者: {
                             select.author.map((item, index) => {
                               return <span key={index}>{item.name} </span>
                             })
                           }
                  </p>
                  <p>发布商: {select.publisher}</p>
                  <p>发布时间: {select.pubdate}</p>
                  <p>评分: {select.rating}</p>
                </div>
              </div>
              <div className='summary'>
                <h2>简介</h2>
                <p>{select.title}</p>
              </div>
            </div>
          </div>
        )
    }
  }
}

export default Detail

import React, {Component} from 'react'
import './listItem.css'

class ListItem extends Component {
  render () {
    let items = this.props.item
    let detail
    switch (this.props.index) {
      case 0:
        detail = {
          title: items.title,
          author: items.author,
          publisher: items.publisher,
          price: items.price,
          pubdate: items.pubdate,
          tags: items.tags,
          rating: items.rating.average,
          img: items.image,
          catalog: items.catalog,
          summary: items.summary
        }
        return (
          <li className='list-item' onClick={this.props.handleClick.bind(this, detail)}>
            <img src={items.image} />
            <div className='item-info'>
              <p>名称: {items.title}</p>
              <p>
                {
                  items.tags.slice(0, 3).map((item, index) => {
                    return <span className='tags' key={index}>{item.title}</span>
                  })
                }
              </p>
              <p>作者: {items.author.join(',')}</p>
              <p>评分: {items.rating.average}</p>
              <p>时间: {items.pubdate}</p>
            </div>
          </li>
        )
      case 1:
        detail = {
          title: items.title,
          images: items.images.large,
          directors: items.directors,
          year: items.year,
          genres: items.genres,
          casts: items.casts,
          original_title: items.original_title
        }
        return (
          <li className='list-item' onClick={this.props.handleClick.bind(this, detail)}>
            <img src={items.images.medium} />
            <div className='item-info'>
              <p>{items.title} - {items.year}</p>
              <p>
                {
                  items.genres.slice(0, 3).map((item, index) => {
                    return <span className='film-genres' key={index}>{item}</span>
                  })
                }
              </p>
              <p>
                {
                  items.casts.map((item, index) => {
                    return <span className='film-casts' key={index}>{item.name}</span>
                  })
                }
              </p>
              <p>评分：{items.rating.average}</p>
            </div>
          </li>
        )
      case 2:
        detail = {
          title: items.title,
          author: items.author,
          publisher: items.attrs.publisher,
          pubdate: items.attrs.pubdate,
          tags: items.tags,
          rating: items.rating.average,
          img: items.image
        }
        return (
          <li className='list-item' onClick={this.props.handleClick.bind(this, detail)}>
            <img src={items.image} />
            <div className='item-info'>
              <p>名称: {items.title}</p>
              <p>
                作者: {
                      items.author.map((item, index) => {
                        return <span className='music-author' key={index}>{item.name}</span>
                      })
                    }
              </p>
              <p>评分: {items.rating.average}</p>
            </div>
          </li>
        )
    }
  }
}

export default ListItem

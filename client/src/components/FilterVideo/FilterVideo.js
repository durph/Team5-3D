import React from 'react';
import './FilterVideo.scss';
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'


class FilterVideo extends React.Component {
  state = {
    options1: ['one','tewo','three','climate change'],
    category1Value: 'climate change'
  }


  render() {
    console.log(this.state.category1Value)
    return (
      <section className="filter-video">
        <div className="filter-video__filter">
        <Dropdown options={this.state.options1} onChange={this._onSelect} value={this.state.category1Value} placeholder="Select a category" />
        <Dropdown options={this.state.options1} onChange={this._onSelect} value={this.state.category1Value} placeholder="Select a category" />
        <Dropdown options={this.state.options1} onChange={this._onSelect} value={this.state.category1Value} placeholder="Select a category" />

        </div>
        <div className="filter-video__videos-list">
          <Link className="filter-video__video-item">
            {/* {this.props.data.comments} */}
            {/* {this.state.data.filter(item => item.tags.includes('climate change')).map((tagItem,i) => <p key={i} className="comment">{tagItem.name}</p> )} */}

          </Link>
        </div>

      </section>
    )
  }
}


export default FilterVideo;

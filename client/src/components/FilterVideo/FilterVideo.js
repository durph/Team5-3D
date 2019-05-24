import React from 'react';
import './FilterVideo.scss';
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'


class FilterVideo extends React.Component {
  state = {
    options1: ['one','tewo','children','climate change'],
    category1Value: 'climate change',

    options2: ['one','tewo','three','climate change'],
    category2Value: false,
    
    options3: ['english'],
    category3alue: false,

    options4: ['duration'],
    category4alue: false,
  }


  setFilters() {
    let options = []
    if (this.state.category1Value) {
      options.push(this.state.category1Value)
    }
    if (this.state.option2) {
      options.push(this.state.option2)
    }
    if (this.state.option3) {
      options.push(this.state.option3)
    }
    if (this.state.option4) {
      options.push(this.state.option4)
    }
    return options;
  }
    
  // filterVideos() {
  //   let options = this.setFilters();
  //   if (options.length === 1) {
  //     return this.props.data.filter(item => item.tags.includes(options[0])).map((talk,i) => <Link to={talk.url} className="filter-video__video-item"><img className="filter-video__video-item-image" src={talk.related_talks[0].hero} alt=""/><h2>{talk.main_speaker}</h2><p>{talk.name.replace(`${talk.main_speaker}: `, '')}</p></Link> )
  //   }
  // }
// parseImg(src) {
//   src.replace(‘\’, ‘’);
// }

componentDidUpdate(nextProps, prevState) {
  if (this.state.category1Value !== prevState.category1Value) {
    console.log('aa')
    this.setState({
      category1Value: this.state.category1Value
    }) 
  }
}
  render() {
    console.log(this.setFilters())
    return (
      <section className="filter-video">
        <div className="filter-video__filter">
        <h1>Filters:</h1>
        <Dropdown options={this.state.options1} onChange={this._onSelect} value={this.state.category1Value} placeholder="Select a category" />

        </div>
          <h1>Videos:</h1>
        <div className="filter-video__videos-list">
          {/* {this.state.data.filter(item => item.tags.includes('climate change')).map((tagItem,i) => <p key={i} className="comment">{tagItem.name}</p> )} */}
          {/* {this.filterVideos()} */}
{          this.props.data.filter(item => item.tags.includes(this.state.category1Value)).map((talk,i) => <Link to={talk.url} className="filter-video__video-item"><img className="filter-video__video-item-image" src={talk.related_talks[0].hero} alt=""/><h2>{talk.main_speaker}</h2><p>{talk.name.replace(`${talk.main_speaker}: `, '')}</p></Link> )
}          {/* {this.props.data.filter(item => item.tags.includes('climate change')).map((talk,i) => <Link to={talk.url} className="filter-video__video-item"></Link> ) */}
}
        </div>

      </section>
    )
  }
}


export default FilterVideo;

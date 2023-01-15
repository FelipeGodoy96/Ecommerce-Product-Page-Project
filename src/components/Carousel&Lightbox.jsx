import ImageGallery from "react-image-gallery";
import React from "react";
import './carousel&lightbox.css'
import product1 from '../assets/images/image-product-1.jpg'
import product1thumb from '../assets/images/image-product-1-thumbnail.jpg'
import product2 from '../assets/images/image-product-2.jpg'
import product2thumb from '../assets/images/image-product-2-thumbnail.jpg'
import product3 from '../assets/images/image-product-3.jpg'
import product3thumb from '../assets/images/image-product-3-thumbnail.jpg'
import product4 from '../assets/images/image-product-4.jpg'
import product4thumb from '../assets/images/image-product-4-thumbnail.jpg'

export default class Gallery extends React.Component {

  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: false,
      showGalleryFullscreenButton: false,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'bottom',
      showVideo: {},
      useWindowKeyDown: false,
    }

    this.images = [
      {
        original: product1,
        thumbnail:  product1thumb
      },
      {
        original: product2,
        thumbnail:  product2thumb
      },
      {
       original: product3,
        thumbnail:  product3thumb
      },
      {
        original: product4,
        thumbnail:  product4thumb
      },
    ]
  }

  _onImageClick(event) {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex())
  }

  _onImageLoad(event) {
    console.debug('loaded image', event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug('slid to index', index);
  }

  _onPause(index) {
    console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    if (event.target.value > 0) {
      this.setState({[state]: event.target.value});
    }
  }

  _handleCheckboxChange(state, event) {
    this.setState({[state]: event.target.checked});
  }

  _handleThumbnailPositionChange(event) {
    this.setState({thumbnailPosition: event.target.value});
  }

  _getStaticImages() {
    let images = [];
    for (let i = 2; i < 12; i++) {
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail:`${PREFIX_URL}${i}t.jpg`
      });
    }

    return images;
  }

  _resetVideo() {
    this.setState({showVideo: {}});

    if (this.state.showPlayButton) {
      this.setState({showGalleryPlayButton: true});
    }

    if (this.state.showFullscreenButton) {
      this.setState({showGalleryFullscreenButton: true});
    }
  }

  _toggleShowVideo(url) {
    const showVideo = this.state;
    this.setState({
      showVideo: {
        ...showVideo,
        [url]: !showVideo[url]
      }
    });

    if (!showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({showGalleryPlayButton: false});
      }

      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: false});
      }
    }
  }

  render () {
    return <ImageGallery          
    ref={i => this._imageGallery = i}
    items={this.images}
    onClick={this._onImageClick.bind(this)}
    onImageLoad={this._onImageLoad}
    onSlide={this._onSlide.bind(this)}
    onPause={this._onPause.bind(this)}
    onScreenChange={this._onScreenChange.bind(this)}
    onPlay={this._onPlay.bind(this)}
    infinite={this.state.infinite}
    showBullets={this.state.showBullets}
    showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
    showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
    showThumbnails={this.state.showThumbnails}
    showIndex={this.state.showIndex}
    showNav={this.state.showNav}
    isRTL={this.state.isRTL}
    thumbnailPosition={this.state.thumbnailPosition}
    slideDuration={parseInt(this.state.slideDuration)}
    slideInterval={parseInt(this.state.slideInterval)}
    slideOnThumbnailOver={this.state.slideOnThumbnailOver}
    additionalClass="app-image-gallery"
    useWindowKeyDown={this.state.useWindowKeyDown} />
  }
}
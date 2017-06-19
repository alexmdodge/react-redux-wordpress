import * as React from 'react';
import './ImageBlock.css';

const DEFAULTS = {
  stars: require('./star.png'),
  xo: require('./xo.png'),
};

/* Sizes available for image block */
const SIZES = {
  FIT: 'fit',
  ANDREW: 'andrew',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

interface Props {
  className?: string;
  image?: string;
  children?: any;
  size?: string;
  isSingle?: boolean;
  isFixed?: boolean;
  isStretched?: boolean;
  isDefault?: boolean;
}

interface State {
  image: string;
  height: string;
  width: string;
  repeat: string;
  attachment: 'fixed' | 'scroll';
  size: string;
}

class ImageBlock extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      image: DEFAULTS.xo,
      height: '100%',
      width: '100%',
      repeat: 'no-repeat',
      attachment: 'scroll',
      size: 'auto',
    };
  }
  
  componentWillMount() {
    let test = this.props.size || 'fit';
    switch (test.toLowerCase()) {
      case SIZES.LARGE:
        this.setState({ height: '90vh' });
        break;
      case SIZES.MEDIUM:
        this.setState({ height: '40vh' });
        break;
      case SIZES.SMALL:
        this.setState({ height: '20vh' });
        break;
      case SIZES.ANDREW:
        this.setState({ height: '5vh' });
        break;
      default:
        this.setState({ height: '100%' });
    }

    this.setState({
      repeat: this.props.isSingle ? 'no-repeat' : 'repeat',
      attachment: this.props.isFixed ? 'fixed' : 'scroll',
      size: this.props.isStretched ? 'cover' : 'auto',
      image: this.props.image ? this.props.image : DEFAULTS.xo,
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.state.image})`,
          backgroundPosition: 'center center',
          backgroundAttachment: this.state.attachment,
          backgroundRepeat: this.state.repeat,
          backgroundSize: this.state.size,
          width: this.state.width,
          height: this.state.height,
        }}
        className={`image-block ${this.props.className || ''}`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ImageBlock;
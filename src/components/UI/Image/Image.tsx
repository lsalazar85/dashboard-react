import { ImageContainer, ImageElement } from './styles';
import { ImageProps } from '../../../interfaces';

const Image = ({
  width, height, alt, src,
}: ImageProps) => (
  <ImageContainer width={width} height={height}>
    <ImageElement src={src} alt={alt} />
  </ImageContainer>
);

export default Image;

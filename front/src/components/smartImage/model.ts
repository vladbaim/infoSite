import { ImageProps } from 'next/image';

export type SmartImageProps = Omit<ImageProps, 'src'> & { src?: ImageProps['src'] };

export type ViewProps = SmartImageProps & { isLoading: boolean };

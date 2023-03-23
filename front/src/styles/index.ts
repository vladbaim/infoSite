import { CSSProperties } from 'react';

export const withMaxRowsCount = (rows: number = 2): CSSProperties => ({
  whiteSpace: 'normal',
  display: '-webkit-box',
  WebkitLineClamp: rows,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: 1.4,
  maxHeight: '2.8em'
});

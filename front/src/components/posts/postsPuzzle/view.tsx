import { BackgroundImage } from '../../backgroundImage';
import { PostOnPreviewBackground } from '../postOnPreviewBackground';
import { ViewProps } from './model';
import { FirstPostPuzzleBox, PostsPuzzleBox, SecondPostPuzzleBox, ThreeAndForePostPuzzleBox } from './style';

export const View = (props: ViewProps) => (
  <PostsPuzzleBox>
    <FirstPostPuzzleBox sx={{ gridArea: 'first' }}>
      <PostOnPreviewBackground post={props.posts[0]} />
    </FirstPostPuzzleBox>
    <SecondPostPuzzleBox sx={{ gridArea: 'second' }}>
      <PostOnPreviewBackground post={props.posts[1]} />
    </SecondPostPuzzleBox>
    <ThreeAndForePostPuzzleBox sx={{ gridArea: 'three' }}>
      <PostOnPreviewBackground post={props.posts[2]} />
    </ThreeAndForePostPuzzleBox>
    <ThreeAndForePostPuzzleBox sx={{ gridArea: 'fore' }}>
      <PostOnPreviewBackground post={props.posts[3]} />
    </ThreeAndForePostPuzzleBox>
  </PostsPuzzleBox>
);

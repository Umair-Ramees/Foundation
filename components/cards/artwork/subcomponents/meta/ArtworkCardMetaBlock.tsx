import Box from 'components/base/Box';
import Grid from 'components/base/Grid';
import { styled } from 'stitches.config';

const ArtworkCardMetaBlock = styled(Grid, {
  gap: '$1',
});

export const TopSurfaceBox = styled(Box, {
  position: 'relative',
  zIndex: 2,
  display: 'inline-flex',
  overflow: 'hidden',
  minWidth: 0,
});

export default ArtworkCardMetaBlock;

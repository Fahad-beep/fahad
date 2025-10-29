import React from 'react';
import styled from 'styled-components';
import {
  gridGap,
  space,
  grid,
  layout,
  flexbox,
  borders,
  compose,
  GridProps as StyledGridProps,
  LayoutProps,
  GridGapProps,
  SpaceProps,
  FlexboxProps,
  BordersProps,
} from 'styled-system';

export type GridProps = React.HTMLAttributes<HTMLDivElement> & GridGapProps &
  SpaceProps &
  StyledGridProps &
  LayoutProps &
  FlexboxProps &
  BordersProps & {
    children?: React.ReactNode;
      as?: keyof JSX.IntrinsicElements;
  };

const GridComponent = styled.div<GridProps>`
  display: grid;
  align-items: center;
  justify-content: flex-end;

  ${compose(gridGap, grid, space, layout, flexbox, borders)}
`;


const Grid = React.forwardRef<HTMLDivElement, GridProps>((props, ref) => (
  <GridComponent ref={ref} {...props} />
));

Grid.displayName = 'Grid';

export default Grid;

// export type { GridProps };

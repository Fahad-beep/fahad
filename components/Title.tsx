import styled from 'styled-components';
import {
  typography,
  space,
  layout,
  compose,
  TypographyProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system';

// Remove ColorProps to avoid the type conflict
export type TitleProps = TypographyProps &
  SpaceProps &
  LayoutProps & {
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
  };

const TitleComponent = styled.h1<TitleProps>`
  margin: 0;
  font-weight: 700;
  color: var(--app-text-large);
  transition: color 0.3s ease;

  ${compose(typography, space, layout)};
`;

const Title: React.FC<TitleProps> = ({ children, ...props }) => {
  return <TitleComponent {...props}>{children}</TitleComponent>;
};

export default Title;
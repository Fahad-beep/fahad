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
export type TextProps = TypographyProps &
  SpaceProps &
  LayoutProps & {
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
  };

const TextComponent = styled.p<TextProps>`
  margin: 0;
  color: var(--app-text);
  transition: color 0.3s ease;

  ${compose(typography, space, layout)};
`;

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <TextComponent {...props}>{children}</TextComponent>;
};

export default Text;
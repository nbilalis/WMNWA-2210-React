import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props: ButtonProps) =>
    props.primary ? 'palevioletred' : 'white'};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default Button;

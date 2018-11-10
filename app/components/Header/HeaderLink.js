import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Tahoma';
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #5b748f;
  color: #5b748f;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

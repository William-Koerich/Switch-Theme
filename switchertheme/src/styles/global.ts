import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;a
    padding: 0;
    box-sizing: border-box;
  }

  body {
    backgroung: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
  }
`
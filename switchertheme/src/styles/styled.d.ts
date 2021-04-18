import 'styled-components'
declare module 'style-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secundary: string,
      background: string,
      text: string
    }
  }
}
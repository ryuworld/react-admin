import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 ${reset}
  html{
    font-size: 10px;
  }
	body {
	        font-family : apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell , 'Helvetica Neue', sans-serif;
	}
  a {
    text-decoration : none;
    color : inherit;
}
li{
  list-style:none;
}
	`;

export default GlobalStyles;

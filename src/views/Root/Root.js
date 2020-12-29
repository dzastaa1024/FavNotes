 import Button from "../../components/atoms/Button/Button";
 import GlobalStyle from "../../components/theme/GlobalStyle";
 import { ThemeProvider } from "styled-components";
 import { theme } from "../../components/theme/mainTheme";


function Root() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
      <div>
        Hello
      </div>
     <Button width="500px">CLOSE / SAVE</Button>
     <Button secondary>Remove</Button>
     </>
    </ThemeProvider> 
    </div>
    
  );
}

export default Root;



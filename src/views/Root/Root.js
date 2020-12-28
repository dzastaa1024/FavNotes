 import Button from "../../components/Button/Button"
 import GlobalStyle from "../../components/theme/GlobalStyle"

function Root() {
  return (
    <div>
      <GlobalStyle>
     <div>
       Hello
     </div>
     <Button width="500px">CLOSE / SAVE</Button>
     <Button secondary>Remove</Button>
    </GlobalStyle>
    </div>
    
  );
}

export default Root;



import { Container } from "./styles";

export function ButtonText({ title, icon, ...rest }){
  return(
    <Container {...rest}>
      {icon}{title}
    </Container>
  )
}
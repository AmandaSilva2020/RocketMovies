import { Container } from "./styles";
import { FiStar } from 'react-icons/fi';

export function Rating({ className, ...rest}){
  return(
    <Container 
      {...rest}
      className= {className}
    >
      <FiStar />
    </Container>
  )
}
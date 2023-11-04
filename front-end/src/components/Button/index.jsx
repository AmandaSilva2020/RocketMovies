import { Container } from "./styles";

export function Button({ title, className, loading = false, ...rest }){
  return(
    <Container 
      type="button" 
      className={className}
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { Container } from "./styles";

export function Note({ data = {}, ...rest }){

  return(
    <Container {...rest} >
      <h2>{data.title}</h2>
      
      <section>
        {
          Array.from({length: data.rating}, (_,index) => 
            <Rating className="fill" />
          )
        }
        {
          Array.from({length: 5 - data.rating}, (_,index) => 
            <Rating />
          )
        }
      </section>
      <p>
      {data.description}
      </p>
      {
        data.tags &&
        <section>
          {
            data.tags.map(tag => 
                <Tag key={tag.id} title={tag.name}/>
              )
          }
        </section>
      }
      
    </Container>
  );
}
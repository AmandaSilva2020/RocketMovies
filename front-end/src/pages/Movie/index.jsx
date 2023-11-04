import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { FiArrowLeft, FiClock } from "react-icons/fi";

import { Container } from "./styles";


export function Movie(){
  const { user } = useAuth();
  const params = useParams();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [data, setData] = useState(null);

  const navigate = useNavigate();
  function handleBack(){
    navigate(-1);
  }

  function handleEdit(){
    navigate(`/movie/${params.id}/edit`);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover esse filme?");

    if(confirm){
      await api.delete(`/movie_notes/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchMovie(){
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
    
  }, []);

  return(
    <Container>
      <Header />
      {
        data &&
        <main>
          <ButtonText 
            icon={<FiArrowLeft/>} 
            title="Voltar" 
            onClick={handleBack}
          />

          <div className="row_1">
            <h1>
              {data.movie_note.title}  
            </h1>
            <div className="rating_wrapper">
              {
                Array.from({length: data.movie_note.rating}, (_,index) => 
                  <Rating className="fill" />
                )
              }
              {
                Array.from({length: 5 - data.movie_note.rating}, (_,index) => 
                  <Rating />
                )
              }
            </div>
          </div>

          <div className="row_2">
            <img src={avatarUrl} alt={user.name} />
            <span>Por {user.name}</span>
            <FiClock />
            <span>
              {data.movie_note.created_at}
            </span>
          </div>

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

          <p>
            {data.movie_note.description}
          </p>

          <div className="button-wrapper">
            <Button 
              className="deleteBtn" 
              title="Excluir filme" 
              onClick={handleRemove}
            />
            <Button 
              title="Editar filme" 
              onClick={handleEdit}
            />
          </div>
        </main>
      }
    </Container>
  )
}
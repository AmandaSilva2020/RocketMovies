import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { FiPlus} from "react-icons/fi";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

import { Container, Content } from "./styles";

export function Home() {

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies(){
      const response = await api.get(`/movie_notes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
    
  }, [search])

  const navigate = useNavigate();

  function handleMovie(id){
    navigate(`/movie/${id}`);
  }

  return(
    <Container>
      <Header />
      <div>
        <Input 
          placeholder="Pesquisar por título"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      
      <main>
        <header>
          <h1>Meus Filmes</h1>
          <Link to="/new">
            <FiPlus />
              Adicionar filme
            </Link>
        </header>

        <Content>
          {
            movies.map(movie => (
              <Note 
                key={String(movie.id)}
                data={movie}
                onClick={() => handleMovie(movie.id)} 
              />
            ))
          }
          
        </Content>
      </main>
    </Container>
  )
}
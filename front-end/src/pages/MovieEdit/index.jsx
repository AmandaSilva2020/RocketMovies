import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { ButtonText } from "../../components/ButtonText";

import { Container } from "./styles";

export function MovieEdit(){
  const params = useParams();
  const [data, setData] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleEditMovie(){
    if(!title){
      return alert("Digite o título do filme");
    }

    if(!rating){
      return alert("Atribua uma nota de 0 a 5 para o filme");
    }
    
    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
    }

    try{
      await api.put(`/movie_notes/${params.id}`, {
        title,
        description,
        rating,
        tags
      });
      alert("Filme editado com sucesso!");
      navigate(-1);

    } catch (error) {
      if(error.response){
          alert(error.response.data.message);
      } else {
          alert("Não foi possível cadastrar a nota");
      }
    }

  }

  useEffect(() => {
    async function fetchMovie(){
      const response = await api.get(`/movie_notes/${params.id}`);
      setTitle(response.data.movie_note.title);
      setDescription(response.data.movie_note.description);
      setRating(response.data.movie_note.rating);
      setTags(response.data.tags.map( tag => tag.name));

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

          <h1>Editar filme</h1>
          <div className="input-wrapper">
            <Input 
              defaultValue={title} 
              onChange={e => setTitle(e.target.value)}
            />
            <input 
              className='inputRating'
              type='number'
              min={0}
              max={5}
              defaultValue={rating} 
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <textarea 
            cols="30" 
            rows="10" 
            defaultValue={description}  
            onChange={e => setDescription(e.target.value)}
          />

          <h2>Marcadores</h2>

          <div className="span-wrapper">
            {
              tags.map((tag, index) => (
                <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <NoteItem 
              placeholder="Novo marcador" 
              isNew 
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>

          <div className="button-wrapper">
            <Button className="deleteBtn" title="Excluir filme" />
            <Button 
              title="Salvar alterações" 
              onClick={handleEditMovie}
            />
          </div>
        </main>
      }
    </Container>
  );
}
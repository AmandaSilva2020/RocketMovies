import { useAuth } from '../../hooks/auth';
import { Container, Profile } from "./styles";
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header(){
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut(){
    navigation("/");
    signOut();
  }

  return(
    <Container>
      <h1>RocketMovies</h1>

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>Sair</button>
        </div>
        <Link to="/profile" >
          <img src={avatarUrl} alt={user.name}  />
        </Link>
      </Profile>
    </Container>
  );

}
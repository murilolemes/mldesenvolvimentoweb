import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

import { apiGitHub } from '../../services/api';

import { Container, Content, Perfil, Repos } from './styles';

interface GitHubData {
  name: string;
  avatar_url: string
  location: string;
  email: string;
  bio: string;
  html_url: string;

}

interface Repositories {
  id: undefined;
  name: string;
  html_url: string;
  description: string;
  language: string;
}

export function Home() {
  const [response, setResponse] = useState<GitHubData>();
  const [responseRepo, setResponseRepo] = useState<Repositories[]>([]);

  useEffect(() => {
    apiGitHub.get('/users/murilolemes').then(res => setResponse(res.data));
    apiGitHub.get('/users/murilolemes/repos').then(res => setResponseRepo(res.data));
  }, []);

  return (
    <Container>
      <Content>
        <Perfil>
          <div className="header">
            <h1>{response?.name}</h1>
            <p className="bio">
              {response?.bio}Iniciante em desenvolvimento front-end e back-end com as tecnologias ReactJs e Node.js. Estou sempre tentando ser melhor que ontem, gosto de enfrentar novos desafios e meus medos para melhorar a cada dia, estou sempre disposto a aprender e a ajudar as pessoas.
            </p>
          </div>
          <div className="description">
            <img src={response?.avatar_url} alt={response?.name} />
            <div className="data">
              <p>{response?.location}</p>
              <p>{response?.email} murilo.lemes.mhl@gmail.com</p>
              <a href={response?.html_url}>
                <FaGithub size={20} />
                Acesse meu Github
              </a>
            </div>
          </div>
        </Perfil>
        <Repos>
          {responseRepo.map(repo => (
            <a href={repo.html_url} key={repo.id} className="divRepo">
              <h2>{repo.name.replace(/-/g, ' ')}</h2>
              <p>{repo.description}</p>
              <p>{repo.language}</p>
            </a>
          ))}
        </Repos>
      </Content>
    </Container>
  );
}

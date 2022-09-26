import { useCallback, useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  BiGridAlt,
  BiGridHorizontal,
  BiListUl,
  BiChevronLeft,
  BiChevronRight
} from 'react-icons/bi';

import { apiGitHub } from '../../services/api';
import { WhatsApp } from '../../components/WhatsApp';

import js from '../../assets/javascript.svg';
import ts from '../../assets/typescript.svg';
import css3 from '../../assets/css3.svg';
import html5 from '../../assets/html5.svg';
import node from '../../assets/node.svg';

import { Container, Content, Perfil, Buttons, Repos } from './styles';

interface GitHubData {
  name: string;
  avatar_url: string
  location: string;
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
  const [selectList, setSelectList] = useState('listCompact');
  const [compact, setCompact] = useState('active')
  const [group, setGroup] = useState('inative')
  const [all, setAll] = useState('inative')
  const [page, setPage] = useState(0);
  const rowsPerPage = 3;

  useEffect(() => {
    apiGitHub.get('/users/murilolemes').then(res => setResponse(res.data));
    apiGitHub.get('/users/murilolemes/repos').then(res => setResponseRepo(res.data));
  }, []);

  function handleListCompact() {
    setSelectList('listCompact');
    setCompact('active')
    setGroup('inative')
    setAll('inative')
  }

  function handleListGroup() {
    setSelectList('listGroup');
    setGroup('active')
    setCompact('inative')
    setAll('inative')
  }

  function handleListAll() {
    setSelectList('listAll');
    setAll('active')
    setCompact('inative')
    setGroup('inative')
  }

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page])

  const handlePreviousPage = useCallback(() => {
    setPage(page - 1);
  }, [page])

  function imgLanguage(name: string) {
    switch (name) {
      case 'JavaScript':
        return js;
      case 'TypeScript':
        return ts;
      case 'CSS':
        return css3;
      case 'HTML':
        return html5;
      case 'NodeJS':
        return node;
      default:
        break
    }
  }

  return (
    <Container>
      <Content>
        <Perfil>
          <div className="header">
            <h1>{response?.name}</h1>
            <p className="bio">{response?.bio}</p>
          </div>
          <div className="description">
            <img src={response?.avatar_url} alt={response?.name} />
            <div className="data">
              <p>{response?.location}</p>
              <p>murilo.lemes.mhl@gmail.com</p>
              <a href={response?.html_url} target={'_blank'} rel="noreferrer">
                <FaGithub size={20} />
                Acesse meu Github
              </a>
            </div>
          </div>
        </Perfil>
        <Buttons>
          <h3>Acesse meus repositórios</h3>
          <div>
            <button type='button'
              className={compact === 'active' ? 'listActive' : 'listInative'}
              onClick={handleListCompact}
            >
              <BiListUl size={20} />
            </button>
            <button type='button'
              className={group === 'active' ? 'listActive' : 'listInative'}
              onClick={handleListGroup}
            >
              <BiGridHorizontal size={20} />
            </button>
            <button type='button'
              className={all === 'active' ? 'listActive' : 'listInative'}
              onClick={handleListAll}
            >
              <BiGridAlt size={20} />
            </button>
          </div>
        </Buttons>
        <Repos>
          <div id={selectList}>
            {responseRepo
              .slice(selectList !== 'listGroup' ? page * 0 : page * rowsPerPage)
              .map(repo => (
                <a
                  href={repo.html_url}
                  key={repo.id}
                  className="divRepo"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <h2>{repo.name.replace(/-/g, ' ')}</h2>
                  <p>{repo.description}</p>
                  <img src={imgLanguage(repo.language)} alt={repo.language} />
                </a>
              ))}
          </div>
          <button
            type='button'
            className={selectList}
            id='arrowLeft'
            disabled={page === 0}
            onClick={handlePreviousPage}
          >
            <BiChevronLeft size={30} />
          </button>
          <button
            type='button'
            className={selectList}
            id='arrowRight'
            disabled={page === responseRepo.length / rowsPerPage - 1}
            onClick={handleNextPage}
          >
            <BiChevronRight size={30} />
          </button>
        </Repos>
        <WhatsApp />
      </Content>
    </Container>
  );
}

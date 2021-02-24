import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpIcon from '@material-ui/icons/Help';
import logo from '../assets/images/jurtdev_logo.jpg';

export default function Header() {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input
              type='text'
              placeholder='searching for purpose and a tech job...'
            />
          </Search>
        </SearchContainer>
        <HelpIcon />
      </Main>
      <UserContainer>
        <Name>Christian Jurt</Name>
        <UserImage>
          <img src={logo} alt='avatar' />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

const Container = styled.div`
  /* background-color: #350d36; 00743F */
  background-color: #00743f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10px;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;
const Main = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
`;
const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`;
const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    background-color: white;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    color: black;
  }

  input:focus {
    outline: none;
  }
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;
const Name = styled.div`
  padding-right: 16px;
`;
const UserImage = styled.div`
  height: 28px;
  width: 28px;
  /* border: 2px solid white; */
  border-radius: 50%;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

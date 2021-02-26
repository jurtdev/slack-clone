import React, { useState } from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpIcon from '@material-ui/icons/Help';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header({ user, signOut }) {
  const notify = () => toast(`It's time to party!!!`);
  const notify2 = () =>
    toast(`Please refer all questions to @cleverqazi, @nazdumanskyy, @daseyffert, @davidrakosi
  & @jyse`);

  return (
    <Container>
      <Main>
        <ToastContainer />
        <Time onClick={notify} />
        <SearchContainer>
          <Search>
            <input
              type='text'
              placeholder='searching for purpose and a tech job...'
            />
          </Search>
        </SearchContainer>
        <Help onClick={notify2} />
      </Main>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage onClick={signOut}>
          <img
            src={user.photo ? user.photo : 'https://i.imgur.com/6VBx3io.png'}
            alt='avatar'
          />
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
  color: ${(props) => props.theme.color};
`;
const UserImage = styled.div`
  height: 28px;
  width: 28px;
  /* border: 2px solid white; */
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const Time = styled(AccessTimeIcon)`
  cursor: pointer;
  :hover {
    color: #f1a104;
  }
`;
const Help = styled(HelpIcon)`
  cursor: pointer;
  :hover {
    color: #f1a104;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

export default function Login(props) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem('user', JSON.stringify(newUser));
        props.setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImg src='https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png' />
        <h1>Sign In</h1>
        <SigninButton onClick={() => signIn()}>
          Sign in with Google
        </SigninButton>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SlackImg = styled.img`
  height: 100px;
  margin-bottom: 20px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 /24%);
`;

const SigninButton = styled.button`
  margin-top: 50px;
  padding: 5px 10px;
  background-color: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;

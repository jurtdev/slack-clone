import React from 'react';
import styled from 'styled-components';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default function Login() {
  return (
    <ChatContainer>
      <ChatHeader>
        <ChatContent>
          <ChatTag>#clever</ChatTag>
          <ChatDescription>
            Company-wide announcements and work-based matters
          </ChatDescription>
        </ChatContent>
        <ChatDetails>
          <Title>Details</Title> <InfoIcon />
        </ChatDetails>
      </ChatHeader>
      <ChatMain>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/8VeiAeR_7os'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      </ChatMain>
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  height: 100%;
  background-color: white;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 64px;
  border-bottom: 1px solid #523735;
`;

const ChatContent = styled.div`
  display: flex;
  max-width: 300px;
  flex-wrap: wrap;
  padding-left: 16px;
`;

const ChatDescription = styled.div`
  font-size: 11px;
`;

const ChatTag = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ChatDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  padding-right: 16px;
  align-content: space-around;

  i {
    padding-left: 5px;
  }
`;

const Title = styled.div`
  padding-right: 5px;
`;

const ChatMain = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;

  i {
    font-size: 2px;
  }
`;

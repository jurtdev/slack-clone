import React from 'react';
import styled from 'styled-components';

function ChatMessage() {
  return (
    <>
      <Container>
        <UserAvatar>
          <img src='https://randomuser.me/api/portraits/men/0.jpg' />
        </UserAvatar>
        <MessageContent>
          <Name>
            Gary Davidson
            <span>2/23/2021 11:13:55 AM EST</span>
          </Name>
          <Text>Hey, What's up?</Text>
        </MessageContent>
      </Container>
      <Container>
        <UserAvatar>
          <img src='https://randomuser.me/api/portraits/men/3.jpg' />
        </UserAvatar>
        <MessageContent>
          <Name>
            Larry Brewer
            <span>2/23/2021 11:15:00 AM EST</span>
          </Name>
          <Text>Just creating a Slack Clone!</Text>
        </MessageContent>
      </Container>
      <Container>
        <UserAvatar>
          <img src='https://randomuser.me/api/portraits/women/24.jpg' />
        </UserAvatar>
        <MessageContent>
          <Name>
            Cindy Brown
            <span>2/23/2021 11:15:20 AM EST</span>
          </Name>
          <Text>With who? Clever programmer?</Text>
        </MessageContent>
      </Container>
    </>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;

  :hover {
    background-color: #00743f;
    
    span {
        color: white;
    }
  }
  }
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  margin-right: 8px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  span {
    font-weight: 400;
    color: rgb(97, 96, 97);
    margin-left: 8px;
    font-size: 13px;
  }
`;

const Text = styled.span``;

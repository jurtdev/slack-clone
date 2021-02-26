import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import ToolBar from '../components/ToolBar';

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState('');

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            type='text'
            value={input}
            placeholder='Send a Message to #Clever'
          />
          <SendButton type='submit' onClick={send}>
            <Send />
          </SendButton>
        </form>
        <ToolBar />
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    input {
      flex: 1;
      border: none;
      font-size: 13px;
      background-color: #e3ffe0;
    }

    input:focus {
      outline: none;
    }
  }
`;

const SendButton = styled.button`
  background: #007a5a;
  border-radius: 2px;
  margin-right: 10px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;

  .MuiSvgIcon-root {
    width: 18px;
  }

  :hover {
    background: #148567;
  }
`;

const Send = styled(SendIcon)`
  color: white;
`;

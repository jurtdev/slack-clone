import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import StarRateIcon from '@material-ui/icons/StarRate';
import db from '../firebase';
import { useHistory } from 'react-router-dom';

import { SidebarItems } from '../data/SidebarData';

function Sidebar(props) {
  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  const addChannel = () => {
    const promptName = prompt('Enter Channel Name');
    console.log(promptName);
    if (promptName) {
      db.collection('rooms').add({ name: promptName });
    }
  };

  return (
    <Container>
      <WorkspaceContainer>
        <Name>Christian Jurt</Name>
        <NewMessage>
          <AddCircleIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {SidebarItems.map((item) => (
          <MainChannelItem>
            {item.icon} {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <Add onClick={addChannel} />
        </NewChannelContainer>
        <ChannelsList>
          {props.rooms.map((item) => (
            <Channel onClick={() => goToChannel(item.id)}>
              {/* <StarRateIcon /> */}# {item.name}
            </Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  /* background-color: #3f0e40; */
  background-color: #00743f;
`;
const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #523735;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  color: #00743f;
  fill: #00743f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;
const MainChannelItem = styled.div`
  /* color: rgb(188, 171, 188); */
  color: white;
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    /* background: #350d36; */
    background: #f1a104;
  }
`;

const ChannelsContainer = styled.div`
  /* color: rgb(188, 171, 188); */
  color: white;
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center:
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;

const ChannelsList = styled.div`
  padding-top: 8px;
`;

const Channel = styled.div`
  height: 28px;
  display: grid;
  /* grid-template-columns: 15% auto; */
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    /* background: #350d36; */
    background: #f1a104;
  }

  a {
    text-decoration: none;
    /* color: rgb(188, 171, 188); */
    color: white;
  }
`;
const Add = styled(AddIcon)`
  :hover {
    color: green;
    cursor: pointer;
    background-color: #f1a104;
    border-radius: 50%;
  }
`;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db from './firebase';
import styled from 'styled-components';
import './App.css';
import { auth } from './firebase';

export default function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header user={user} signOut={signOut} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path='/room/:channelId'>
                  <Chat user={user} />
                </Route>
                <Route path='/'>
                  <Text>
                    <span>Select or Create Channel</span>
                  </Text>
                </Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Text = styled.div`
    display: flex:
    justify-content: center;
   span {
     color: green;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 18px;
     height: 100%;
     z-index: 10;

   }
  `;

const Main = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
`;

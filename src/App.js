import './App.css';
import Header from './header/Header';
import Body from './body/Body';
import { useEffect, useState } from 'react';

function App() {
  const [grouping, setGrouping] = useState('status'); // status, user, priority
  const [ordering, setOrdering] = useState('Priority'); // Priority, Title
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      });
  }, [])

  useEffect(() => {
    setGrouping(window.localStorage.getItem('grouping') || 'status');
    setOrdering(window.localStorage.getItem('ordering') || 'priority');
  }, [])

  useEffect(() => {
    window.localStorage.setItem('grouping', grouping);
  }, [grouping])

  useEffect(() => {
    window.localStorage.setItem('ordering', ordering);
  }, [ordering])

  return (
    <div className="App">
      <Header 
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
     />
      <Body 
        grouping={grouping}
        ordering={ordering}
        tickets={tickets}
        users={users}
      />
    </div>
  );
}

export default App;

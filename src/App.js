import './App.css';
import Header from './header/Header';
import Body from './body/Body';
import { useEffect, useState } from 'react';
import { profileColors } from './constants';

function App() {
  const [grouping, setGrouping] = useState(window.localStorage.getItem('grouping') || 'status'); // status, user, priority
  const [ordering, setOrdering] = useState(window.localStorage.getItem('ordering') || 'priority'); // priority, title
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users.map((user, idx) => {
          return {...user, color: profileColors[idx]};
        }));
      });
  }, [])

  // useEffect(() => {
  //   const grp = window.localStorage.getItem('grouping');
  //   const ord = window.localStorage.getItem('ordering');
  //   grp && setGrouping(grp);
  //   ord && setOrdering(ord);
  // }, [])

  useEffect(() => {
    console.log(grouping);
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

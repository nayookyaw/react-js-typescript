import React, {FC} from 'react';
import './App.css';

import HelloWorld from './components/HelloWorld';
import List from './components/Lists';

const avengers = [
  {
    name : "D1Bot",
    version : 1.2
  },
  {
    name : "DX7",
    version : 2.3
  }
];

const App: FC = () => {
  return (
    <div className="App">
      <HelloWorld/>
      <List data={avengers}/>
    </div>
  );
}

export default App;

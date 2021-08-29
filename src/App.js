import { useState } from 'react';
import './App.scss';
import Dropdown from './Dropdown/Dropdown';
import { ItemContext } from './Dropdown/item-context';



function App() {

  const [shown, setShown] = useState(false);

  return (
    <div className="App">
      <ItemContext.Provider value={{shown, setShown}}>
        <Dropdown />
      </ItemContext.Provider>
    </div>
  );
}

export default App;

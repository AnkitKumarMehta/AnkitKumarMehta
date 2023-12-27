import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './components/About';
import Profile from './components/Profile';

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="App">
      <button className='btn' onClick={() => setActiveTab('about')}>about</button>
      <button className='btn' onClick={() => setActiveTab('profile')}>profile</button>
      <button className='btn' onClick={() => setActiveTab('home')}>home</button>
      {activeTab === 'about' &&
        <About />
      }
      {activeTab === 'profile' &&
        <Profile />
      }
      {activeTab === 'home' &&
        <Home />
      }

    </div>
  );
}

export default App;

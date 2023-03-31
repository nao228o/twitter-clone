import './App.css';
import Sidebar from './componets/sidebar/Sidebar';
import Timeline from './componets/timeline/Timeline';

function App() {
  return <div className='app'>
    <Sidebar />

    {/* Timeline */}
    <Timeline />
  </div>
}

export default App;

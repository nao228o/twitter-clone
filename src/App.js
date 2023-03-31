import './App.css';
import Sidebar from './componets/sidebar/Sidebar';
import Timeline from './componets/timeline/Timeline';
import Widgets from './componets/widget/Widgets';

function App() {
  return <div className='app'>
    <Sidebar />

    {/* Timeline */}
    <Timeline />

    <Widgets/>
  </div>
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Layout from './component/Layout';
import Home1 from './component/Home1';
import Home2 from './component/Home2';
import Home3 from './component/Home3';
import Home4 from './component/Home4';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home1 />} />
          <Route path="Home1" element={<Home1 />} />
          <Route path="Home2" element={<Home2 />} />
          <Route path="Home3" element={<Home3 />} />
          <Route path="Home4" element={<Home4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;

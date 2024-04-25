
import ArtTools from './component/ArtTools';
import ClothingTools from './component/ClothingTools';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/clothes" element={<ClothingTools/>}/>
      <Route path="/" element={<ClothingTools/>}/>
            <Route path="/art" element={<ArtTools />} />
    </Routes>
    </HashRouter>
  );
}

export default App;

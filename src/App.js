
import ArtTools from './component/ArtTools';
import ClothingTools from './component/ClothingTools';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ClothingTools/>}/>
            <Route path="/art" element={<ArtTools />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

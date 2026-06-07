import ArtTools from './component/ArtTools';
import ClothingTools from './component/ClothingTools';
import CookingTools from './component/CookingTools';
import { Routes, Route, HashRouter, NavLink, Outlet } from "react-router-dom";

const NAV_HEIGHT = 42;

function navLinkStyle({ isActive }) {
  return {
    color: isActive ? '#e0a458' : '#dddddd',
    textDecoration: 'none',
    padding: '0 16px',
    lineHeight: NAV_HEIGHT + 'px',
    fontWeight: 600,
    fontFamily: 'system-ui, "Segoe UI", sans-serif',
    fontSize: '14px',
  };
}

function Layout() {
  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: NAV_HEIGHT, zIndex: 9999,
        background: '#1d1a17', borderBottom: '1px solid #403a33',
        display: 'flex', alignItems: 'center',
      }}>
        <span style={{
          color: '#8a8077', padding: '0 14px', fontSize: '14px',
          fontFamily: 'system-ui, "Segoe UI", sans-serif',
        }}>Silent Heaven Tools</span>
        <NavLink to="/clothes" style={navLinkStyle}>#clothes</NavLink>
        <NavLink to="/art" style={navLinkStyle}>#art</NavLink>
        <NavLink to="/cooking" style={navLinkStyle}>#cooking</NavLink>
      </nav>
      <div style={{ paddingTop: NAV_HEIGHT }}>
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ClothingTools />} />
          <Route path="/clothes" element={<ClothingTools />} />
          <Route path="/art" element={<ArtTools />} />
          <Route path="/cooking" element={<CookingTools />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

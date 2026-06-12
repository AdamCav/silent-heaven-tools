import { useState, useEffect, useCallback } from 'react';
import ArtTools from './component/ArtTools';
import ClothingTools from './component/ClothingTools';
import CookingTools from './component/CookingTools';
import { Routes, Route, HashRouter, NavLink, Outlet } from "react-router-dom";

const NAV_HEIGHT = 42;

function navLinkStyle({ isActive }) {
  return {
    color: isActive ? 'var(--accent)' : 'var(--nav-text)',
    textDecoration: 'none',
    padding: '0 16px',
    lineHeight: NAV_HEIGHT + 'px',
    fontWeight: 600,
    fontFamily: 'system-ui, "Segoe UI", sans-serif',
    fontSize: '14px',
  };
}

const THEMES = ['light', 'dark', 'haven']; // cycle order; "haven" = original warm look
const THEME_LABEL = { light: 'Light', dark: 'Dark', haven: 'Haven' };

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('sh_theme');
    if (THEMES.includes(saved)) return saved;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  } catch (e) {
    return 'light';
  }
}

function Layout({ theme, toggleTheme }) {
  const nextTheme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: NAV_HEIGHT, zIndex: 9999,
        background: 'var(--nav-bg)', borderBottom: '1px solid #403a33',
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
      <button
        onClick={toggleTheme}
        title={'Theme: ' + THEME_LABEL[theme] + ' — click for ' + THEME_LABEL[nextTheme]}
        aria-label="Switch theme"
        style={{
          position: 'fixed', bottom: '12px', left: '12px', width: '26px', height: '26px',
          zIndex: 10000, cursor: 'pointer', borderRadius: '4px',
          border: '2px solid var(--accent)',
          background: theme === 'light' ? 'transparent' : 'var(--accent)',
          padding: 0,
        }}
      />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('sh_theme', theme); } catch (e) {}
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length]);
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
          <Route path="/" element={<ClothingTools />} />
          <Route path="/clothes" element={<ClothingTools />} />
          <Route path="/art" element={<ArtTools />} />
          <Route path="/cooking" element={<CookingTools theme={theme} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

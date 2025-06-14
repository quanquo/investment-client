import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showApps, setShowApps] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // In a real app, you'd implement actual search functionality
      alert(`Searching for: ${searchTerm}`);
    }
  };

  const apps = [
    { name: 'Gmail', icon: '📧', color: '#ea4335' },
    { name: 'Maps', icon: '🗺️', color: '#34a853' },
    { name: 'YouTube', icon: '📺', color: '#ff0000' },
    { name: 'Drive', icon: '📁', color: '#4285f4' },
    { name: 'Calendar', icon: '📅', color: '#ea4335' },
    { name: 'Photos', icon: '📷', color: '#4285f4' },
    { name: 'Docs', icon: '📄', color: '#4285f4' },
    { name: 'Sheets', icon: '📊', color: '#0f9d58' },
    { name: 'Slides', icon: '📊', color: '#f4b400' }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <a href="#" className="header-link">About</a>
          <a href="#" className="header-link">Store</a>
        </div>
        <div className="header-right">
          <a href="#" className="header-link">Gmail</a>
          <a href="#" className="header-link">Images</a>
          <div className="apps-menu" onClick={() => setShowApps(!showApps)}>
            <div className="apps-icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            {showApps && (
              <div className="apps-dropdown">
                <div className="apps-grid">
                  {apps.map((app, index) => (
                    <div key={index} className="app-item">
                      <div className="app-icon" style={{ backgroundColor: app.color }}>
                        {app.icon}
                      </div>
                      <span className="app-name">{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="profile-pic">
            <img src="https://via.placeholder.com/32/4285f4/ffffff?text=U" alt="Profile" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="logo-container">
          <div className="google-logo">
            <span className="letter-g-blue">G</span>
            <span className="letter-o-red">o</span>
            <span className="letter-o-yellow">o</span>
            <span className="letter-g-blue">g</span>
            <span className="letter-l-green">l</span>
            <span className="letter-e-red">e</span>
          </div>
        </div>

        <form onSubmit={handleSearch} className="search-form">
          <div className="search-container">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Google or type a URL"
            />
            <div className="mic-icon">🎤</div>
            <div className="camera-icon">📷</div>
          </div>
        </form>

        <div className="button-container">
          <button type="submit" className="search-button" onClick={handleSearch}>
            Google Search
          </button>
          <button className="search-button">
            I'm Feeling Lucky
          </button>
        </div>

        <div className="language-options">
          Google offered in: 
          <a href="#" className="lang-link">Deutsch</a>
          <a href="#" className="lang-link">Français</a>
          <a href="#" className="lang-link">Español</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-country">Germany</div>
        <div className="footer-links">
          <div className="footer-left">
            <a href="#" className="footer-link">Advertising</a>
            <a href="#" className="footer-link">Business</a>
            <a href="#" className="footer-link">How Search works</a>
          </div>
          <div className="footer-center">
            <a href="#" className="footer-link carbon-neutral">
              🍃 Carbon neutral since 2007
            </a>
          </div>
          <div className="footer-right">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
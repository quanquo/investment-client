import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showProjects, setShowProjects] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Search through portfolio content
      const searchResults = projects.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      if (searchResults.length > 0) {
        alert(`Found ${searchResults.length} project(s) matching: ${searchTerm}`);
      } else {
        alert(`No projects found for: ${searchTerm}`);
      }
    }
  };

  const projects = [
    { name: 'Web Apps', icon: '🌐', color: '#4285f4', tech: ['React', 'JavaScript'] },
    { name: 'Mobile Apps', icon: '📱', color: '#34a853', tech: ['React Native', 'Flutter'] },
    { name: 'UI/UX Design', icon: '🎨', color: '#ea4335', tech: ['Figma', 'Sketch'] },
    { name: 'Backend APIs', icon: '🔧', color: '#ff6d00', tech: ['Node.js', 'Python'] },
    { name: 'Databases', icon: '🗄️', color: '#9c27b0', tech: ['MongoDB', 'PostgreSQL'] },
    { name: 'AI/ML Projects', icon: '🤖', color: '#00bcd4', tech: ['TensorFlow', 'Python'] },
    { name: 'Open Source', icon: '📦', color: '#4caf50', tech: ['GitHub', 'npm'] },
    { name: 'Freelance Work', icon: '💼', color: '#ff9800', tech: ['Various'] },
    { name: 'Certifications', icon: '🏆', color: '#f4b400', tech: ['AWS', 'Google'] }
  ];

  // Financial instruments data with bought price, quantity, and calculated total
  const instruments = [
    { 
      name: 'AAPL (Apple Inc.)', 
      boughtPrice: '$150.25', 
      quantity: 15,
      // Calculate total by extracting the number from boughtPrice and multiplying by quantity
      get total() {
        return '$' + (parseFloat(this.boughtPrice.replace('$', '')) * this.quantity).toFixed(2);
      }
    },
    { 
      name: 'MSFT (Microsoft Corp)', 
      boughtPrice: '$380.65', 
      quantity: 8,
      get total() {
        return '$' + (parseFloat(this.boughtPrice.replace('$', '')) * this.quantity).toFixed(2);
      }
    },
    { 
      name: 'GOOGL (Alphabet Inc)', 
      boughtPrice: '$125.30', 
      quantity: 12,
      get total() {
        return '$' + (parseFloat(this.boughtPrice.replace('$', '')) * this.quantity).toFixed(2);
      }
    },
    { 
      name: 'AMZN (Amazon)', 
      boughtPrice: '$145.20', 
      quantity: 10,
      get total() {
        return '$' + (parseFloat(this.boughtPrice.replace('$', '')) * this.quantity).toFixed(2);
      }
    },
    { 
      name: 'TSLA (Tesla Inc)', 
      boughtPrice: '$190.75', 
      quantity: 20,
      get total() {
        return '$' + (parseFloat(this.boughtPrice.replace('$', '')) * this.quantity).toFixed(2);
      }
    },
    { 
      name: 'META (Meta Platforms)', 
      boughtPrice: '$320.40', 
      quantity: 6,
      get total() {
        return '$' + (parseFloat(this.boughtPrice.replace('$', '')) * this.quantity).toFixed(2);
      }
    },
    { 
      name: 'NVDA (NVIDIA Corp)', 
      boughtPrice: '$780.15', 
      quantity: 4,
      get total() {
        return '$' + (parseFloat(this.boughtPrice.replace('$', '')) * this.quantity).toFixed(2);
      }
    },
    { 
      name: 'BRK.B (Berkshire Hathaway)', 
      boughtPrice: '$395.80', 
      quantity: 5,
      get total() {
        return '$' + (parseFloat(this.boughtPrice.replace('$', '')) * this.quantity).toFixed(2);
      }
    },
    { 
      name: 'JPM (JPMorgan Chase)', 
      boughtPrice: '$180.90', 
      quantity: 11,
      get total() {
        return '$' + (parseFloat(this.boughtPrice.replace('$', '')) * this.quantity).toFixed(2);
      }
    },
    { 
      name: 'V (Visa Inc)', 
      boughtPrice: '$250.30', 
      quantity: 9,
      get total() {
        return '$' + (parseFloat(this.boughtPrice.replace('$', '')) * this.quantity).toFixed(2);
      }
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <a href="#about" className="header-link">About Me</a>
          <a href="#blog" className="header-link">Blog</a>
        </div>
        <div className="header-right">
          <a href="#contact" className="header-link">Contact</a>
          <div className="apps-menu" onClick={() => setShowProjects(!showProjects)}>
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
            {showProjects && (
              <div className="apps-dropdown">
                <div className="apps-grid">
                  {projects.map((project, index) => (
                    <div key={index} className="app-item">
                      <div className="app-icon" style={{ backgroundColor: project.color }}>
                        {project.icon}
                      </div>
                      <span className="app-name">{project.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="profile-pic">
            <img src="https://via.placeholder.com/32/6366f1/ffffff?text=👨‍💻" alt="Portfolio" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="logo-container">
          <div className="portfolio-logo">
            <span className="letter-p-blue">P</span>
            <span className="letter-o-red">o</span>
            <span className="letter-r-yellow">r</span>
            <span className="letter-t-blue">t</span>
            <span className="letter-f-green">f</span>
            <span className="letter-o-red">o</span>
            <span className="letter-l-purple">l</span>
            <span className="letter-i-orange">i</span>
            <span className="letter-o-red">o</span>
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
              placeholder="Search my projects, skills, or experience"
            />
            <div className="mic-icon">🎤</div>
            <div className="camera-icon">📷</div>
          </div>
        </form>

        <div className="button-container">
          <button type="submit" className="search-button" onClick={handleSearch}>
            Portfolio Search
          </button>
          <button className="search-button" onClick={() => window.open('#contact', '_self')}>
            Get In Touch
          </button>
        </div>

        {/* Instruments Table */}
        <div className="instruments-table-container">
          <table className="instruments-table">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Bought Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {instruments.map((instrument, index) => (
                <tr key={index}>
                  <td>{instrument.name}</td>
                  <td>{instrument.boughtPrice}</td>
                  <td>{instrument.quantity}</td>
                  <td>{instrument.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-country">Based in Your Location</div>
        <div className="footer-links">
          <div className="footer-left">
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#testimonials" className="footer-link">Testimonials</a>
          </div>
          <div className="footer-center">
            <a href="#availability" className="footer-link carbon-neutral">
              🟢 Available for new projects
            </a>
          </div>
          <div className="footer-right">
            <a href="#linkedin" className="footer-link">LinkedIn</a>
            <a href="#github" className="footer-link">GitHub</a>
            <a href="#email" className="footer-link">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
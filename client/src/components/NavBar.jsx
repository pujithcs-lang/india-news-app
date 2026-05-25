function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">📰</span>
        <span className="brand-name">IndiaNews</span>
      </div>
      <div className="navbar-info">
        <span className="live-badge">● LIVE</span>
        <span className="navbar-date">
          {new Date().toLocaleDateString('en-IN', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </span>
      </div>
    </nav>
  )
}

export default Navbar
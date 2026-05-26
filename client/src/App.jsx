import { useState, useEffect } from 'react'
import NewsCard from './components/NewsCard'
import Navbar from './components/Navbar'
import './styles/index.css'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        setArticles(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Fetching latest India news...</p>
    </div>
  )

  if (error) return (
    <div className="error">
      <h2>Something went wrong</h2>
      <p>{error}</p>
    </div>
  )

  return (
    <div className="app">
      <Navbar />
      <main className="news-grid">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </main>
    </div>
  )
}

export default App
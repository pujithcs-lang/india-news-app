function NewsCard({ article }) {
  const date = new Date(article.publishedAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <div className="news-card">
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title}
          className="news-image"
        />
      )}
      <div className="news-content">
        <span className="news-source">{article.source.name}</span>
        <h2 className="news-title">{article.title}</h2>
        <p className="news-description">{article.description}</p>
        <div className="news-footer">
          <span className="news-date">{date}</span>
          <a 
            href={article.url} 
            target="_blank" 
            rel="noreferrer"
            className="read-more"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
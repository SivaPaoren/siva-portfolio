import React from 'react'

const NewsList = ({ title, items, loading, error }) => {
  return (
    <div className="news-card">
      <div className="news-header">
        <h3>{title}</h3>
      </div>
      <div className="news-body">
        {loading && <p className="muted">Loading latest stories…</p>}
        {error && <p className="error-text">{error}</p>}
        {!loading && !error && items.length === 0 && (
          <p className="muted">No articles found right now.</p>
        )}
        <div className="news-list">
          {items.map(article => (
            <article key={article.url} className="news-item">
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="news-title"
              >
                {article.title}
              </a>
              {article.source && (
                <p className="news-meta">
                  {article.source} •{' '}
                  {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString()
                    : ''}
                </p>
              )}
              {article.description && (
                <p className="news-description">{article.description}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsList

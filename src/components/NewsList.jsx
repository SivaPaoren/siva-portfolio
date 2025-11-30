// src/components/NewsList.jsx
import React from 'react'

const NewsList = ({ items, loading, error, emptyMessage }) => {
  if (loading) {
    return <p className="muted">Loading latest stories…</p>
  }

  if (error) {
    return (
      <p className="error-text">
        Couldn&apos;t load news right now. Please check back later.
      </p>
    )
  }

  if (!items || items.length === 0) {
    return <p className="muted">{emptyMessage}</p>
  }

  return (
    <div className="news-list">
      {items.map(article => (
        <div key={article.url} className="news-item">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-title"
          >
            {article.title}
          </a>
          <p className="news-meta">
            {article.source?.name ? `${article.source.name} · ` : ''}
            {article.publishedAt
              ? new Date(article.publishedAt).toLocaleDateString()
              : ''}
          </p>
          {article.description && (
            <p className="news-description">{article.description}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default NewsList

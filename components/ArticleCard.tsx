
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onReadMore: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onReadMore }) => {
  return (
    <article className="bg-brand-secondary rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-2">
            {article.tags.map(tag => (
                <span key={tag} className="text-xs bg-brand-accent text-brand-cyan font-semibold px-2 py-1 rounded-full">{tag}</span>
            ))}
        </div>
        <h2 className="text-2xl font-bold mb-2 text-white">{article.title}</h2>
        <p className="text-brand-light mb-4">{article.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-brand-light">
          <span>Oleh {article.author} - {article.date}</span>
          <button 
            onClick={() => onReadMore(article)}
            className="bg-brand-cyan text-brand-primary font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors duration-300"
          >
            Baca Selengkapnya
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

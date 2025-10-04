
import React from 'react';
import { Article } from '../types';

interface ArticleDetailProps {
  article: Article;
  onGoBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onGoBack }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={onGoBack} className="mb-8 text-brand-cyan font-semibold hover:underline flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Kembali ke Semua Artikel
      </button>
      <article className="bg-brand-secondary rounded-lg shadow-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">{article.title}</h1>
        <div className="text-brand-light mb-6">
          <span>Oleh {article.author}</span> | <span>{article.date}</span>
        </div>
        <img src={article.imageUrl} alt={article.title} className="w-full h-auto rounded-lg mb-8" />
        <div 
            className="prose prose-invert max-w-none text-brand-text prose-p:my-4 prose-headings:text-brand-cyan prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: article.content }}
        />
        <hr className="my-8 border-brand-accent" />
        <div className="text-center">
          <p className="text-brand-light">Suka dengan artikel ini? Bagikan dengan temanmu!</p>
          {/* Social share buttons can be added here */}
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;

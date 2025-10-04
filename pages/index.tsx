import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { Article, ModalType } from '../types';
import { articles as initialArticles } from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import ArticleDetail from '../components/ArticleDetail';
import CookieBanner from '../components/CookieBanner';
import Modal from '../components/Modal';
import ContactForm from '../components/ContactForm';
import PrivacyPolicy from '../components/PrivacyPolicy';
import AdPlaceholder from '../components/AdPlaceholder';

const HomePage: React.FC = () => {
  const [articles] = useState<Article[]>(initialArticles);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [modalOpen, setModalOpen] = useState<ModalType>(ModalType.NONE);

  useEffect(() => {
    // In Next.js, localStorage is only available on the client side.
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setShowCookieBanner(true);
      }
    }
  }, []);

  const handleAcceptCookies = useCallback(() => {
    localStorage.setItem('cookie-consent', 'true');
    setShowCookieBanner(false);
  }, []);

  const handleSelectArticle = useCallback((article: Article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = useCallback(() => {
    setSelectedArticle(null);
  }, []);

  const handleOpenModal = useCallback((type: ModalType) => {
    setModalOpen(type);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(ModalType.NONE);
  }, []);

  const renderModalContent = () => {
    switch(modalOpen) {
      case ModalType.CONTACT:
        return <ContactForm />;
      case ModalType.PRIVACY:
        return <PrivacyPolicy />;
      default:
        return null;
    }
  }

  const getModalTitle = () => {
    switch(modalOpen) {
      case ModalType.CONTACT:
        return "Hubungi Kami";
      case ModalType.PRIVACY:
        return "Kebijakan Privasi";
      default:
        return "";
    }
  }

  return (
    <>
      <Head>
        <title>IAMAI - awanbyru</title>
        <meta name="description" content="A modern web blog focused on AI and prompting, featuring premium AI image collections, prompt guides, and fostering a positive community between readers and the author." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-brand-primary text-brand-text">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {selectedArticle ? (
            <ArticleDetail article={selectedArticle} onGoBack={handleGoBack} />
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-brand-text border-l-4 border-brand-cyan pl-4">Artikel Terbaru</h1>
                <div className="space-y-8">
                  {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} onReadMore={handleSelectArticle} />
                  ))}
                </div>
              </div>
              <aside className="w-full lg:w-1/3">
                <div className="sticky top-8 space-y-8">
                  <div className="bg-brand-secondary p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4 border-l-4 border-brand-cyan pl-3">Tentang Penulis</h2>
                    <p className="text-brand-light">
                      Selamat datang di IAMAI! Saya Awan Byru, seorang penggemar AI yang suka berbagi pengetahuan tentang prompting, seni digital, dan potensi tak terbatas dari kecerdasan buatan.
                    </p>
                  </div>
                  <AdPlaceholder height="h-64" />
                  <div className="bg-brand-secondary p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4 border-l-4 border-brand-cyan pl-3">Artikel Populer</h2>
                    <ul className="space-y-3">
                      {articles.slice(0, 3).map(article => (
                         <li key={`popular-${article.id}`} className="text-brand-light hover:text-brand-cyan cursor-pointer transition-colors" onClick={() => handleSelectArticle(article)}>
                           {article.title}
                         </li>
                      ))}
                    </ul>
                  </div>
                  <AdPlaceholder height="h-96" />
                </div>
              </aside>
            </div>
          )}
        </main>
        <Footer onOpenModal={handleOpenModal} />
        {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} />}
        <Modal isOpen={modalOpen !== ModalType.NONE} onClose={handleCloseModal} title={getModalTitle()}>
          {renderModalContent()}
        </Modal>
      </div>
    </>
  );
};

export default HomePage;
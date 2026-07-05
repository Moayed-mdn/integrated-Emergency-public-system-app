'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/Container';
import { awarenessService } from '@/services/awarenessService';
import { AwarenessArticle } from '@/types';
import { ApiError, apiClient } from '@/lib/api/client';

export default function AwarenessPage() {
  const t = useTranslations('Awareness');
  const locale = useLocale();
  const [articles, setArticles] = useState<AwarenessArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<AwarenessArticle | null>(null);

  useEffect(() => {
    // Set the locale in API client
    apiClient.setLocale(locale);
    fetchArticles();
  }, [locale]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await awarenessService.getAll();
      setArticles(response.data.articles);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || t('error'));
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  if (loading) {
    return (
      <section className="py-16 px-4">
        <Container>
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-color)]"></div>
            <p className="mt-4 text-[var(--text-color)]">{t('loading')}</p>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4">
        <Container>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-700">{error}</p>
            <button
              onClick={fetchArticles}
              className="mt-4 bg-[var(--primary-color)] text-white px-6 py-2 rounded-lg hover:bg-[var(--secondary-color)] transition-colors"
            >
              {t('retry')}
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="py-16 px-4">
        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Articles Grid */}
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[var(--text-color)] text-lg">{t('noArticles')}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => setSelectedArticle(article)}
                >
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-[var(--secondary-color)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {article.news_type.name}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--primary-color)] mb-3 group-hover:text-[var(--secondary-color)] transition-colors">
                    {article.title}
                  </h3>

                  {/* Body Preview */}
                  <p className="text-[var(--text-color)] line-clamp-3 mb-4">
                    {article.body}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-[var(--primary-color)] font-semibold group-hover:text-[var(--secondary-color)] transition-colors">
                    <span>{t('readMore')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/50  flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
              <div className="flex-1">
                <span className="inline-block bg-[var(--secondary-color)] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {selectedArticle.news_type.name}
                </span>
                <h2 className="text-3xl font-bold text-[var(--primary-color)]">
                  {selectedArticle.title}
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-color)] text-lg leading-relaxed whitespace-pre-line">
                  {selectedArticle.body}
                </p>
              </div>

              {/* Close Button */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-[var(--primary-color)] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[var(--secondary-color)] transition-colors"
                >
                  {t('close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

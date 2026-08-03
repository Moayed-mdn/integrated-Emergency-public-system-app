'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/Container';
import { postService } from '@/services/postService';
import { Post } from '@/types';
import { ApiError, apiClient } from '@/lib/api/client';

export default function PostsPage() {
  const t = useTranslations('Posts');
  const locale = useLocale();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    apiClient.setLocale(locale);
    fetchPosts(currentPage);
  }, [locale, currentPage]);

  const fetchPosts = async (page: number) => {
    try {
      setLoading(true);
      setError('');
      
      const response = await postService.getAllPosts(page);
      setPosts(response.data.posts || []);
      
      // Get pagination info
      const pagination = (response as any).pagination;
      if (pagination) {
        setTotalPages(pagination.last_page || 1);
      }
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || t('error'));
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
              onClick={() => fetchPosts(currentPage)}
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

          {/* Posts Grid */}
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-[var(--text-color)] text-lg">{t('noPosts')}</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                    onClick={() => setSelectedPost(post)}
                  >
                    {/* Media */}
                    {post.media && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.media}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      {/* Type Badge + Official Badge */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.types?.map((type, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-[var(--secondary-color)] text-white text-xs font-semibold px-3 py-1 rounded-full"
                          >
                            {type}
                          </span>
                        ))}
                        {!!post.by_admin && (
                          <span className="inline-block bg-[var(--primary-color)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {t('official')}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      {post.title && (
                        <h3 className="text-xl font-bold text-[var(--primary-color)] mb-3 line-clamp-2 group-hover:text-[var(--secondary-color)] transition-colors">
                          {post.title}
                        </h3>
                      )}

                      {/* Body Preview */}
                      {post.body && (
                        <p className="text-[var(--text-color)] line-clamp-3 mb-4">
                          {post.body}
                        </p>
                      )}

                      {/* Address */}
                      <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-[var(--primary-color)]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>
                          {post.address.street && `${post.address.street}, `}
                          {post.address.city}{post.address.governorate && `, ${post.address.governorate}`}
                        </span>
                      </div>

                      {/* Date & Time */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>{post.created_at.date} â€¢ {post.created_at.time}</span>
                      </div>

                      {/* Location Badge */}
                      {post.location && (
                        <div className="inline-flex items-center gap-1 text-xs text-[var(--primary-color)] bg-[var(--primary-color)]/10 px-2 py-1 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {t('hasLocation')}
                        </div>
                      )}

                      {/* Read More */}
                      <div className="flex items-center text-[var(--primary-color)] font-semibold mt-4 group-hover:text-[var(--secondary-color)] transition-colors">
                        <span>{t('readMore')}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      currentPage === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-[var(--primary-color)] text-white hover:bg-[var(--secondary-color)]'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t('previous')}
                  </button>

                  <span className="text-[var(--text-color)] font-medium">
                    {t('page')} {currentPage} {t('of')} {totalPages}
                  </span>

                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      currentPage === totalPages
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-[var(--primary-color)] text-white hover:bg-[var(--secondary-color)]'
                    }`}
                  >
                    {t('next')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </Container>
      </section>

      {/* Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedPost.types?.map((type, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-[var(--secondary-color)] text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                  {!!selectedPost.by_admin && (
                    <span className="inline-block bg-[var(--primary-color)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t('official')}
                    </span>
                  )}
                </div>
                {selectedPost.title && (
                  <h2 className="text-3xl font-bold text-[var(--primary-color)]">
                    {selectedPost.title}
                  </h2>
                )}
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
              {/* Media */}
              {selectedPost.media && (
                <img
                  src={selectedPost.media}
                  alt=""
                  className="w-full rounded-lg mb-6"
                />
              )}

              {/* Body */}
              {selectedPost.body && (
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-[var(--text-color)] text-lg leading-relaxed whitespace-pre-line">
                    {selectedPost.body}
                  </p>
                </div>
              )}

              {/* Location Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2 text-[var(--text-color)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 text-[var(--primary-color)]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--primary-color)]">{t('location')}</div>
                    <div>
                      {selectedPost.address.street && `${selectedPost.address.street}, `}
                      {selectedPost.address.city}{selectedPost.address.governorate && `, ${selectedPost.address.governorate}`}
                    </div>
                    {selectedPost.location && (
                      <div className="text-sm text-gray-500 mt-1">
                        {t('coordinates')}: {selectedPost.location.latitude}, {selectedPost.location.longitude}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex items-center gap-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{selectedPost.created_at.date} â€¢ {selectedPost.created_at.time}</span>
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

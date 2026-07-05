'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/Container';
import { suggestionService } from '@/services/suggestionService';
import { ApiError, apiClient } from '@/lib/api/client';

export default function HelpPage() {
  const t = useTranslations('Help');
  const locale = useLocale();
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [charCount, setCharCount] = useState(0);

  // Set locale in API client when component mounts or locale changes
  useEffect(() => {
    apiClient.setLocale(locale);
  }, [locale]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (content.trim().length < 10) {
      setError(t('errors.min_length'));
      return;
    }

    if (content.trim().length > 1000) {
      setError(t('errors.max_length'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await suggestionService.create({ 
        content: content.trim() 
      });

      if (response.status === 201) {
        setSuccess(true);
        setContent('');
        setCharCount(0);
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }
    } catch (err) {
      const apiError = err as ApiError;
      
      // Handle validation errors
      if (apiError.errors && apiError.errors.content) {
        setError(apiError.errors.content[0]);
      } else {
        setError(apiError.message || t('errors.submission_failed'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContent(value);
    setCharCount(value.length);
    setError('');
  };

  return (
    <section className="py-16 px-4">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-[var(--text-color)] max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Help Resources */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-6">
              {t('resources.title')}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--secondary-color)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--primary-color)] mb-1">
                    {t('resources.item1.title')}
                  </h3>
                  <p className="text-[var(--text-color)]">
                    {t('resources.item1.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--secondary-color)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--primary-color)] mb-1">
                    {t('resources.item2.title')}
                  </h3>
                  <p className="text-[var(--text-color)]">
                    {t('resources.item2.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--secondary-color)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--primary-color)] mb-1">
                    {t('resources.item3.title')}
                  </h3>
                  <p className="text-[var(--text-color)]">
                    {t('resources.item3.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestion Form */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-2">
              {t('form.title')}
            </h2>
            <p className="text-[var(--text-color)] mb-6">
              {t('form.subtitle')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="suggestion" 
                  className="block text-sm font-medium text-[var(--primary-color)] mb-2"
                >
                  {t('form.label')}
                </label>
                <textarea
                  id="suggestion"
                  name="content"
                  rows={6}
                  value={content}
                  onChange={handleChange}
                  placeholder={t('form.placeholder')}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                    focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent 
                    disabled:bg-gray-100 disabled:cursor-not-allowed
                    text-gray-900 placeholder-gray-400
                    transition-colors"
                  required
                />
                <div className="flex justify-between items-center mt-2">
                  <span 
                    className={`text-sm ${
                      charCount < 10 
                        ? 'text-red-500' 
                        : charCount > 1000 
                        ? 'text-red-500' 
                        : 'text-[var(--text-color)]'
                    }`}
                  >
                    {charCount} / 1000 {t('form.characters')}
                    {charCount < 10 && ` (${t('form.min_required')} 10)`}
                  </span>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-green-700">{t('form.success')}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || content.trim().length < 10}
                className="w-full bg-[var(--primary-color)] text-white font-semibold 
                  py-3 px-6 rounded-lg 
                  hover:bg-[var(--secondary-color)] 
                  disabled:bg-gray-300 disabled:cursor-not-allowed
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('form.submitting')}
                  </span>
                ) : (
                  t('form.submit')
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-[var(--text-color)] text-sm">
              {t('contact.text')} <a href="mailto:support@emergency.sy" className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-semibold">support@emergency.sy</a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}


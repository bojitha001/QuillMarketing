import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  type?: string;
  noindex?: boolean;
}

export function SEO({
  title = 'QuillMarketing - Modern Marketing Solutions',
  description = 'Transform your business with QuillMarketing\'s innovative digital marketing solutions. Expert services in SEO, content marketing, and brand strategy.',
  keywords = 'marketing, digital marketing, SEO, content marketing, brand strategy',
  ogImage = 'https://quillmarketing.com/og-image.jpg',
  ogUrl = 'https://quillmarketing.com/',
  canonicalUrl,
  type = 'website',
  noindex = false,
}: SEOProps) {
  const siteTitle = title.includes('QuillMarketing') ? title : `${title} | QuillMarketing`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
}

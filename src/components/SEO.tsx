import { useEffect } from 'react';

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
  ogImage = 'https://quill-marketing-9nvg.vercel.app/og-image.jpg',
  ogUrl = 'https://quill-marketing-9nvg.vercel.app/',
  canonicalUrl,
  type = 'website',
  noindex = false,
}: SEOProps) {
  const siteTitle = title.includes('QuillMarketing') ? title : `${title} | QuillMarketing`;
  
  useEffect(() => {
    // Update document title
    document.title = siteTitle;
    
    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (attribute === 'property') {
          element.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
        } else {
          element.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };
    
    // Update primary meta tags
    updateMetaTag('meta[name="title"]', 'name', siteTitle);
    updateMetaTag('meta[name="description"]', 'name', description);
    updateMetaTag('meta[name="keywords"]', 'name', keywords);
    
    if (noindex) {
      updateMetaTag('meta[name="robots"]', 'name', 'noindex, nofollow');
    } else {
      updateMetaTag('meta[name="robots"]', 'name', 'index, follow');
    }
    
    // Update Open Graph tags
    updateMetaTag('meta[property="og:type"]', 'property', type);
    updateMetaTag('meta[property="og:url"]', 'property', ogUrl);
    updateMetaTag('meta[property="og:title"]', 'property', siteTitle);
    updateMetaTag('meta[property="og:description"]', 'property', description);
    updateMetaTag('meta[property="og:image"]', 'property', ogImage);
    
    // Update Twitter tags
    updateMetaTag('meta[property="twitter:card"]', 'property', 'summary_large_image');
    updateMetaTag('meta[property="twitter:url"]', 'property', ogUrl);
    updateMetaTag('meta[property="twitter:title"]', 'property', siteTitle);
    updateMetaTag('meta[property="twitter:description"]', 'property', description);
    updateMetaTag('meta[property="twitter:image"]', 'property', ogImage);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalUrl) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [siteTitle, description, keywords, ogImage, ogUrl, canonicalUrl, type, noindex]);
  
  return null;
}

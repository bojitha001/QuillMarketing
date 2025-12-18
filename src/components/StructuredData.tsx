import { useEffect, useMemo } from 'react';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  socialLinks?: string[];
}

export function OrganizationSchema({
  name = "QuillMarketing",
  url = "https://quillmarketing.com",
  logo = "https://quillmarketing.com/logo.png",
  description = "Transform your business with QuillMarketing's innovative digital marketing solutions.",
  socialLinks = [
    "https://twitter.com/quillmarketing",
    "https://facebook.com/quillmarketing",
    "https://linkedin.com/company/quillmarketing"
  ]
}: OrganizationSchemaProps) {
  const schema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    sameAs: socialLinks
  }), [name, url, logo, description, socialLinks]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'organization-schema';
    
    // Remove existing schema if present
    const existing = document.getElementById('organization-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const element = document.getElementById('organization-schema');
      if (element) {
        element.remove();
      }
    };
  }, [schema]);

  return null;
}

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function WebPageSchema({ name, description, url }: WebPageSchemaProps) {
  const schema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url
  }), [name, description, url]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'webpage-schema';
    
    const existing = document.getElementById('webpage-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const element = document.getElementById('webpage-schema');
      if (element) {
        element.remove();
      }
    };
  }, [schema]);

  return null;
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "QuillMarketing"
}: ArticleSchemaProps) {
  const schema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: "QuillMarketing",
      logo: {
        "@type": "ImageObject",
        url: "https://quillmarketing.com/logo.png"
      }
    }
  }), [headline, description, image, datePublished, dateModified, author]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'article-schema';
    
    const existing = document.getElementById('article-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const element = document.getElementById('article-schema');
      if (element) {
        element.remove();
      }
    };
  }, [schema]);

  return null;
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }), [items]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'breadcrumb-schema';
    
    const existing = document.getElementById('breadcrumb-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const element = document.getElementById('breadcrumb-schema');
      if (element) {
        element.remove();
      }
    };
  }, [schema]);

  return null;
}

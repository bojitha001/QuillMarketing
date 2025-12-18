# Quick SEO Reference

## ✅ Completed Setup

Your Vite React project now has full SEO implementation:

1. ✅ **react-helmet-async** installed
2. ✅ **SEO Component** created (`src/components/SEO.tsx`)
3. ✅ **Structured Data Components** created (`src/components/StructuredData.tsx`)
4. ✅ **Meta tags** added to `index.html`
5. ✅ **robots.txt** created
6. ✅ **sitemap.xml** created
7. ✅ **Home page** updated with SEO

## 🎯 Using SEO in New Pages

### Step 1: Import the SEO component
```tsx
import { SEO } from "@/components/SEO";
```

### Step 2: Add to your page
```tsx
export default function YourPage() {
  return (
    <>
      <SEO 
        title="Your Page Title"
        description="Your compelling description here"
        keywords="your, relevant, keywords"
        ogUrl="https://quillmarketing.com/your-page"
        canonicalUrl="https://quillmarketing.com/your-page"
      />
      
      <div>{/* Your content */}</div>
    </>
  );
}
```

### Step 3: Add structured data (optional)
```tsx
import { OrganizationSchema, WebPageSchema } from "@/components/StructuredData";

export default function YourPage() {
  return (
    <>
      <SEO {...} />
      <WebPageSchema 
        name="Your Page"
        description="Page description"
        url="https://quillmarketing.com/your-page"
      />
      {/* content */}
    </>
  );
}
```

## 📝 SEO Best Practices

### Title Tags
- **Length**: 50-60 characters
- **Format**: "Primary Keyword - Secondary Keyword | Brand"
- **Unique**: Each page should have unique title

### Meta Descriptions
- **Length**: 150-160 characters
- **Action-oriented**: Include call-to-action
- **Relevant**: Match page content
- **Unique**: Each page should have unique description

### Keywords
- **5-10 keywords** per page
- **Natural placement** in content
- **No stuffing**: Use naturally

### Images
```tsx
// Always add alt text
<img 
  src="/image.jpg" 
  alt="Descriptive alt text for SEO and accessibility"
  loading="lazy"
/>
```

### Headings
- **One H1** per page (usually page title)
- **H2s** for main sections
- **H3-H6** for subsections
- **Logical hierarchy**

## 🚀 Before Going Live

1. **Update all URLs**:
   - `index.html` → Update domain
   - `SEO.tsx` → Update default domain
   - `sitemap.xml` → Update domain
   - `robots.txt` → Update sitemap URL

2. **Create OG Image**:
   - Size: 1200x630px
   - Place in `public/og-image.jpg`

3. **Set up Analytics**:
   ```bash
   npm install @vercel/analytics
   # or
   npm install react-ga4
   ```

4. **Submit to Search Engines**:
   - Google Search Console
   - Bing Webmaster Tools
   - Submit sitemap

5. **Enable HTTPS** (required!)

## 🔍 Testing Tools

- **Meta Tags**: View page source
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **Lighthouse**: Chrome DevTools → Lighthouse tab
- **Mobile**: https://search.google.com/test/mobile-friendly

## 📊 Available Schema Components

```tsx
// Organization (use on home page)
<OrganizationSchema />

// Webpage (use on static pages)
<WebPageSchema 
  name="Page Name"
  description="Description"
  url="https://..."
/>

// Article (use on blog posts)
<ArticleSchema 
  headline="Article Title"
  description="Description"
  image="https://..."
  datePublished="2025-12-18"
/>

// Breadcrumb (use on nested pages)
<BreadcrumbSchema 
  items={[
    { name: "Home", url: "https://..." },
    { name: "Services", url: "https://..." },
  ]}
/>
```

## 💡 Pro Tips

1. **Update sitemap.xml** when adding new pages
2. **Use semantic HTML** (`<article>`, `<section>`, `<nav>`)
3. **Internal linking** between pages
4. **Fast load times** (< 3 seconds)
5. **Mobile-first** design
6. **Regular content updates**
7. **Monitor Google Search Console**

---

For detailed information, see `SEO_GUIDE.md`

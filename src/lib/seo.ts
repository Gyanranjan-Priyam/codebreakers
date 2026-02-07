import { Metadata } from 'next'

const siteConfig = {
  name: 'CodeBreakers GCEK',
  description: 'Join CodeBreakers, the premier coding club at Government College of Engineering Kalahandi (GCEK). Learn programming, participate in hackathons, compete in coding challenges, and build innovative projects with a community of 500+ passionate developers.',
  url: 'https://www.codebreakersgcek.tech',
  ogImage: '/og-image.png',
  links: {
    instagram: 'https://www.instagram.com/codebreakers_gcek',
    linkedin: 'https://www.linkedin.com/company/codebreakers-gcek',
    github: 'https://github.com/codebreakers-gcek',
  },
}

export function generateSEO({
  title,
  description,
  image = siteConfig.ogImage,
  url,
  noIndex = false,
  keywords,
}: {
  title: string
  description?: string
  image?: string
  url?: string
  noIndex?: boolean
  keywords?: string[]
}): Metadata {
  const metaTitle = `${title} | ${siteConfig.name}`
  const metaDescription = description || siteConfig.description
  const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const metaImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`

  return {
    title,
    description: metaDescription,
    keywords: keywords || [],
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@codebreakers_gcek',
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CodeBreakers GCEK',
    alternateName: [
      'CodeBreakers',
      'CodeBreakers GCE Kalahandi',
      'Coding Club of GCE Kalahandi',
    ],
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/logo.svg`,
    description: siteConfig.description,
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bhawanipatna',
        addressRegion: 'Kalahandi',
        addressCountry: 'IN',
      },
    },
    parentOrganization: {
      '@type': 'EducationalOrganization',
      name: 'Government College of Engineering Kalahandi',
    },
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.linkedin,
      siteConfig.links.github,
    ],
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

export function generateEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: string
  image?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bhawanipatna',
        addressRegion: 'Kalahandi',
        addressCountry: 'IN',
      },
    },
    image: event.image ? `${siteConfig.url}${event.image}` : siteConfig.ogImage,
    url: `${siteConfig.url}${event.url}`,
    organizer: {
      '@type': 'Organization',
      name: 'CodeBreakers GCEK',
      url: siteConfig.url,
    },
  }
}

export function generatePersonSchema(person: {
  name: string
  role: string
  image?: string
  url?: string
  description?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    image: person.image,
    url: person.url,
    description: person.description,
    worksFor: {
      '@type': 'Organization',
      name: 'CodeBreakers GCEK',
    },
  }
}

export function generateWebPageSchema(page: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: `${siteConfig.url}${page.url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

export { siteConfig }

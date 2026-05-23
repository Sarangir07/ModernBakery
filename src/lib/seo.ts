const productionSiteUrl = "https://modernbakery.store";

function getPublicSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return productionSiteUrl;
  }

  try {
    const url = new URL(configuredUrl);
    const isLocalhost = url.hostname === "localhost" || url.hostname === "127.0.0.1";

    return isLocalhost ? productionSiteUrl : url.origin;
  } catch {
    return productionSiteUrl;
  }
}

export const siteConfig = {
  name: "Modern Bakery",
  title: "Modern Bakery Admapur | Fresh Pav, Cakes, Puffs & Biscuits",
  description:
    "Modern Bakery in Admapur, Kolhapur serves fresh pav, breads, puffs, biscuits, pastries, cakes, and bulk bakery orders.",
  url: getPublicSiteUrl(),
  phone: "+91 9823095728",
  email: "sarangisr7@gmail.com",
  address: {
    streetAddress: "Admapur, Bhudargad Subdistrict",
    addressLocality: "Kolhapur",
    addressRegion: "Maharashtra",
    postalCode: "416208",
    addressCountry: "IN",
  },
  geo: {
    latitude: 16.2084661,
    longitude: 73.9472912,
  },
  googleMapsUrl: "https://maps.app.goo.gl/BvwviroUbLQtUXQk9?g_st=iw",
  image:
    "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1332&auto=format&fit=crop",
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "@id": `${siteConfig.url}/#bakery`,
  name: siteConfig.name,
  url: siteConfig.url,
  image: siteConfig.image,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "Rs",
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  hasMap: siteConfig.googleMapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
  servesCuisine: ["Bakery", "Indian bakery", "Cakes", "Snacks"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fresh Pav Bread" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Veg Puff" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cakes" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Biscuits" } },
  ],
};

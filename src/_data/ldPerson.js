const site = require("./site.js");

module.exports = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.ownerName,
      alternateName: site.businessName,
      jobTitle: "מנחת תנועה ומרצה",
      description:
        "מנחת תנועה והתפתחות עם 20 שנות ניסיון, מעבירה הפעלות לגיל הרך, תינוקות, הכנה לכיתה א', משפחות, גיל הזהב, קניונים ואירועים.",
      knowsAbout: [
        "הפעלות תנועה לגיל הרך",
        "תנועה והתפתחות לתינוקות",
        "הכנה לכיתה א' דרך משחק ותנועה",
        "הפעלות לגיל הזהב",
        "הפעלות קהילתיות ואירועים",
      ],
      email: site.email,
      url: site.url,
    },
    {
      "@type": "LocalBusiness",
      name: site.businessName,
      founder: { "@type": "Person", name: site.ownerName },
      areaServed: "ישראל",
      email: site.email,
      url: site.url,
      description:
        'עסק להפעלות תנועה ופיתוח מוטורי לכל גיל — גנים, מעונות, מתנ"סים, קניונים, רשויות מקומיות ואירועים פרטיים.',
    },
  ],
};

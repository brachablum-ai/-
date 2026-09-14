module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  eleventyConfig.addFilter("jsonify", (value) => JSON.stringify(value));

  eleventyConfig.addFilter("toFaqSchema", (faq) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (faq || []).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }));

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};

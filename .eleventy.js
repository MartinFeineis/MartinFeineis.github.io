
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("message.js");
  eleventyConfig.addPassthroughCopy("resume.json");
  
  return {
    dir: {
      input: ".",
      output: "dist"
    }
  };
};

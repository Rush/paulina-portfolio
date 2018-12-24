module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('style.css');
  eleventyConfig.addFilter('dashes', value => {
    return value.toLowerCase().replace(/\s+/g, '-');
  });
  
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'my-portfolio',
      output: '_site'
    }
  };
};
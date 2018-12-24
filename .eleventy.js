module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/style.css');
  eleventyConfig.addFilter('dashes', value => {
    return value.toLowerCase().replace(/\s+/g, '-');
  });
  
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: '_site'
    }
  };
};
const getLangTagFallbacks = tag => {
  const parts = tag.split(/-|_/g);
  const length = parts.length;

  const [passedTag, ...fallbacks] = parts.map((part, index) => {
    return parts.slice(0, length - index).join('-');
  });

  // Reverse the fallbacks to make recursively iterating over them in the translate
  // function easier
  return fallbacks.reverse();
};

export default getLangTagFallbacks;

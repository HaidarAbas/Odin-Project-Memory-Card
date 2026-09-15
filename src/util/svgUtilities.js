const svgParser = {
  getD: (path) => {
    const re = /(?<=d=").*?(?=")/gm;

    if (!re.test(path)) {
      throw Error('SVG parser failed to find d');
    }

    return path.match(re)[0];
  },

  getFill: (path) => {
    const re = /(?<=fill=").*?(?=")/gm;

    if (!re.test(path)) {
      throw Error('SVG parser failed to find fill');
    }

    return path.match(re)[0];
  }
}

function fetchSVGData(baseURL, svgURLs) {
  const promises = svgURLs.map(async (sURL) => {
    const response = await fetch(baseURL.concat(sURL.url));
    const data = await response.json();

    return {
      name: sURL.name,
      selected: false,
      path: await data.icons[`zodiac-${sURL.name}`].body,
    }
  });
  
  return Promise.all(promises);
}

export { svgParser, fetchSVGData };
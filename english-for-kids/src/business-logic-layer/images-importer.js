function importAll(req) {
  const images = {};

  req.keys().forEach((item) => { images[item.replace('./', '')] = req(item); });

  return images;
}

const images = importAll(require.context('./../assets', true, /\.(png|jpe?g|svg|gif)$/));
export default images;

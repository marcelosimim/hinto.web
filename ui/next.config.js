/**
 * * * Este arquivo é necessário para que: o antd funcione corretamente
 *  A documentação que eu encontrei no github oficial do next para configuração do antd não me
 *  ajudou muito. Segui-la faz com que o antd fique sem aplicação de CSS. O "see" abaixo foi o que
 *  mais me ajudou a configurar devidamente o antd. Mas, ainda sim, precisei adapta-lo. Segui-lo
 *  a risca desconfigura o plugin de imagens
 * @see https://dev.to/burhanuday/using-ant-design-with-nextjs-custom-variables-for-ant-design-57m5
 *
 * * * Este arquivo é necessário para que: o plugin de imagens funcione adequadamente
 *  Outra vez a documentação oficial não me ajudou... Foi necessário seguir o "see"
 * @see https://stackoverflow.com/questions/45848055/image-you-may-need-an-appropriate-loader-to-handle-this-file-type
 *
 * * * Para configurar este arquivo da forma correta é necessário usar o withPlugins. Descobri isso
 * pelo "see" abaixo
 * @see https://stackoverflow.com/questions/60177847/how-to-combine-and-use-multiple-next-js-plugins
 *
 * @author rafaelvictor01
 */
const withLess = require('@zeit/next-less')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [withImages, { esModule: true, }],
  [withLess, {
    lessLoaderOptions: {
      javascriptEnabled: true,
    }
  }]
],
{
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000' }]
  },
})

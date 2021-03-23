/**
 * Necessário para que o plugin de imagens funcione adequadamente
 * @author rafaelvictor01
 */
const withImages = require('next-images')
module.exports = withImages({ esModule: true })

/**
 * Necessário para que o antd funcione corretamente funcione adequadamente
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-ant-design
 * @author rafaelvictor01
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer()

const links = `
  Github:    https://github.com/amio
  Twitter:   https://twitter.com/amiocn
  Instagram: https://instagram.com/amiocn
`

module.exports = function main (name) {
  name = name || 'amio'
  console.log(`\n  Hi, This is ${name}.`)
  console.log(links)
}

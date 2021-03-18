const faker = require('faker')

function generateCommerce () {

  var products = []

  for (var id = 0; id < 50; id++) {
    let title = faker.commerce.product()
    let description = faker.commerce.productDescription()
    let category = faker.commerce.department()
    let price = faker.commerce.price()
    let image = 'https://via.placeholder.com/450x550'
    let thumbnail = 'https://via.placeholder.com/150x150'
    products.push({
      id, title, description, price, image, thumbnail
    })
  }

  return { "products": products }

}

module.exports = generateCommerce

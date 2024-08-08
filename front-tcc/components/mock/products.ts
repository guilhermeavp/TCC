import { faker } from '@faker-js/faker';

export const products = Array.from({ length: 100 }).map(() => (
{
    id:faker.string.uuid(),
    image: faker.image.urlPicsumPhotos(),
    name: faker.commerce.productName(),
    subtitle: faker.commerce.productDescription(),
    quantidade:	faker.number.int({ max: 10 }),
    minimo:	faker.number.int({ min: 1,max: 10 }),
    maximo:	faker.number.int({ min: 10,max: 20 }),
    fabricante:	faker.commerce.productDescription(),
    categoria:	faker.commerce.productAdjective()
}))

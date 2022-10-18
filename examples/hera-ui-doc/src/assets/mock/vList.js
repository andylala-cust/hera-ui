import { faker } from '@faker-js/faker'

const V_LIST_DATA = []

for (let i = 1; i <= 10000; i++) {
    V_LIST_DATA.push({
        row: i,
        content: faker.lorem.sentence()
    })
}

export { V_LIST_DATA }

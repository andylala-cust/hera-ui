import { faker } from "@faker-js/faker";

const V_LIST_DATA = [],
  V_LIST_DATA_2 = [];

for (let i = 1; i <= 10000; i++) {
  V_LIST_DATA.push({
    row: i,
    content: faker.lorem.sentence(),
  });
  V_LIST_DATA_2.push({
    row: i,
    content: faker.lorem.sentences(),
    paragraphs: faker.lorem.paragraphs(),
  });
}

export { V_LIST_DATA, V_LIST_DATA_2 };

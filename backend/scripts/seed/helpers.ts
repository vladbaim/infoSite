import { Connection } from 'typeorm';
import { ApiTagEnum } from '../../../common/api.enum';

export const insertObjects = async <T>(connection: Connection, table: ApiTagEnum, objects: T[]) => {
  if (!objects.length) {
    return;
  }
  const columns = Object.keys(objects[0])
    .map((column) => `"${column}"`)
    .join(', ');
  let query = `INSERT INTO public."${table}" (${columns}) VALUES `;

  for (const object of objects) {
    const values = Object.values(object)
      .map((value) => `'${value}'`)
      .join(', ');

    query += `(${values})${objects.indexOf(object) === objects.length - 1 ? ';' : ', '}`;
  }
  // console.log(query);
  await connection.query(query);
  console.log(`${objects.length} of ${table} created!`);
};

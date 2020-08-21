import { normalize, schema } from 'normalizr'

const school = new schema.Entity('schools')
const schoolListSchema = { schools: [school] }

export const getEntities = data => {
  return normalize(data, schoolListSchema).entities
}

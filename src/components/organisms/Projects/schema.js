import { normalize, schema } from 'normalizr'
const company = new schema.Entity('company')
const openSource = new schema.Entity('openSource')

const companyOrOpenSource = new schema.Array({
  company,
  openSource
}, (input, parent, key) => `${input.type}`)

export const getEntities = (data) => {
  return normalize(data, companyOrOpenSource).entities
} 

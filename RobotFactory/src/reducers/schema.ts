import { schema } from 'normalizr'
  
  const robotSchema = new schema.Entity(
    "robots",
    {},
    { idAttribute: "id" }
  );
  
  export const robotsSchema = [robotSchema];
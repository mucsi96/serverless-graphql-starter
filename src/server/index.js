import {graphql} from 'graphql'
import schema from './schema'

export async function handle (event, context, callback) {
  const done = (err, res) => callback(null, {
      statusCode: '200',
      body: err ? JSON.stringify({error: err.message}) : JSON.stringify(res),
      headers: {
          'Content-Type': 'application/json',
      }
  });

  try {
    const result = await graphql(schema, event.body)
    done(null, result)
  } catch (err) {
    done(err)
  }
}

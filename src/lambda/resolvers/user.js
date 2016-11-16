// import {createUser, findUserByUserName} from '../models/user'
// import jwt from 'jsonwebtoken'
// import {getEnvProp} from '../env'

// export async function create (obj, {username, password}) {
//   await createUser(username, password)
//   const user = await findUserByUserName(username)
//   const token = jwt.sign({
//     id: user._id.toString()
//   }, getEnvProp('SERVER_SECRET'), {
//     expiresIn: '2h'
//   })
//   return {
//     user: {
//       id: user._id.toString(),
//       username: user.username
//     },
//     token: token
//   }
// }

'use strict'

const AWS = require('aws-sdk')

main().then(null, (err) => {
  process.nextTick(() => {
    throw err
  })
})

async function main () {
  const cognitoISP = new AWS.CognitoIdentityServiceProvider({
    region: 'us-east-1'
  })
  const userPoolId = 'us-east-1_qNXZI87bq'

  if (process.argv[2] === '--list') {
    const users = await cognitoISP.listUsers({
      AttributesToGet: ['email'],
      // Filter: 'email ^= "@"',
      Limit: 60,
      UserPoolId: userPoolId
    }).promise()
    console.log('found users', users.Users.map(u => {
      return u.Attributes[0]
    }))
    return
  }

  const users = await cognitoISP.listUsers({
    AttributesToGet: ['email'],
    Filter: 'email ^= "temp_test"',
    Limit: 60,
    UserPoolId: userPoolId
  }).promise()
  console.log('users found', users.Users.length)

  for (const user of users.Users) {
    await cognitoISP.adminDisableUser({
      UserPoolId: userPoolId,
      Username: user.Username
    }).promise()
    await cognitoISP.adminDeleteUser({
      UserPoolId: userPoolId,
      Username: user.Username
    }).promise()
    console.log('delete user', user.Attributes[0].Value)
  }
}

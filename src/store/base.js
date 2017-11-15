import {base64encode} from './base64.js'
import {b64_hmac_sha1} from './hmacsha1.js'

const _TEST_INTER = 'http://119.23.27.158:8090/'
const _OFF_INTER = 'http://cs1.gzqqs.com/'

const _openId = 'opeN1wzFSSvEOUDFQjOZ0QBJw2QE'
// const DEVICECODE = 'F0291B40-1B43-4360-A5A7-EBC76CE80680'
// const ID = '369403'
// let TS = Date.parse(new Date());
let TS = '1510627291'

function keyGet(msg) {
  let cryptoKey = 'qqs/web-app'
  let Str = b64_hmac_sha1(cryptoKey, msg)
  console.log('===========' + Str)

  let Base64Str = base64encode(Str)
  console.log('===========' + Base64Str)

  return Base64Str;
}

export {
  keyGet,
  _TEST_INTER,
  _OFF_INTER,
  _openId,
  TS
}

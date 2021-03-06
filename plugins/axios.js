import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`

export default axios.create(options)

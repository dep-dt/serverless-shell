const { RESTDataSource } = require('apollo-datasource-rest');

const API_URL =
  process.env.NODE_ENV === 'dev'
    ? 'http://api-dev.ifbyphone.com/v1/'
    : process.env.NODE_ENV === 'test'
    ? 'http://api-test.ifbyphone.com/v1/'
    : process.env.NODE_ENV === 'prod'
    ? 'https://api.ifbyphone.com/v1/'
    : 'http://api.ifbyphone.local/v1';

class OrganicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  willSendRequest(request) {
    request.headers.set('Cookie', 'IFBYPHONE=q5eh6fgq0hs3i5jvhhqmr482g0');
  }

  async getRegisteredNumbers() {
    const data = await this.get('rpc', {
      action: 'getRegisteredNumbers',
      includeIbp: 1,
    });
    return JSON.parse(data)[0].number;
  }
}

exports.OrganicAPI = OrganicAPI;

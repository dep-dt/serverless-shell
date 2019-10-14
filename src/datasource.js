const { RESTDataSource } = require('apollo-datasource-rest');
const { API } = require('./server.js');

const ACCESS_KEY =
  '608c9dd21e2314fe5b214699cb877cf00f5c5f9759d11620ed3c7ffa0c2f0f3f';

const SECRET_KEY =
  'f7b41f8cd752922706198ff1d35215c874f036a4957ce290513ad7eac5d5c233';

class OrganicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API;
  }

  willSendRequest(request) {
    request.headers.set('Cookie', 'IFBYPHONE=1r8idelqsfrtodkmgp7hcc3qf0');
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

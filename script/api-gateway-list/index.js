require('dotenv').config();

const axios = require('axios');

const { getApiGatewayList } = require('./get-api-gateway-id-list');
const sleep = require('../../utility/sleep');
const writeFile = require('../../utility/write-file');

async function fetchApiGatewayList(id) {
  const requestData = JSON.stringify({
    headers: {
      'X-Amz-User-Agent': 'aws-sdk-js/2.589.0 promise',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    path: `/restapis/${id}/resources`,
    method: 'GET',
    region: 'ap-southeast-1',
    params: {
      embed: 'methods',
      limit: '500',
    },
    operation: 'getResources',
  });

  const config = {
    method: 'post',
    url: 'https://ap-southeast-1.console.aws.amazon.com/apigateway/api/apigateway',
    headers: {
      authority: 'ap-southeast-1.console.aws.amazon.com',
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      cookie: process.env.AWS_COOKIE,
      origin: 'https://ap-southeast-1.console.aws.amazon.com',
      referer:
        'https://ap-southeast-1.console.aws.amazon.com/apigateway/home?region=ap-southeast-1',
      'sec-ch-ua':
        '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      'x-csrf-token': process.env.CSRF_TOKEN,
    },
    data: requestData,
  };

  try {
    const { data } = await axios(config);
    return data.item;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function listOnlyLambdaApiGateway(name, id) {
  const lambdaApiGateway = [];
  const data = await fetchApiGatewayList(id);
  data.forEach((item) => {
    if (!item.resourceMethods) {
      return;
    }

    Object.keys(item.resourceMethods).forEach((method) => {
      const info = item.resourceMethods[method];
      const uri = info?.methodIntegration?.uri || '';
      if (uri.includes('lambda')) {
        lambdaApiGateway.push({
          name,
          uri,
          path: item.path,
          method: method,
        });
      }
    });
  });

  return lambdaApiGateway;
}

async function getAllApiEndpoint() {
  const apiGatewayList = getApiGatewayList();
  const apiEndpoint = [];
  for (let i = 0; i < apiGatewayList.length; i++) {
    const apiGateway = apiGatewayList[i];
    const lambdaApiGateway = await listOnlyLambdaApiGateway(
      apiGateway.name,
      apiGateway.id
    );

    console.log(lambdaApiGateway);
    await sleep(500);

    apiEndpoint.push(...lambdaApiGateway);
  }
  return apiEndpoint;
}

async function run() {
  const data = await getAllApiEndpoint();

  await writeFile('api-endpoint.json', data);

  console.log('Done');
}

module.exports = {
  run,
};

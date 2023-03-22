// response at 3-Aug-22
// POST: https://ap-southeast-1.console.aws.amazon.com/apigateway/api/apigateway
const responseFromAws = {
  item: [
    {
      apiKeySource: 'HEADER',
      createdDate: 1624349332,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '0m7d6hddil',
      name: 'tcrb-ob-payment-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'obApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-payment/215288d0-cebd-11eb-a29b-063c5f980302',
        'aws:cloudformation:stack-name': 'tcrb-ob-payment',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1660490358,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '0nvbxe56r9',
      name: 'tcrb-ob-cardless-withdraw-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'PartnerApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-cardless-withdraw/ee607b60-1be3-11ed-9d3a-0a969afd284e',
        'aws:cloudformation:stack-name': 'tcrb-ob-cardless-withdraw',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1642045682,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '158cgnk74g',
      name: 'tcrb-platform-qr',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApi',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-qr/547d2dd0-7423-11ec-82ae-0a7969dbf072',
        'aws:cloudformation:stack-name': 'tcrb-platform-qr',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1660214336,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '1ed0bue2ng',
      name: 'tcrb-debtacq-cif',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'CifApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-debtacq-cif/f2f440e0-195d-11ed-8ca2-0a5e031cf822',
        'aws:cloudformation:stack-name': 'tcrb-debtacq-cif',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599834615,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: '2ca21t1ah9',
      name: 'tcrb-ob-translation-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599834487,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: '2ygsfbnm93',
      name: 'tcrb-ob-resource-model-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599834487,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: '30h21qbdfd',
      name: 'tcrb-ob-otp-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1633417477,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '3c2kepb9l7',
      name: 'tcrb-debtacq-productmanagement',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-debtacq-productmanagement/435e6310-25aa-11ec-acbb-0adf09fa0ae4',
        'aws:cloudformation:stack-name': 'tcrb-debtacq-productmanagement',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1643782358,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: '3y8qfdlf8d',
      name: 'Clone from tcrb-mb-backend',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1660490354,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '42smm9ey34',
      name: 'tcrb-ob-cardless-withdraw-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ObApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-cardless-withdraw/ee607b60-1be3-11ed-9d3a-0a969afd284e',
        'aws:cloudformation:stack-name': 'tcrb-ob-cardless-withdraw',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1623305816,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '4a5e4ohqgl',
      name: 'tcrb-ob-partner-management-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'partnerApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-partner-management/9c293120-e067-11ea-9eb0-02f584878410',
        'aws:cloudformation:stack-name': 'tcrb-ob-partner-management',
      },
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1643782223,
      description:
        'Your first API with Amazon API Gateway. This is a sample API that integrates via HTTP with our demo Pet Store endpoints',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: '4jh1yxeh02',
      name: 'PetStore',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1617035056,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: '4nsyp0zly7',
      name: 'tcrb-ob-transaction-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      version: '2020-08-06T05:04:42Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1654584712,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: '4qovrwr8za',
      name: 'hello-api-chanza',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613632535,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '565wvazla6',
      name: 'tcrb-partner-bot-otp',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1618971806,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '5a5zw5p4f7',
      name: 'tcrb-platform-transaction',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApi',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-transaction-lambda-deploy/5c66fb50-a248-11eb-9961-02f31ecdf2d8',
        'aws:cloudformation:stack-name':
          'tcrb-platform-transaction-lambda-deploy',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1623119752,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: '5kn9g896u2',
      name: 'devops-lambda-test',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599834503,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: '5v2u53s6nl',
      name: 'tcrb-ob-repayment-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1651050018,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '67ylyu46hj',
      name: 'tcrb-bof-customer',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'customerApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-bof-customer/1e450300-c608-11ec-9b36-064e453c8486',
        'aws:cloudformation:stack-name': 'tcrb-bof-customer',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1658131740,
      description: 'test deleted multi stage',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: '6sapp5xngl',
      name: 'devops-fuse-test',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1654087098,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '6zfvz59mt5',
      name: 'tcrb-ob-geometry-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"},{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'obApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-geometry/1b48d750-1c51-11ec-8659-0ac559e71894',
        'aws:cloudformation:stack-name': 'tcrb-ob-geometry',
      },
      version: '2021-09-23T11:27:16Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1656919731,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: '7cxwmmidze',
      name: 'test-api-2',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1618549592,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: '8hgyt1bq67',
      name: 'tcrb-platform-otp',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApi',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-otp-lambda-deploy/4603f690-9e71-11eb-a843-06f1487f6a64',
        'aws:cloudformation:stack-name': 'tcrb-platform-otp-lambda-deploy',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613726039,
      description: 'image-service(liveness,face-rec)',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: '8w40nvhm9a',
      name: 'tcrb-private-bot-imageservice',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1662425421,
      description: 'testLoanPublic',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: '95sun7jfsf',
      name: 'testLoanPublic',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1628654153,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'a0fqjewf6j',
      name: 'tcrb-ob-topup-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'partnerApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-topup/07220740-f9cb-11eb-8f25-0a7c39bebcd0',
        'aws:cloudformation:stack-name': 'tcrb-ob-topup',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1627324631,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'a4y83b4am4',
      name: 'tcrb-ob-customer-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'partnerApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-customer/9fe69230-f43a-11ea-861e-0243768bbe4a',
        'aws:cloudformation:stack-name': 'tcrb-ob-customer',
      },
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1651142574,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'ab6sqpaoed',
      name: 'tcrb-bof-dashboard-report',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'DashboardReportApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-bof-dashboard-report/a8bbcf50-c6df-11ec-8c7a-0ae75a0ec1f8',
        'aws:cloudformation:stack-name': 'tcrb-bof-dashboard-report',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613632457,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'adow2y9t10',
      name: 'tcrb-partner-bot-dopa',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1630653851,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['EDGE'],
      },
      id: 'aea8y80shk',
      name: '${org}-${product}-${module}-ob',
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613718262,
      description: 'ekyc-service',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'ann1zf0r05',
      name: 'tcrb-private-bot-customer',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613633483,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'aoyfe4vhkg',
      name: 'tcrb-private-bot-facial',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1618903034,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'ba8amlidxj',
      name: 'tcrb-ob-transfer-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'partnerApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-transfer/a74a4a20-a188-11eb-bdea-064e843522ea',
        'aws:cloudformation:stack-name': 'tcrb-ob-transfer',
      },
      version: '2021-04-20T12:32:53Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1656919692,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'c8ym149md1',
      name: 'test-api-1',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613717376,
      description: 'image-service(customer api)',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'ch53k51psk',
      name: 'tcrb-private-bot-imagecustomer',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599834508,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'd09y03rvmc',
      name: 'tcrb-ob-partner-management-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613632115,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'd4zdiv5p04',
      name: 'tcrb-tablet-backend',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1664884421,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'dawdn3s719',
      name: 'tcrb-ob-cash-deposit-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'PartnerApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-cash-deposit/ba895f90-43da-11ed-8fd0-0251ba002ae8',
        'aws:cloudformation:stack-name': 'tcrb-ob-cash-deposit',
      },
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1633423339,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'dsqf74tq85',
      name: 'tcrb-debtacq-partnermanagement',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-debtacq-partnermanagement/ae05f300-1f46-11ec-bc39-0aacce1d8e72',
        'aws:cloudformation:stack-name': 'tcrb-debtacq-partnermanagement',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599839286,
      description: 'Request and Confirm Binding',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'e41aw61ksg',
      name: 'tcrb-ob-binding-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-08-06T05:04:42Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1653478680,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'e5f5inw16k',
      name: 'devops-poc-multi-stage-api',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      version: '2021-04-20T12:32:53Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1617957086,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'et1fj0jfnb',
      name: 'tcrb-platform-customer',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApi',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-customer-lambda-deploy/c796de70-990d-11eb-b93a-0affe1096584',
        'aws:cloudformation:stack-name': 'tcrb-platform-customer-lambda-deploy',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1643105206,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'ewxwnjcssh',
      name: 'tcrb-platform-apipartner-public',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApi',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-apipartner/ecd58bd0-7dc5-11ec-b340-02f1730b1a9a',
        'aws:cloudformation:stack-name': 'tcrb-platform-apipartner',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1643779835,
      description: 'testAPI11',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'f3b2yhfnpa',
      name: 'testAPI11',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1652248879,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'fcs9rj83ui',
      name: 'tcrb-platform-apipartner-private',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApiPrivate',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-apipartner/ecd58bd0-7dc5-11ec-b340-02f1730b1a9a',
        'aws:cloudformation:stack-name': 'tcrb-platform-apipartner',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599834496,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'fhvn2malh5',
      name: 'tcrb-ob-otp-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1619511090,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'fpo7mver23',
      name: 'tcrb-platform-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApi',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-partner-lambda-deploy/ff69fe10-a72f-11eb-928c-02c69f0ddb0a',
        'aws:cloudformation:stack-name': 'tcrb-platform-partner-lambda-deploy',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1642676893,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'fs1566hxla',
      name: 'tcrb-platform-test',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApi',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-test/f2407af0-79e0-11ec-89e8-02426d3e6060',
        'aws:cloudformation:stack-name': 'tcrb-platform-test',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1660197884,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'gfa5s9e494',
      name: 'tcrb-debtacq-datamart',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'DatamartApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-debtacq-datamart/3ae192e0-193b-11ed-bfd5-065a47b0a250',
        'aws:cloudformation:stack-name': 'tcrb-debtacq-datamart',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1622540631,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'h7gsa7e684',
      name: 'devops-lambda-nodejs',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599834621,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'hjrweal6y9',
      name: 'tcrb-ob-withdrawal-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      binaryMediaTypes: [
        'multipart/form-data',
        'text/plain',
        'text/csv',
        'text/html',
        'application/pdf',
        'image/png',
        'image/jpeg',
        'image/gif',
      ],
      createdDate: 1600054752,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'hlmt8j0z6b',
      name: 'tcrb-ob-backoffice-authorizer-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613715310,
      description: 'ekyc-service',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'idftvbjyag',
      name: 'tcrb-private-bot-purposes',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1617856982,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'itfzp9l3rk',
      name: 'tcrb-platform-econsent',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApi',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-econsent-lambda-deploy/a762b280-9824-11eb-84a1-02c69f0ddb0a',
        'aws:cloudformation:stack-name': 'tcrb-platform-econsent-lambda-deploy',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1653479789,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'iwi1s0pfpc',
      name: 'devops-poc-multi-stage-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'partnerApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/devops-poc-multistage/73909750-dc21-11ec-a9ea-061ee84bacac',
        'aws:cloudformation:stack-name': 'devops-poc-multistage',
      },
      version: '2021-04-20T12:32:53Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1650944060,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'joy8n7brk6',
      name: 'tcrb-debtacq-dashboard',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'DashboardApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-debtacq-dashboard/75a00520-c511-11ec-aef5-0250d4a922ca',
        'aws:cloudformation:stack-name': 'tcrb-debtacq-dashboard',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1643764895,
      description: 'testAPI',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'jvlk26p1c4',
      name: 'testAPI',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1664422553,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'k0aadzo23a',
      name: 'tcrb-bof-uam',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'uamApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-bof-uam/ed40fbb0-3b1e-11ed-9acf-0ad459fb01fe',
        'aws:cloudformation:stack-name': 'tcrb-bof-uam',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1625105144,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['EDGE'],
      },
      id: 'k66cx2z6bl',
      name: 'devops-test-deploy-api-gateway',
      tags: {
        'aws:cloudformation:logical-id': 'Gateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/devops-test-deploy/bcc9b640-da10-11eb-b7b7-0627116e656a',
        'aws:cloudformation:stack-name': 'devops-test-deploy',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1635507108,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'k86osb635f',
      name: 'tcrb-debtacq-rulemastermanagement',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-debtacq-rulemastermanagement/7753dab0-38ab-11ec-81d6-0a75b901d0d4',
        'aws:cloudformation:stack-name': 'tcrb-debtacq-rulemastermanagement',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      binaryMediaTypes: ['image/*'],
      createdDate: 1611293817,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'kju3v3kn0b',
      name: 'tcrb-mb-backend',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599840501,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'lb84bocom2',
      name: 'tcrb-ob-gl-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1617092231,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'lxic24p9ri',
      name: 'poc-bof-es',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:*:*\\/*\\"},{\\"Effect\\":\\"Deny\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:*:*\\/*\\",\\"Condition\\":{\\"StringNotEquals\\":{\\"aws:SourceVpc\\":\\"vpc-024c7d2df440a6d46\\"}}}]}',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613716143,
      description: 'ekyc-service',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'mhhmbrb7wj',
      name: 'tcrb-private-bot-transaction',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1611812076,
      description: 'Deposit List',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'mk5j76alng',
      name: 'tcrb-ob-deposit-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-08-06T05:04:42Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1619578627,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'n563k38x27',
      name: 'tcrb-platform-kyc',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApi',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-kyc-lambda-deploy/3e226d70-a7cd-11eb-bea5-0687727c192e',
        'aws:cloudformation:stack-name': 'tcrb-platform-kyc-lambda-deploy',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599834499,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'nk8ol9z9s4',
      name: 'tcrb-ob-fee-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613720922,
      description: 'ekyc-service',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'nqtdejldx1',
      name: 'tcrb-private-bot-kycfacial',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1630654294,
      description: 'Clone API tcrb-ob-backoffice-authorizer-ob For Public Zone',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'o1171cl7oi',
      name: 'tcrb-ob-backoffice-authorizer-ob-publicapi',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'apiGatewayPublicAPI',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-backoffice-authorizer/9c0666b0-f63b-11ea-86b4-06272814fd70',
        'aws:cloudformation:stack-name': 'tcrb-ob-backoffice-authorizer',
      },
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1618981940,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'ouxlce361g',
      name: 'tcrb-platform-facial',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApi',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-facial-lambda-deploy/f67c0d90-a25f-11eb-b532-06e612b9775e',
        'aws:cloudformation:stack-name': 'tcrb-platform-facial-lambda-deploy',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599834488,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'p0h2vu2gii',
      name: 'tcrb-ob-loanaccount-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1657613711,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'pcij2n8uje',
      name: 'devops-hello-chanza-gateway',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'obApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/devops-hello-chanza/65f7b1f0-01ba-11ed-80b4-0a654e35c524',
        'aws:cloudformation:stack-name': 'devops-hello-chanza',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613632581,
      description: 'This is sample description',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'pfx9qahkdk',
      name: 'eKYC Core Service API Document',
      version: '1.0.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1633009623,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'pgji2arhsc',
      name: 'tcrb-ob-geometry-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"},{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'partnerApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-geometry/1b48d750-1c51-11ec-8659-0ac559e71894',
        'aws:cloudformation:stack-name': 'tcrb-ob-geometry',
      },
      version: '2021-09-23T11:27:16Z',
    },
    {
      apiKeySource: 'HEADER',
      binaryMediaTypes: [
        'multipart/form-data',
        'text/plain',
        'text/csv',
        'text/html',
        'application/pdf',
        'image/png',
        'image/jpeg',
        'image/gif',
      ],
      createdDate: 1654081132,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'pgnjmegkt7',
      name: '${org}-${product}-${module}-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599840506,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'q2tfv7hgne',
      name: 'tcrb-ob-transaction-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1642590950,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'qb3rj7vel4',
      name: 'gw-poc-obm18',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'apiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/poc-obm18/24ad1930-7919-11ec-a2b8-063d08642fdc',
        'aws:cloudformation:stack-name': 'poc-obm18',
      },
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1625702298,
      description: 'Created by AWS Lambda',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'qk6ybg45zl',
      name: 'poc-cognito-API',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613632501,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'r9m1xa1n05',
      name: 'tcrb-partner-bot-facial',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1632393355,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'ryt68aco1e',
      name: 'devops-test-geometry',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
    },
    {
      apiKeySource: 'HEADER',
      binaryMediaTypes: ['text/plain', 'multipart/form-data'],
      createdDate: 1600147078,
      description: 'API for partner portal',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'rzck5dozs2',
      name: 'tcrb-ob-partner-portal',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-08-07T13:32:13Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1662424371,
      description: 'testAPILoan',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'sinu51c07a',
      name: 'testAPILoan',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1644294558,
      description: 'Created by AWS Lambda',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'st3gwr2or3',
      name: 'getSet1-API',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1634575306,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'tw0qjlfmnh',
      name: 'tcrb-ob-exportfile-ob-api',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'obApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-exportfile/14234290-301e-11ec-b341-06ea4858ff32',
        'aws:cloudformation:stack-name': 'tcrb-ob-exportfile',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1619098711,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'ul706rfphf',
      name: 'test-retrieve-s3image-2',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1623859927,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'v9yzbllxdj',
      name: 'tcrb-ob-payment-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'partnerApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-payment/215288d0-cebd-11eb-a29b-063c5f980302',
        'aws:cloudformation:stack-name': 'tcrb-ob-payment',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599834483,
      description: 'Request and Verify OTP that requests from partner.',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 've4soo6f16',
      name: 'tcrb-ob-customer-ob-api',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-07-16T11:46:35Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1631334882,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'vjl7mjysye',
      name: 'test-export-file',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1660218239,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'vkobmtejt0',
      name: 'tcrb-debtacq-specialist',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'SpecialistApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-debtacq-specialist/b7411010-1961-11ed-9fa0-0acb10f627ae',
        'aws:cloudformation:stack-name': 'tcrb-debtacq-specialist',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      binaryMediaTypes: ['image/*'],
      createdDate: 1656602724,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'vut6wjgytg',
      name: 'tcrb-poc-goodserverless',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-poc-goodserverless/f2e09800-7f71-11ec-b0c7-0a5617810382',
        'aws:cloudformation:stack-name': 'tcrb-poc-goodserverless',
      },
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1644300386,
      description: 'Created by AWS Lambda',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['REGIONAL'],
      },
      id: 'wg9zfn2sl9',
      name: 'getSetValueFunction-API',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1628272438,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'xfbp4b8eal',
      name: 'tcrb-ob-messaging',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'apiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-messaging/048f7520-f446-11ea-a8b1-0638f3f69c86',
        'aws:cloudformation:stack-name': 'tcrb-ob-messaging',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599839286,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'xpgbituzw2',
      name: 'tcrb-ob-binding-ob',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-07-31T15:46:53Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1613721364,
      description: 'ekyc-service',
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'xpql2qd1zl',
      name: 'tcrb-private-bot-messages',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"arn:aws:execute-api:ap-southeast-1:313571681948:*\\"}]}',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1632392924,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'xz9awm3255',
      name: 'devops-test-ec2',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1651048685,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'yc94owq1le',
      name: 'tcrb-bof-customer',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1599834503,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
      },
      id: 'yf81hltsy8',
      name: 'tcrb-ob-partner-authorize-data-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {},
      version: '2020-05-18T11:22:15Z',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1664887117,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'yy82ympyv3',
      name: 'tcrb-ob-cash-withdraw-partner',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'PartnerApiGateway',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-ob-cash-withdraw/025411c0-43e1-11ed-8c05-065a0b2d4df4',
        'aws:cloudformation:stack-name': 'tcrb-ob-cash-withdraw',
      },
      version: '1.0',
    },
    {
      apiKeySource: 'HEADER',
      createdDate: 1617872851,
      disableExecuteApiEndpoint: false,
      endpointConfiguration: {
        ipv6: false,
        types: ['PRIVATE'],
        vpcEndpointIds: ['vpce-03ae60b10934425db'],
      },
      id: 'zn62u0hkbf',
      name: 'tcrb-platform-dopa',
      policy:
        '{\\"Version\\":\\"2012-10-17\\",\\"Statement\\":[{\\"Effect\\":\\"Allow\\",\\"Principal\\":\\"*\\",\\"Action\\":\\"execute-api:Invoke\\",\\"Resource\\":\\"*\\"}]}',
      tags: {
        'aws:cloudformation:logical-id': 'ApiGatewayApi',
        'aws:cloudformation:stack-id':
          'arn:aws:cloudformation:ap-southeast-1:313571681948:stack/tcrb-platform-dopa-lambda-deploy/a8cd6640-9849-11eb-a569-06c012599cae',
        'aws:cloudformation:stack-name': 'tcrb-platform-dopa-lambda-deploy',
      },
      version: '1.0',
    },
  ],
};

function getApiGatewayList() {
  return responseFromAws.item.map(({ id, name }) => ({
    id,
    name,
  }));
}

module.exports = {
  getApiGatewayList,
};

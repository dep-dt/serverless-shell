# README

Here are some light instructions on how to set up your local environment for `serverless`.

## Serverless configuration

1. Install awscli

```
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
```

2. Run through these instructions to set up `awscli` authentication with Okta:

https://dialogtech.atlassian.net/wiki/spaces/OPS/pages/180715521/Okta+AWS+Programmatic+Access+Howto

Then run `awscli` and authenticate

3. Install `serverless`

```
npm install -g serverless
```

4. Deploy

After configuring the Serverless Framework, all you have to do to deploy is run `serverless deploy`

If successful, serverless should output something similar to this example:

```
> serverless deploy
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (27.07 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............
Serverless: Stack update finished...
Service Information
service: apollo-lambda
stage: dev
region: us-east-1
stack: apollo-lambda-dev
api keys:
  None
endpoints:
  POST - https://ujt89xxyn3.execute-api.us-east-1.amazonaws.com/dev/graphql
  GET - https://ujt89xxyn3.execute-api.us-east-1.amazonaws.com/dev/graphql
functions:
  graphql: apollo-lambda-dev-graphql
```

## What does serverless do?

First, it builds the functions, zips up the artifacts, and uploads the artifacts to a new S3 bucket. Then, it creates a Lambda function with those artifacts, and if successful, outputs the HTTP endpoint URLs to the console.

The resulting S3 buckets and Lambda functions can be viewed and managed after logging in to the AWS Console.

## Managing the resulting services

To find the created S3 bucket, `apollo-lambda-dev-*`

To find the created Lambda function, search AWS for the listed services for `Lambda`. If the list of Lambda functions is empty, or missing the newly created function, double check the region at the top right of the screen. The default region for Serverless deployments is us-east-1 (N. Virginia)

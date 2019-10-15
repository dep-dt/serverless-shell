# README

Here are some instructions on how to set up, develop, and deploy Atlas GraphQL. Feel free to swap out `yarn` with `npm` for any of the below commands.

## Atlas GraphQL Setup

After you clone the repository, `yarn install` to set up necessary dependencies.

Then install `serverless` which enables both command-line deployment and localhost development:

```
yarn install -g serverless
```

## Localhost Development

```
yarn start
```

You should then be able to access `http://localhost:3001/graphql`

## Deployment

Deployment involves dispatching the server to an AWS Lambda instance.

First, install `awscli`:

```
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
```

Run through these instructions to set up `awscli` authentication with Okta:

https://dialogtech.atlassian.net/wiki/spaces/OPS/pages/180715521/Okta+AWS+Programmatic+Access+Howto

Then run `awscli` and authenticate.

Once you've completed those steps, you can deploy to one of the following environments:

### secure-dev

```
yarn deploy-dev
```

### secure-test

```
yarn deploy-test
```

### prod

```
yarn deploy-prod
```

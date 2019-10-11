# README

Here are some light instructions on how to set up your local environment for `serverless`.

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

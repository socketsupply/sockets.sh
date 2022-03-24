# SYNOPSIS

# TODO:

 - [ ]

The Socket Supply Co. website.

# DEVELOPMENT

First, and only once, you need to edit your `/etc/hosts` file,
add the following line and save it. Remember to use `sudo` to edit.

## SETUP

```
127.0.0.1       dev.optool.co
```

## RUN

```bash
npm run start
```

Then in your browser visit `https://dev.optool.co:8080`.

There will be a warning because you are using a self-signed
certificate to run the server locally. Just click though it.

If you want to test interactions with the api.optool.co you
will need to run the lambdas by running `npm start` from
the `api.optool.co` git repo.

By default the website talks to localhost:8000 for `api.optool.co`
instead of talking to production

## TESTS

```bash
./node_modules/.bin/testcafe chrome ./tests
```

## CERTIFICATES

Nothing to do. We check them into github.

# PRODUCTION

To build and deploy the site to s3, run the following command.

## DEPLOY

Use the deploy website wizard in `toolbox`.

# KrebsEng Website

This code supports [KrebsEng's website](https://krebseng.com.br).

## Technical Details

This website was built primarily with Node.js, React, and Next.js.

### Running Locally

To run the site in your development machine, you will need to fork and clone this repository, then you will to build and run it through the following commands:

```bash
# install dependencies
npm i

# start the development process
npm run dev
```

After that, you will be able to access the tool through this URL: [`http://localhost:3000/`](http://localhost:3000/).

## Continuous Deployment

The continuous deployment practice is achieved with the help of [Travis](https://travis-ci.org/Digituz/krebseng). Whenever a push is made to this repository, Travis triggers a deployment process on [Now](https://zeit.co/now) (the chosen host for this repository).

### Technical Details

If you take a look, you will see that [the `.travis.yml` file](./.travis.yml) contains a property called `secure` under `env.matrix` and that this property contains an encrypted value. This value is actually formed of an environment variable called `NOW_TOKEN`—a [Now](https://zeit.co/now) token used to deploy new instances of the website.

This property (`secure`) is [encrypted with the help of the following command](https://docs.travis-ci.com/user/environment-variables/#Encrypting-environment-variables):

```bash
travis encrypt NOW_TOKEN=123ABC --add env.matrix
```

The advantage of this approach is that by encrypting the Now token and the other env variables, it becomes possible to version-control them to a public repository like this one. To create this encrypted token, Travis used a public token that can be read only with a private token attached to [this repository on Travis itself](https://travis-ci.org/auth0-blog/guest-author).

Another important concept to have in mind is regarding the script associated with the `master` branch on [the `.travis.yml` file](./.travis.yml):

```bash
npm run dev && now alias -t $NOW_TOKEN
```

This command, besides using the `NOW_TOKEN` env variable, [relies on a file called [`now.json`](./now.json) to know how to create Now aliases properly](https://zeit.co/docs/other/faq#how-do-i-deploy-and-alias-in-a-single-command).

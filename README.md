# KrebsEng Website

This code supports [KrebsEng's website](https://krebseng.com.br).

## Technical Details

This website was built primarily with Node.js, React, and Next.js.

### Running Locally

To run the site in your development machine, you will need to fork and clone this repository, then you will to build and run it through the following commands:

```bash
export SPACES_ACCESS_KEY=xyz
export SPACES_SECRET_KEY=abc123
export SENDGRID_API_KEY=some-key
export MONGO_URL=mongodb://digituz:some-password@localhost:27017/digituz

# install dependencies
npm i

# start the development process
npm run dev
```

After that, you will be able to access the tool through this URL: [`http://localhost:3000/`](http://localhost:3000/).

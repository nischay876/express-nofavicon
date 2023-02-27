<div align="center">

NoFavicon
===

*Tiny Express middleware that sends [HTTP 204] "No Content" for Favicon requests*
</div>

[//]: # (GH PACKAGES TEMPLATE START)
## Usage

This package is installable from [GitHub Packages]. To use this package in your project, create an `.npmrc` file in the same directory as your project's `package.json` file with these contents:

```
@tycrek:registry=https://npm.pkg.github.com
```

[GitHub Packages]: https://github.com/features/packages
[//]: # (GH PACKAGES TEMPLATE END)

Now, install with `npm i @tycrek/express-nofavicon` and use as a middleware:

```js
const nofavicon = require('@tycrek/express-nofavicon');
const express = require('express');

const app = express();
app.use(nofavicon);
```

### What is it doing?

If the request URL (`req.url`) matches (using regex test) `/favicon.ico`, the response will be `HTTP 204 No Content`.

[HTTP 204]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204

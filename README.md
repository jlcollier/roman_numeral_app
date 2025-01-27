# Description
`roman_numeral_app` is a SPA that can take a user's input, a number written in the Arabic Numeral system, and output the equivalent number in the Roman Numeral system. The valid input range for the app is whole numbers greater than 0 and less than 4,000.

For a specification of the Roman Numeral system that is used in this app, see <a href="https://en.wikipedia.org/wiki/Roman_numerals">this Wikipedia page</a> under the section "Standard form".

The app also implements both light and dark modes based on the user's OS.

# Local Installation
After navigating to the root folder of this downloaded repo in a unix-based terminal, run the following commands\
\
`npm i`\
`npm run build`\
`npm run start`\
\
and then navigate to\
\
`http://localhost:8080`\
\
on a browser. The web page should be visible.

### Docker
Optionally, this application may be run in a Docker container via a very rudimentary dockerfile. For instructions on how to set this up, download this repo locally, download Docker Desktop from `https://www.docker.com/products/docker-desktop/`, and follow Docker's instructions starting at the text "Build the Image" <a href="https://docs.docker.com/get-started/workshop/02_our_app/#:~:text=Build%20the%20image%20using%20the%20following%20commands%3A">here in Docker's Docs</a>.

# Usage
On the web page's form, input a whole number greater than 0 and less than 4,000. Submit the form to see the input's Roman Numeral equivalent.

# Running tests locally
To run unit tests on your machine for both the front end and backend, run `npm run test` in the terminal. Results will show in the terminal.

# Advanced running
Several settings in the app may be configured with use of a environment file. For access to these settings, this file must be created manually in the root directory of the app download, and the file must be named `.env`. The enviroment file may have the following variables:
- PORT
    - Specifies what port the app should run in. If this is not configured, the app will run on port 8080.
- ROLLBAR_CODE
    - Rollbar is a third-party software service and API that enables production and development logging. This allows devs to see metrics based on those logs and monitor errors and activity from the Rollbar app's dashboards. ROLLBAR_CODE is a string that is provided when a Rollbar account is created. This allows your app to be tied to a Rollbar account. If this is not configured, the app will work, but without Rollbar logging.

## Example of an enviroment file

```
PORT=4000
ROLLBAR_CODE=6d72301506e74adfba423b71b9c9d773
```

# Major Dependencies List
- Node
    - JavaScript engine.
- Express
    - JavaScript-based web framework.
- Vite-Express
    - Tool that extends the power of Express. It enables a simpler (but opinionated) full-stack web app development process when using both React/Vite and Express by serving dynamically-generated, static files with no extra developer code.
- React
    - Front-end web framework.
- Vite
    - Front-end code builder.
- Adobe React Spectrum
    - React component library. This library was chosen due to it being suggested to me by Adobe, and because it seamlessly implements light and dark mode based on the user's OS.
- Axios
    - HTTP request library.
- Vitest
    - Testing framework.
- Rollbar
    - Used for logging to a third-party monitoring dashboard (https://rollbar.io) that can be used for many things, from site metrics to finding critical failures. Rollbar can detect if the environment the logs come from is production or developement, which is conventient from an environment variable standpoint.

For other dependencies, see `package.json`.

For the full packaging layout and dependency tree, see `package-lock.json`.

# Notes
These days, many organizations like to see that developers can effectively utilize AI as part of their engineering process. In that light, I was unsure of what "[seeing my] development methodology in action" meant exactly. I assume that in this situation, where I am showcasing my ability to develop code, I would use no AI. But in the back of my mind, I have a very slight idea that AI might be desirable anyway.

In any case, I've included two functions in `src/server/utilities.js` to convert to Roman Numerals. The first, which I developed without any help from the internet or AI, is called `convertToRoman`. I then generated a function using AI, which I named `aiToRoman`. Both work well, but I've not attached `aiToRoman` to the web application at this point.

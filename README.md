## Instructions for PICA
Let's get this thing up and running! To begin, we're assuming you've already installed git, and have a package manager like npm or yarn installed on your computer.

### Clone the repo
First we'll want to make sure we've downloaded the repo

### `git clone https://github.com/dcuthell/pica`
After the download has completed, we can get into the repo directory

### `cd pica`

### Install the packages
In order to get things up and running, we'll need to download the files for all the libraries that this project uses to run

For npm
### `npm install`

For yarn
### `yarn install`

You'll need to do this every time you have a fresh download of the repo. Once you've successfully done an install, the files will remain in the folder, and you won't need to do this step again.

### Start the project
Great! Now you've got all the files in place, and we can get this project up and running!

For npm
### `npm start`

For yarn
### `yarn start`

A browser window should automatically pop up, and you should be good to go!<br>

You're working with a "hot-reload" system, which will refresh itself any time you make changes to the files and save the changes.<br>

This should make it easy to work on the CSS!

### Create your branch
It is **very important** to remember to create your own branch before starting to work on the project.<br>

It's easy to do. First we make it

### `git branch yournamebranch`

Then we switch over

### `git checkout yournamebranch`

### Working on the code
All of the files we'll be working with can be found in the src directory, specifically in the components and routes folders.<br>

To find the code you're looking to change, first determine what you are changing. Using the inspect element tool in your browser, you can pull up all the css code that is influencing the target element. Sometimes it's helpful to play around with the css here, because you can add, change, and remove css values without needing to leave your browser window!<br>

Once you've figured out what needs to be changed, it's time to find that css code. As an example, let's use the button on the first hero slide we see on the homepage. Inspect element shows me that the button is a div, with a class name of `styles_buyButton__EZCVz`.
You'll notice that almost all of the class names you'll find here start with `styles__` and end with another underscore followed by some random letters.<br>

We can see that this buyButton div lives inside another div called card, which in turn is inside another div called PicaCarouselCard. Aha! A class name that begins with an uppercase letter is usually a pretty good sign that you're looking at a component. We take a look at the components folder, and sure enough we find PicaCarouselCard.<br>

Inside the PicaCarouselCard folder we see two files. If you guessed that we'd be going to the css file, you'd be correct! We open it up, scroll down the page, and hey, there's the css code for buyButton! Now we can get that code changed to what we want, save our changes, and voila, we see them appear when our browser reloads!

### Submitting your work
When you're happy with the work you've completed, you can send it back the the repo in your own branch. First we tell git to add all the files.

### `git add .`

Then we write a commit message to explain what we did

### `git commit -m "made the button on the heroslide turn yellow when you hover over it"`

And then we're ready to push

### `git push origin yournamebranch`

Now it's in the system! Let grailsoft know that you've pushed and they will handle the merge into the master branch.<br>



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

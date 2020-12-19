Used [this](http://androidcss.com/css-shape-icon-generator/#) website to make dots on navbar.

Changed svg color by adding `style="fill:rgb(224, 117, 71);"` to the `<path>` tag.

Pulling icons from (https://icons8.com/icons/set/social-media)


### To get eslint working in a gatsby project.

Had to add a `.eslintrc.js` file with the following inside, (https://www.gatsbyjs.org/docs/eslint/)

```javascript
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
}

```

More info for basics `prettier` and `eslint` installation (https://davidtranscend.com/blog/configure-eslint-prettier-vim/)


### Added a Gatsby/Netlify contact form

Used [this blog](https://codebushi.com/form-handling-gatsby-netlify/) for
directions.


### How to sylte Gatsby's Link with styled components

https://stackoverflow.com/questions/49639031/styled-components-with-gatsby-link-anchor-tag-css-coloring


### Preparing a Gatsby sit to go live.

See the docs [here](https://www.gatsbyjs.com/tutorial/part-eight/)


### You have to export React components from .js files in Gatsby page folder

I had a styled component file adjacent to the index.js files, and it broke on
the build.

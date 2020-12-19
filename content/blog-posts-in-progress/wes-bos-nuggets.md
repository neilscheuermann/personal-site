# Nuggets from WesBos 

## Gatsby

#### Everything must go through Gatsby

#### Can only do dynamic queries at page level

Can do static queries elsewhere.

Also, gatsby runs queries at build time, not render time, so there's no waiting
for the data to return like other React apps.

#### Keep pages as slim as possible

Fetch the dynamic data at the page level, and then pass to components for more
detailed digeston and display.

#### Put Layout in gatsby-browser rather than on every page

Gatsby will read through `gatsby-browser` and `gatsby-ssr` before rendering the
content to the page or during server side rendering. Export a `wrapPageElement`
function to customize ([docs](https://www.gatsbyjs.com/docs/browser-apis/#wrapPageElement))

#### Can use navigate() instead of Link from Gatsby

If you add `navigate('/route', { replace: true })` it will navigate and add the
location to the current history.

#### Import normalize.css to Layout to set a standard DOM starting point

This sets a common starting point for my css, regardless of what browser I'm on.
It will do things like remove the unecessary starting margins and paddings.

#### Can filter graphql queries, and return all by default

TIL; You can do something like this in Gatsby graphql queries to either filter,
or return all if the **non-required** filter value is not passed in.

```graphql
query($topping: String) {
  pizzas: allSanityPizza(
    filter: { toppings: { elemMatch: { name: { eq: $topping } } } }
  ) {
    nodes {
      name
      id
      slug {
        current
      }
      toppings {
        id
        name
      }
    }
  }
}

// query variables
{}

```

#### Can use aria-current="page" to select a link that matches the URL

Very useful to highlight the selected menu item! Ex:

```css
a {
  &[aria-current='page'] {
    color: red;
  }
}
```



## CSS

#### Using css grid and subgrid, `--vars`, and `@supports`

Some great learnings and notes in `PizzaList.js`, video #21.

#### Can use `gap` in Flexbox now

Just add `gap` to the wrapper element, instead of having to add margin or
padding to the child.

```javascript
const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`
```

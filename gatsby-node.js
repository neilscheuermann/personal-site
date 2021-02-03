const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fetchNailBiters = require('./src/utils/fetchNailBiters')

exports.sourceNodes = async params => {
  await fetchGamesAndTurnIntoNodes(params)
}

exports.createPages = async params => {
  await turnBlogPostsIntoPages(params)

  await Promise.all([paginateNailbiters(params)])
}

async function fetchGamesAndTurnIntoNodes(params) {
  const nailbiters = await fetchNailBiters()
  nailbiters.forEach(game => createNailbiterNode(game, params))
}

function createNailbiterNode(
  game,
  { actions, createNodeId, createContentDigest }
) {
  const nodeContent = JSON.stringify(game)

  const nodeMeta = {
    id: createNodeId(
      `nailbiter-${game.startDateEastern}-${game.vTeam.tricode}-${game.hTeam.tricode}`
    ),
    parent: null,
    children: [],
    internal: {
      type: `NailbiterItem`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(game),
    },
  }

  const node = { ...game, ...nodeMeta }
  actions.createNode(node)
}

function turnBlogPostsIntoPages({ graphql, actions }) {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

async function paginateNailbiters({ graphql, actions }) {
  // TODO: >>> find way to pass this to the query
  // process.env.GATSBY_PAGE_SIZE
  const { data } = await graphql(`
    query {
      games: allNailbiterItem(
        sort: { fields: startDateEastern, order: DESC }
        limit: 10
      ) {
        pageInfo {
          pageCount
          perPage
        }
        totalCount
      }
    }
  `)

  const { pageCount, perPage } = data.games.pageInfo

  console.log(
    `There are ${data.games.totalCount} nailbiters and we will create ${pageCount} pages`
  )

  for (let i = 1; i <= pageCount; i++) {
    actions.createPage({
      path: `nailbiter-recaps/${i}`,
      component: path.resolve('./src/pages/nailbiter-recaps.js'),
      context: {
        skip: (i - 1) * parseInt(perPage),
        limit: parseInt(perPage),
      },
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

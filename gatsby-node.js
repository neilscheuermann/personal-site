const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const analyzeGames = require('./src/utils/analyzeGames')

exports.createPages = ({ graphql, actions }) => {
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

exports.sourceNodes = async params => {
  await fetchGamesAndTurnIntoNodes(params)
}

async function fetchGamesAndTurnIntoNodes(params) {
  const nailbiters = await analyzeGames()
  nailbiters.forEach(game => createNailbiterNode(params, game))
}

function createNailbiterNode(
  { actions, createNodeId, createContentDigest },
  game
) {
  const nodeContent = JSON.stringify(game)

  const nodeMeta = {
    id: createNodeId(
      `nailbiter-${game.startDateEastern}-${game.vTeam.triCode}-${game.hTeam.triCode}`
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

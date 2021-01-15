import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function NailbiterRecapsPage({ data, location }) {
  return (
    <Layout location={location}>
      <SEO title="Nailbiter Recaps" />
      <PageStyles>
        <p>This is the nailbiters page</p>
        {/* TODO>>>: Find a way to search in youtube `nba full game highlights */}
        {/* tricode tricode date` */}
        {/* Then select the first video in the result. */}
        {/* Then block the progress bar and time. */}
        {data.games.nodes.map(game => (
          <div>
            <h3>{game.gameUrlCode}</h3>
            {game.period.current > 4 && 'Went into overtime!!!'}
            <p>
              {game.vTeam.score} - {game.hTeam.score}
            </p>
            <p>{game.startDateEastern}</p>
          </div>
        ))}
      </PageStyles>
    </Layout>
  )
}

const PageStyles = styled.div``

export const query = graphql`
  query {
    games: allNailbiterItem {
      nodes {
        gameUrlCode
        hTeam {
          score
        }
        startDateEastern(formatString: "MMMM DD, YYYY")
        vTeam {
          score
        }
        period {
          current
        }
      }
    }
  }
`

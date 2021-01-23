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
        {data.games.nodes.map(game => {
          const [month, day, year] = game.startDateEastern.split(' ')
          const { vTeam, hTeam, highlightVideoUrl, startDateEastern } = game

          return (
            <div>
              <h3>
                {vTeam.nickname} at {hTeam.nickname}
              </h3>
              <p>{startDateEastern}</p>
              <a
                href={`https://www.youtube.com/results?search_query=${vTeam.nickname}+at+${hTeam.nickname}+${month}+${day}+${year}`}
              >
                Search on YouTube
              </a>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src={highlightVideoUrl}
                  title={`NBA higlight of ${vTeam.nickname} at ${hTeam.nickname}, ${month}/${day}/${year}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          )
        })}
      </PageStyles>
    </Layout>
  )
}

const PageStyles = styled.div``

export const query = graphql`
  query {
    games: allNailbiterItem(
      sort: { fields: startDateEastern, order: DESC }
      limit: 10
    ) {
      nodes {
        gameUrlCode
        highlightVideoUrl
        startDateEastern(formatString: "MMM DD YYYY")
        hTeam {
          nickname
        }
        vTeam {
          nickname
        }
        period {
          current
        }
      }
    }
  }
`

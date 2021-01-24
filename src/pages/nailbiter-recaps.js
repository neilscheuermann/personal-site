import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function NailbiterRecapsPage({ data, location }) {
  const {
    currentPage,
    hasNextPage,
    hasPreviousPage,
    pageCount,
  } = data.games.pageInfo
  const pagesArr = Array(pageCount).fill(undefined)

  return (
    <Layout location={location}>
      <SEO title="Nailbiter Recaps" />
      <PageStyles>
        <h1>Nailbiters</h1>
        <PaginationStyles>
          <Link
            disabled={!hasPreviousPage}
            to={`/nailbiter-recaps/${currentPage - 1}`}
          >
            Back
          </Link>
          {pagesArr.map((_, index) => {
            return (
              <Link to={`/nailbiter-recaps/${index + 1}`}>
                <p>{index + 1}</p>
              </Link>
            )
          })}
          <Link
            disabled={!hasNextPage}
            to={`/nailbiter-recaps/${currentPage + 1}`}
          >
            Next
          </Link>
        </PaginationStyles>
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

const PaginationStyles = styled.div`
  display: flex;

  & > * {
    padding: 1rem;
    flex: 1;
    text-decoration: none;
    border-right: solid 1px grey;

    &[aria-current],
    &.current {
      color: red;
    }

    &[disabled] {
      pointer-events: none;
      color: grey;
    }
  }
`

export const query = graphql`
  query($limit: Int = 10, $skip: Int = 0) {
    games: allNailbiterItem(
      sort: { fields: startDateEastern, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        pageCount
      }
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

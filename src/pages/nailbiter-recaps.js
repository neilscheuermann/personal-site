import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import NailbiterRecapCard from '../components/NailbiterRecapCard'
import SEO from '../components/seo'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function NailbiterRecapsPage({ data, location }) {
  const {
    currentPage,
    hasNextPage,
    hasPreviousPage,
    pageCount,
  } = data.nailbiters.pageInfo
  const pagesArr = Array(pageCount).fill(undefined)

  return (
    <Layout location={location}>
      <SEO title="Nailbiter Recaps" />
      <PageStyles>
        <h1>Nailbiter Recaps</h1>
        <div className="jc-center">
          <PaginationStyles>
            <Link
              disabled={!hasPreviousPage}
              to={`/nailbiter-recaps/${currentPage - 1}`}
            >
              Back
            </Link>
            {pagesArr.map((_, index) => {
              return (
                <Link key={index} to={`/nailbiter-recaps/${index + 1}`}>
                  {index + 1}
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
        </div>
        <GridStyles>
          {data.nailbiters.nodes.map(nailbiter => {
            return (
              <NailbiterRecapCard
                key={nailbiter.id || nailbiter.startDateEastern}
                nailbiter={nailbiter}
              />
            )
          })}
        </GridStyles>
      </PageStyles>
    </Layout>
  )
}

const PageStyles = styled.div`
  & > h1 {
    text-align: center;
  }
`

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  & > * {
    border: solid var(--black-gray-faded) 1px;
    border-radius: 6%;
    text-align: center;
    background: var(--background);
    margin: 0.5rem;

    & > :last-child {
      margin-bottom: 1rem;
    }
  }
`

const PaginationStyles = styled.div`
  display: flex;
  overflow: scroll;
  width: 80%;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
    padding: 1rem 0;
  }

  & > a {
    flex: 1;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    padding-left: 1rem;
    padding-right: 1rem;

    &[aria-current],
    &.current {
      color: red;
    }

    &[disabled] {
      pointer-events: none;
      color: grey;
    }

    &:hover {
      background: grey;
    }
  }
`

export const query = graphql`
  query($limit: Int = 10, $skip: Int = 0) {
    nailbiters: allNailbiterItem(
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
          tricode
        }
        vTeam {
          nickname
          tricode
        }
        period {
          current
        }
      }
    }
  }
`

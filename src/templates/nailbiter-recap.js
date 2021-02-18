import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

export default function NailbiterRecap(props) {
  const nailbiter = props.data.nailbiterItem
  const [month, day, year] = nailbiter.startDateEastern.split(' ')
  const { vTeam, hTeam } = nailbiter

  return (
    <Layout location={props.location}>
      <Wrapper>
        <h2>
          {nailbiter.vTeam.nickname} at {nailbiter.hTeam.nickname}
        </h2>
        <p>{nailbiter.startDateEastern}</p>
        <Links>
          <a
            href={`https://www.youtube.com/results?search_query=${vTeam.nickname}+at+${hTeam.nickname}+${month}+${day}+${year}1st+quarter+highlights`}
            target="_blank"
            rel="noreferrer"
          >
            Search 1st Quarter on YouTube
          </a>
          <a
            href={`https://www.youtube.com/results?search_query=${vTeam.nickname}+at+${hTeam.nickname}+${month}+${day}+${year}2nd+quarter+highlights`}
            target="_blank"
            rel="noreferrer"
          >
            Search 2nd Quarter on YouTube
          </a>
          <a
            href={`https://www.youtube.com/results?search_query=${vTeam.nickname}+at+${hTeam.nickname}+${month}+${day}+${year}3rd+quarter+highlights`}
            target="_blank"
            rel="noreferrer"
          >
            Search 3rd Quarter on YouTube
          </a>
          <a
            href={`https://www.youtube.com/results?search_query=${vTeam.nickname}+at+${hTeam.nickname}+${month}+${day}+${year}4th+quarter+highlights`}
            target="_blank"
            rel="noreferrer"
          >
            Search 4th Quarter on YouTube
          </a>
        </Links>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  text-align: center;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
`

export const query = graphql`
  query($id: String!) {
    nailbiterItem(id: { eq: $id }) {
      startDateEastern(formatString: "MMM DD YYYY")
      hTeam {
        nickname
      }
      vTeam {
        nickname
      }
    }
  }
`

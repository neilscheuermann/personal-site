import React from 'react'
import styled from 'styled-components'

export default function NailbiterRecapCard({ game }) {
  const [month, day, year] = game.startDateEastern.split(' ')
  const { vTeam, hTeam, highlightVideoUrl, startDateEastern } = game

  return (
    <Wrapper>
      <h3>
        {vTeam.nickname} at {hTeam.nickname}
      </h3>
      <p>{startDateEastern}</p>
      <a
        href={`https://www.youtube.com/results?search_query=${vTeam.nickname}+at+${hTeam.nickname}+${month}+${day}+${year}`}
        target="_blank"
        rel="noreferrer"
      >
        Search on YouTube
      </a>
      <div className="video-container">
        {/* <iframe */}
        {/*   width="560" */}
        {/*   height="315" */}
        {/*   src={highlightVideoUrl} */}
        {/*   title={`NBA higlight of ${vTeam.nickname} at ${hTeam.nickname}, ${month}/${day}/${year}`} */}
        {/*   frameborder="0" */}
        {/*   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" */}
        {/*   allowfullscreen */}
        {/* /> */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div``

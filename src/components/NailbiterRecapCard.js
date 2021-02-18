import React from 'react'
import { Link } from 'gatsby'

export default function NailbiterRecapCard({ nailbiter }) {
  const [month, day, year] = nailbiter.startDateEastern.split(' ')
  const { vTeam, hTeam, highlightVideoUrl, startDateEastern } = nailbiter

  return (
    <div>
      <Link
        to={`/nailbiter-recap-${year}${day}${month}${nailbiter.vTeam.tricode}${nailbiter.hTeam.tricode}`}
      >
        <h3>
          {vTeam.nickname} at {hTeam.nickname}
        </h3>
      </Link>
      <p>{startDateEastern}</p>
      <a
        href={`https://www.youtube.com/results?search_query=${vTeam.nickname}+at+${hTeam.nickname}+${month}+${day}+${year}`}
        target="_blank"
        rel="noreferrer"
      >
        Search on YouTube
      </a>
      {/* <div className="video-container"> */}
      {/* <iframe */}
      {/*   width="560" */}
      {/*   height="315" */}
      {/*   src={highlightVideoUrl} */}
      {/*   title={`NBA higlight of ${vTeam.nickname} at ${hTeam.nickname}, ${month}/${day}/${year}`} */}
      {/*   frameborder="0" */}
      {/*   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" */}
      {/*   allowfullscreen */}
      {/* /> */}
      {/* </div> */}
    </div>
  )
}

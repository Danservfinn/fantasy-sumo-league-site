import React, { useEffect, useMemo, useState } from 'react'
import { leagueTeams, scoringRules } from './data/league'
import { analysisForOwner, teamAnalyses, type TeamAnalysis } from './data/analysis'
import { connectLiveEvents, type LiveSnapshot } from './liveData'
import { headToHeadMatchups, rikishiFantasyPoints, sortedStandings } from './scoring'
import './styles.css'

function activeAnalysisSlug() {
  const match = window.location.pathname.match(/^\/analysis\/([^/]+)/)
  return match?.[1]?.toLowerCase() ?? null
}

function App() {
  const [snapshot, setSnapshot] = useState<LiveSnapshot | null>(null)
  const [analysisSlug, setAnalysisSlug] = useState<string | null>(() => activeAnalysisSlug())
  const standings = useMemo(() => sortedStandings(leagueTeams), [])
  const matchups = useMemo(() => headToHeadMatchups(standings).slice(0, 10), [standings])
  const topScore = Math.max(...standings.map((team) => team.points), 1)

  useEffect(() => connectLiveEvents(setSnapshot), [])
  useEffect(() => {
    const onPop = () => setAnalysisSlug(activeAnalysisSlug())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const openAnalysis = (event: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    event.preventDefault()
    window.history.pushState(null, '', `/analysis/${slug}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setAnalysisSlug(slug)
  }

  const selectedAnalysis = analysisSlug ? teamAnalyses.find((analysis) => analysis.slug === analysisSlug) : null

  if (selectedAnalysis) {
    return <AnalysisPage analysis={selectedAnalysis} onNavigateHome={() => { window.history.pushState(null, '', '/'); setAnalysisSlug(null) }} onOpenAnalysis={openAnalysis} />
  }

  return (
    <main>
      <header className="hero">
        <nav className="topbar">
          <span className="brand-mark">相撲</span>
          <strong>Fantasy Sumo League</strong>
          <a href="#standings">Standings</a>
          <a href="#teams">Teams</a>
          <a href="#analysis">Analysis</a>
          <a href="#live">Live feed</a>
        </nav>
        <section className="hero-grid">
          <div>
            <p className="eyebrow">May basho • local dashboard • mock-live ready</p>
            <h1>Fantasy sumo command center.</h1>
            <p className="lede">
              Track every fantasy stable, every kachi-koshi push, every honor-prize swing, and every matchup as the basho unfolds.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#standings">View league table</a>
              <span className={`status-pill ${snapshot?.sourceStatus ?? 'offline'}`}>
                <span className="pulse" /> {snapshot?.sourceStatus ?? 'loading'} via {snapshot?.provider ?? 'provider negotiation'}
              </span>
            </div>
          </div>
          <LivePanel snapshot={snapshot} />
        </section>
      </header>

      <section className="section" id="standings">
        <div className="section-heading">
          <p className="eyebrow">Scoreboard</p>
          <h2>League table</h2>
          <p>Fantasy points combine wins, kachi-koshi bonuses, honor prizes, kinboshi, and kimarite bonuses.</p>
        </div>
        <div className="standings-grid">
          {standings.map((team, index) => (
            <article className="standing-card" key={team.owner} style={{ '--team-color': team.color } as React.CSSProperties}>
              <div className="rank-badge">#{index + 1}</div>
              <div>
                <h3>{team.owner}</h3>
                <p>{team.wins}-{team.losses} • projected {team.projectedPoints}</p>
              </div>
              <strong>{team.points}</strong>
              <div className="score-bar"><span style={{ width: `${(team.points / topScore) * 100}%` }} /></div>
              <footer>
                <span>{team.kachiKoshi} kachi-koshi locks</span>
                {team.statusFlags > 0 && <span className="warning">{team.statusFlags} roster flag</span>}
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="analysis">
        <div className="section-heading">
          <p className="eyebrow">Draft room</p>
          <h2>Analysis pages for all six players</h2>
          <p>Each league player now has a dedicated analysis page. Danny and Josh now include full scouting reports, with the remaining reports staged for review.</p>
        </div>
        <div className="analysis-grid">
          {teamAnalyses.map((analysis) => {
            const team = leagueTeams.find((item) => item.owner === analysis.owner)
            return (
              <article className="analysis-card" key={analysis.owner} style={{ '--team-color': team?.color ?? '#7170ff' } as React.CSSProperties}>
                <p className="eyebrow">Team {analysis.owner}</p>
                <h3>{analysis.overallGrade}</h3>
                <p>{analysis.summary[0]}</p>
                <a className="primary-button" href={`/analysis/${analysis.slug}`} onClick={(event) => openAnalysis(event, analysis.slug)}>
                  Open {analysis.owner} analysis
                </a>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section split">
        <div className="rules-card">
          <p className="eyebrow">Scoring model</p>
          <h2>How points are awarded</h2>
          <p>Wins form the base, but honor points can swing a matchup quickly.</p>
          <div className="rules-list">
            {scoringRules.map((rule) => (
              <div key={rule.label}><span>{rule.label}</span><strong>{rule.points}</strong></div>
            ))}
          </div>
        </div>
        <div className="architecture-card">
          <p className="eyebrow">Live architecture</p>
          <h2>SSE-first, snapshot-safe</h2>
          <ol>
            <li>Try <code>/api/live</code> for streaming basho updates.</li>
            <li>Fallback to <code>/data/live-snapshot.json</code> when the stream is absent.</li>
            <li>Use an in-browser mock feed only if no snapshot is reachable.</li>
          </ol>
        </div>
      </section>

      <section className="section" id="teams">
        <div className="section-heading">
          <p className="eyebrow">Rosters</p>
          <h2>Stable-by-stable breakdown</h2>
        </div>
        <div className="team-grid">
          {leagueTeams.map((team) => (
            <article className="team-card" key={team.owner} style={{ '--team-color': team.color } as React.CSSProperties}>
              <header>
                <h3>{team.owner}</h3>
                <a href={`/analysis/${team.owner.toLowerCase()}`} onClick={(event) => openAnalysis(event, team.owner.toLowerCase())}>Analysis →</a>
              </header>
              <div className="rikishi-list">
                {team.rikishi.map((rikishi) => (
                  <div className="rikishi-row" key={rikishi.name}>
                    <div>
                      <strong>{rikishi.name}</strong>
                      <span>{rikishi.rank} {rikishi.side} • {rikishi.wins}-{rikishi.losses}</span>
                      {rikishi.note && <em>{rikishi.note}</em>}
                    </div>
                    <div className="rikishi-score">
                      <strong>{rikishiFantasyPoints(rikishi)}</strong>
                      <b className={rikishi.status}>{rikishi.status}</b>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="matchups">
        <div className="section-heading">
          <p className="eyebrow">Head-to-head</p>
          <h2>Round-robin pressure map</h2>
        </div>
        <div className="matchup-grid">
          {matchups.map((matchup) => (
            <article className="matchup-card" key={`${matchup.left.owner}-${matchup.right.owner}`}>
              <small>{matchup.left.owner} vs {matchup.right.owner}</small>
              <strong>{matchup.spread}</strong>
              <span>leader: {matchup.leader}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function AnalysisPage({ analysis, onNavigateHome, onOpenAnalysis }: { analysis: TeamAnalysis; onNavigateHome: () => void; onOpenAnalysis: (event: React.MouseEvent<HTMLAnchorElement>, slug: string) => void }) {
  const team = leagueTeams.find((item) => item.owner === analysis.owner)
  const rosterRows = analysis.roster.length > 0 ? analysis.roster : team?.rikishi.map((rikishi, index) => ({ pick: `R${index + 1}`, rikishi: rikishi.name, rank: `${rikishi.rank} ${rikishi.side}`, grade: 'Pending', expectedWins: 'Pending', notes: rikishi.note ?? 'Analysis pending' })) ?? []

  return (
    <main>
      <header className="analysis-hero" style={{ '--team-color': team?.color ?? '#7170ff' } as React.CSSProperties}>
        <nav className="topbar analysis-nav">
          <span className="brand-mark">相撲</span>
          <button onClick={onNavigateHome}>← Dashboard</button>
          {teamAnalyses.map((item) => <a key={item.owner} href={`/analysis/${item.slug}`} onClick={(event) => onOpenAnalysis(event, item.slug)}>{item.owner}</a>)}
        </nav>
        <div className="analysis-title">
          <p className="eyebrow">Dedicated player analysis</p>
          <h1>{analysis.title}</h1>
          <div className="grade-lockup"><span>Overall Grade</span><strong>{analysis.overallGrade}</strong></div>
        </div>
      </header>

      <section className="section analysis-layout">
        <article className="analysis-panel span-2">
          <h2>Executive read</h2>
          {analysis.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {analysis.sources && <div className="source-row">{analysis.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label}</a>)}</div>}
        </article>
        <article className="analysis-panel stat-tile"><span>Projected team wins</span><strong>{analysis.projectedWins}</strong></article>
        <article className="analysis-panel stat-tile"><span>Ceiling</span><strong>{analysis.ceiling}</strong></article>
        <article className="analysis-panel stat-tile"><span>Floor</span><strong>{analysis.floor}</strong></article>
      </section>

      <section className="section">
        <div className="section-heading"><p className="eyebrow">Roster</p><h2>Your six picks</h2></div>
        <div className="report-table">
          {rosterRows.map((row) => (
            <div className="report-row" key={row.rikishi}>
              <span>{row.pick}</span><strong>{row.rikishi}</strong><span>{row.rank}</span><span>{row.grade}</span><span>{row.expectedWins}</span><p>{row.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section split">
        <article className="analysis-panel"><h2>What went right</h2><ul>{analysis.strategicSummary.strengths.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article className="analysis-panel"><h2>Where this can break</h2><ul>{analysis.strategicSummary.vulnerabilities.map((item) => <li key={item}>{item}</li>)}</ul><p>{analysis.strategicSummary.tone}</p></article>
      </section>

      {analysis.picks.length > 0 && <section className="section">
        <div className="section-heading"><p className="eyebrow">Pick by pick</p><h2>Rikishi analysis</h2></div>
        <div className="pick-grid">
          {analysis.picks.map((pick) => (
            <article className="pick-card" key={pick.name}>
              <div className="pick-topline"><span>Pick {pick.pick}</span><strong>{pick.grade}</strong></div>
              <h3>{pick.name}</h3>
              <p className="muted">{pick.rank} • expected {pick.expectedWins}</p>
              <p>{pick.notes}</p>
              <h4>Recent form</h4><p>{pick.recentForm.join(' · ')}</p>
              <div className="mini-columns"><div><h4>Strengths</h4><ul>{pick.strengths.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h4>Weaknesses</h4><ul>{pick.weaknesses.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
              <h4>Projection</h4><ul>{pick.projection.map((item) => <li key={item}>{item}</li>)}</ul>
              <blockquote>{pick.verdict}</blockquote>
            </article>
          ))}
        </div>
      </section>}

      {analysis.model && <section className="section">
        <div className="section-heading"><p className="eyebrow">Quant model</p><h2>Expected wins + honor EV - risk</h2><p>combined_score = expected_wins + (0.55 × expected_honor_points) - risk_penalty</p></div>
        <div className="model-grid">{analysis.model.map((row) => <article key={row.rikishi} className="analysis-panel"><h3>{row.rikishi}</h3><p>Wins {row.expectedWins} • Honor EV {row.honorEv} • Risk {row.riskPenalty}</p><strong>{row.combined}</strong></article>)}</div>
      </section>}

      {analysis.trackGrades && <section className="section">
        <div className="section-heading"><p className="eyebrow">Track grades</p><h2>How Team {analysis.owner} profiles</h2></div>
        <div className="analysis-grid">{analysis.trackGrades.map((track) => <article className="analysis-card" key={track.label}><p className="eyebrow">{track.label}</p><h3>{track.grade}</h3><p>{track.note}</p></article>)}</div>
      </section>}

      {(analysis.archetype || analysis.comparison) && <section className="section split">
        {analysis.archetype && <article className="analysis-panel"><p className="eyebrow">Team archetype</p><h2>{analysis.archetype.label}</h2><p>{analysis.archetype.why}</p></article>}
        {analysis.comparison && <article className="analysis-panel"><p className="eyebrow">Compared to Team Danny</p><h2>Relative profile</h2><ul>{analysis.comparison.map((item) => <li key={item.label}><strong>{item.label}:</strong> {item.note}</li>)}</ul></article>}
      </section>}

      <section className="section split">
        <article className="analysis-panel"><h2>How this team wins</h2><ol>{analysis.winConditions?.map((item) => <li key={item}>{item}</li>) ?? <li>Detailed win path pending.</li>}</ol></article>
        <article className="analysis-panel"><h2>How this team loses</h2><ol>{analysis.lossConditions?.map((item) => <li key={item}>{item}</li>) ?? <li>Detailed risk path pending.</li>}</ol></article>
      </section>

      <section className="section"><article className="analysis-panel final-verdict"><p className="eyebrow">Final verdict</p>{analysis.finalVerdict.map((item) => <h2 key={item}>{item}</h2>)}</article></section>
    </main>
  )
}

function LivePanel({ snapshot }: { snapshot: LiveSnapshot | null }) {
  return (
    <aside className="live-panel" id="live">
      <div className="panel-topline">
        <p className="eyebrow">Live feed</p>
        <code>Day {snapshot?.day ?? '—'}</code>
      </div>
      <div className="feed-list">
        {(snapshot?.events ?? []).map((event) => (
          <article key={`${event.time}-${event.title}`}>
            <time>{event.time} • {event.source}</time>
            <h3>{event.title}</h3>
            <p>{event.summary}</p>
          </article>
        ))}
      </div>
      <footer>Last updated {snapshot?.lastUpdated ? new Date(snapshot.lastUpdated).toLocaleString() : 'waiting for stream'}</footer>
    </aside>
  )
}

export default App

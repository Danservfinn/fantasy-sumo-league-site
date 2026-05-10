import { useEffect, useMemo, useState } from 'react'
import { leagueTeams, scoringRules } from './data/league'
import { headToHeadMatchups, rikishiFantasyPoints, sortedStandings } from './scoring'
import { connectLiveEvents, loadLiveSnapshot, type LiveSnapshot } from './liveData'

function App() {
  const [snapshot, setSnapshot] = useState<LiveSnapshot | null>(null)
  const standings = useMemo(() => sortedStandings(leagueTeams), [])
  const matchups = useMemo(() => headToHeadMatchups(standings), [standings])
  const topScore = Math.max(...standings.map((team) => team.points))

  useEffect(() => {
    void loadLiveSnapshot().then(setSnapshot)
    return connectLiveEvents(setSnapshot)
  }, [])

  return (
    <main>
      <header className="hero">
        <nav className="topbar">
          <span className="brand-mark">相撲</span>
          <span>Fantasy Sumo Live League</span>
          <a href="#standings">Standings</a>
          <a href="#teams">Teams</a>
          <a href="#matchups">Matchups</a>
        </nav>
        <section className="hero-grid">
          <div>
            <p className="eyebrow">May basho • local dashboard • mock-live ready</p>
            <h1>Six fantasy stables. Fifteen matchups. One live yusho race.</h1>
            <p className="lede">
              A polished dark dashboard for tracking roster score, rikishi form, honor prizes, status warnings, and a live feed architecture that can swap from local JSON to SSE when official data becomes available.
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
          <h2>Team standings</h2>
          <p>Points include wins, honor awards, kinboshi, kachi-koshi bonuses, and kimarite bonuses.</p>
        </div>
        <div className="standings-grid">
          {standings.map((team, index) => (
            <article className="standing-card" key={team.owner} style={{ '--team-color': team.color } as React.CSSProperties}>
              <div className="rank-badge">#{index + 1}</div>
              <div>
                <h3>{team.owner}</h3>
                <p>{team.wins}-{team.losses} combined • {team.activeRikishi}/6 active • {team.kachiKoshi} KK</p>
              </div>
              <strong>{team.points}</strong>
              <div className="score-bar"><span style={{ width: `${(team.points / topScore) * 100}%` }} /></div>
              <footer>
                <span>Projection {team.projectedPoints}</span>
                {team.statusFlags > 0 && <span className="warning">{team.statusFlags} roster flag</span>}
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div className="rules-card">
          <p className="eyebrow">Scoring model</p>
          <h2>Honor prizes and bonus rails</h2>
          <div className="rules-list">
            {scoringRules.map((rule) => (
              <div key={rule.label}><span>{rule.label}</span><strong>+{rule.points}</strong></div>
            ))}
          </div>
        </div>
        <div className="architecture-card">
          <p className="eyebrow">Live architecture</p>
          <h2>SSE first, polling-safe, mock fallback</h2>
          <ol>
            <li>Try <code>/api/live</code> EventSource for server-sent official updates.</li>
            <li>On disconnect, load <code>/data/live-snapshot.json</code> as a local manually updatable snapshot.</li>
            <li>If no source exists, render mock events with explicit provider status instead of hiding stale data.</li>
          </ol>
        </div>
      </section>

      <section className="section" id="teams">
        <div className="section-heading">
          <p className="eyebrow">Rosters</p>
          <h2>Team cards and rikishi form</h2>
        </div>
        <div className="team-grid">
          {leagueTeams.map((team) => (
            <article className="team-card" key={team.owner} style={{ '--team-color': team.color } as React.CSSProperties}>
              <header>
                <h3>{team.owner}</h3>
                <span>{team.rikishi.reduce((sum, rikishi) => sum + rikishiFantasyPoints(rikishi), 0)} pts</span>
              </header>
              <div className="rikishi-list">
                {team.rikishi.map((rikishi) => (
                  <div className="rikishi-row" key={rikishi.name}>
                    <div>
                      <strong>{rikishi.name}</strong>
                      <span>{rikishi.rank} {rikishi.side}</span>
                      {rikishi.note && <em>{rikishi.note}</em>}
                    </div>
                    <div className="rikishi-score">
                      <span>{rikishi.wins}-{rikishi.losses}</span>
                      <small>{rikishiFantasyPoints(rikishi)} pts</small>
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
          <p className="eyebrow">Round robin</p>
          <h2>15 head-to-head trackers</h2>
        </div>
        <div className="matchup-grid">
          {matchups.map((matchup) => (
            <article className="matchup-card" key={`${matchup.left.owner}-${matchup.right.owner}`}>
              <span>{matchup.left.owner}</span>
              <strong>{matchup.left.points}–{matchup.right.points}</strong>
              <span>{matchup.right.owner}</span>
              <small>{matchup.leader} leads by {matchup.spread}</small>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function LivePanel({ snapshot }: { snapshot: LiveSnapshot | null }) {
  return (
    <aside className="live-panel">
      <div className="panel-topline">
        <span>Live basho feed</span>
        <code>Day {snapshot?.day ?? '—'}</code>
      </div>
      <div className="feed-list">
        {(snapshot?.events ?? []).map((event) => (
          <article key={`${event.time}-${event.title}`}>
            <time>{event.time}</time>
            <h3>{event.title}</h3>
            <p>{event.summary}</p>
          </article>
        ))}
        {!snapshot && <p className="muted">Negotiating data provider…</p>}
      </div>
      <footer>Last updated {snapshot ? new Date(snapshot.lastUpdated).toLocaleString() : 'pending'}</footer>
    </aside>
  )
}

export default App

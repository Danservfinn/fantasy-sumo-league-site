import type { Rikishi, Team } from './data/league'

export interface TeamStanding {
  owner: string
  color: string
  wins: number
  losses: number
  activeRikishi: number
  kachiKoshi: number
  points: number
  projectedPoints: number
  statusFlags: number
}

export function rikishiFantasyPoints(rikishi: Rikishi): number {
  const kachiKoshiBonus = rikishi.wins >= 8 ? 2 + Math.max(0, rikishi.wins - 8) : 0
  return rikishi.wins + rikishi.honorPoints + rikishi.kinboshi * 3 + rikishi.notableKimarite + rikishi.rareKimarite * 3 + kachiKoshiBonus
}

export function teamStanding(team: Team): TeamStanding {
  const wins = team.rikishi.reduce((sum, rikishi) => sum + rikishi.wins, 0)
  const losses = team.rikishi.reduce((sum, rikishi) => sum + rikishi.losses, 0)
  const points = team.rikishi.reduce((sum, rikishi) => sum + rikishiFantasyPoints(rikishi), 0)
  const boutsCompleted = Math.max(1, wins + losses)
  const projectedPoints = Math.round((points / boutsCompleted) * team.rikishi.length * 15)
  return {
    owner: team.owner,
    color: team.color,
    wins,
    losses,
    activeRikishi: team.rikishi.filter((rikishi) => rikishi.status === 'active').length,
    kachiKoshi: team.rikishi.filter((rikishi) => rikishi.wins >= 8).length,
    points,
    projectedPoints,
    statusFlags: team.rikishi.filter((rikishi) => rikishi.status !== 'active').length,
  }
}

export function sortedStandings(teams: Team[]): TeamStanding[] {
  return teams.map(teamStanding).sort((a, b) => b.points - a.points || b.wins - a.wins || a.losses - b.losses)
}

export function headToHeadMatchups(standings: TeamStanding[]) {
  const matchups: Array<{ left: TeamStanding; right: TeamStanding; spread: number; leader: string }> = []
  for (let i = 0; i < standings.length; i += 1) {
    for (let j = i + 1; j < standings.length; j += 1) {
      const left = standings[i]
      const right = standings[j]
      const spread = Math.abs(left.points - right.points)
      matchups.push({ left, right, spread, leader: left.points >= right.points ? left.owner : right.owner })
    }
  }
  return matchups
}

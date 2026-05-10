import { describe, expect, it } from 'vitest'
import { headToHeadMatchups, rikishiFantasyPoints, sortedStandings } from './scoring'
import type { Rikishi, Team } from './data/league'

const base: Rikishi = {
  name: 'Test',
  rank: 'Maegashira 1',
  side: 'East',
  wins: 8,
  losses: 7,
  honorPoints: 4,
  kinboshi: 1,
  notableKimarite: 2,
  rareKimarite: 1,
  status: 'active',
}

describe('fantasy scoring', () => {
  it('applies win, honor, kinboshi, kachi-koshi, and kimarite scoring', () => {
    expect(rikishiFantasyPoints(base)).toBe(22)
  })

  it('creates all 15 head-to-head matchups for six teams', () => {
    const teams: Team[] = Array.from({ length: 6 }, (_, index) => ({
      owner: `Owner ${index}`,
      color: '#fff',
      rikishi: [{ ...base, wins: index + 1, losses: 0, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0 }],
    }))
    expect(headToHeadMatchups(sortedStandings(teams))).toHaveLength(15)
  })
})

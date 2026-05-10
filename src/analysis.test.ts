import { describe, expect, it } from 'vitest'
import { categoryLeaders, leaguePowerRanking, teamAnalyses } from './data/analysis'

describe('team analysis pages', () => {
  it('creates one analysis page per fantasy player', () => {
    expect(teamAnalyses.map((analysis) => analysis.slug).sort()).toEqual(['danny', 'david', 'dolo', 'joe', 'josh', 'liz'])
  })

  it('includes the GPT Pro report details for Danny', () => {
    const danny = teamAnalyses.find((analysis) => analysis.owner === 'Danny')
    expect(danny?.overallGrade).toBe('B+ / 87')
    expect(danny?.roster).toHaveLength(6)
    expect(danny?.picks.map((pick) => pick.name)).toContain('Kinbozan')
    expect(danny?.finalVerdict.join(' ')).toContain('contender')
  })

  it('includes the dedicated scouting report details for Josh', () => {
    const josh = teamAnalyses.find((analysis) => analysis.owner === 'Josh')
    expect(josh?.overallGrade).toBe('A- / 90')
    expect(josh?.roster).toHaveLength(6)
    expect(josh?.picks.map((pick) => pick.name)).toEqual(['Hoshoryu', 'Wakatakakage', 'Gonoyama', 'Abi', 'Oshoma', 'Shishi'])
    expect(josh?.archetype?.label).toBe('Top-heavy contender with fragile mid-rounds')
    expect(josh?.finalVerdict.join(' ')).toContain('favorite')
  })

  it('publishes the league power ranking and category read', () => {
    expect(leaguePowerRanking.map((row) => row.team)).toEqual(['Josh', 'Danny', 'Joe', 'Dolo', 'David', 'Liz'])
    expect(leaguePowerRanking[0]).toMatchObject({ rank: 1, grade: 'A- / 90', projectedWins: '45–49' })
    expect(categoryLeaders.map((row) => row.category)).toContain('Most damaged by kyujo')
  })
})

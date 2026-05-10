import { describe, expect, it } from 'vitest'
import { teamAnalyses } from './data/analysis'

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
})

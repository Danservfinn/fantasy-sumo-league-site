export interface RikishiDraftAnalysis {
  pick: string
  name: string
  rank: string
  grade: string
  expectedWins: string
  notes: string
  recentForm: string[]
  strengths: string[]
  weaknesses: string[]
  projection: string[]
  verdict: string
}

export interface DraftModelRow {
  rikishi: string
  expectedWins: number
  honorEv: number
  riskPenalty: number
  combined: number
}

export interface TeamAnalysis {
  owner: string
  slug: string
  title: string
  overallGrade: string
  summary: string[]
  sources?: Array<{ label: string; url: string }>
  roster: Array<{ pick: string; rikishi: string; rank: string; grade: string; expectedWins: string; notes: string }>
  projectedWins: string
  ceiling: string
  floor: string
  strategicSummary: { strengths: string[]; vulnerabilities: string[]; tone: string }
  picks: RikishiDraftAnalysis[]
  model?: DraftModelRow[]
  trackGrades?: Array<{ label: string; grade: string; note: string }>
  winConditions?: string[]
  lossConditions?: string[]
  finalVerdict: string[]
}

export const teamAnalyses: TeamAnalysis[] = [
  {
    owner: 'Danny',
    slug: 'danny',
    title: 'Fantasy Sumo Draft Report — Team Danny',
    overallGrade: 'B+ / 87',
    summary: [
      'This is a good draft, not a dominant draft.',
      'You built a high-upside, honor-friendly roster with several real kachi-koshi and sansho paths, but also stacked a lot of joi and top-rank schedule risk.',
      'If you had draft seat 1 / pick 1.01, taking Atamifuji over the active Yokozuna/Ozeki options was probably a reach.',
      'This grade is pre-Day 1, based on the screenshot at 0-0.',
      'Contextual boost: the official kyujo list had Onosato and Aonishiki absent from Day 1, while none of Danny’s six were listed. That helps because other managers may have burned premium picks and it softens the upper-rank slate.',
    ],
    sources: [
      { label: 'Official banzuke', url: 'https://www.sumo.or.jp/EnHonbashoBanzuke/index/' },
      { label: 'Official kyujo notices', url: 'https://www.sumo.or.jp/EnHonbashoMain/absence/' },
      { label: 'Rikishi profiles and records', url: 'https://www.sumo.or.jp/EnSumoDataRikishi/profile/' },
    ],
    roster: [
      { pick: 'R1', rikishi: 'Atamifuji', rank: 'Sekiwake 1 East', grade: 'B+', expectedWins: '8.2', notes: 'Strong but possibly overdrafted' },
      { pick: 'R2', rikishi: 'Kotoshoho', rank: 'Sekiwake 1 West', grade: 'A-', expectedWins: '8.0', notes: 'Best value on roster' },
      { pick: 'R3', rikishi: 'Fujinokawa', rank: 'Maegashira 1 East', grade: 'B+', expectedWins: '7.4', notes: 'Huge honor upside, brutal schedule' },
      { pick: 'R4', rikishi: 'Yoshinofuji', rank: 'Maegashira 2 East', grade: 'B+', expectedWins: '7.6', notes: 'Real upside, not safe' },
      { pick: 'R5', rikishi: 'Shodai', rank: 'Maegashira 5 West', grade: 'B-', expectedWins: '7.1', notes: 'Volatile veteran' },
      { pick: 'R6', rikishi: 'Kinbozan', rank: 'Maegashira 11 West', grade: 'B+', expectedWins: '7.5', notes: 'Nice late-round value' },
    ],
    projectedWins: '~45-48',
    ceiling: '52+',
    floor: '39-42',
    strategicSummary: {
      strengths: ['Avoided major kyujo landmines.', 'Drafted for honor upside instead of bland safety.', 'Landed real late-round value with Kinbozan.'],
      vulnerabilities: ['Too much joi exposure.', 'Heavy reliance on emerging upper-rank wrestlers.', 'Several picks share the same brutal strength-of-schedule environment.'],
      tone: 'This roster is aggressive, not safe. That can win the league. It can also implode.',
    },
    picks: [
      { pick: '1', name: 'Atamifuji', rank: 'Sekiwake 1 East', grade: 'B+', expectedWins: '8-9', notes: 'Strong but possibly overdrafted', recentForm: ['9-6', '12-3', '8-7', '5-10', '11-4', '8-7'], strengths: ['Ascending trajectory', 'Strong technical versatility', 'Real 9-10 win upside'], weaknesses: ['Not yet proven as stable san’yaku anchor', 'High schedule difficulty', 'Limited kinboshi potential from current rank'], projection: ['Expected wins: 8-9', 'Ceiling: 11+', 'Floor: 6'], verdict: 'Good pick. Possibly bad value if taken 1.01.' },
      { pick: '2', name: 'Kotoshoho', rank: 'Sekiwake 1 West', grade: 'A-', expectedWins: '8', notes: 'Best value on roster', recentForm: ['11-4 with Fighting Spirit Prize', '9-6', '13-2 yusho', '3-12', '6-4-5'], strengths: ['Legitimate yusho ceiling', 'Can generate honor points fast', 'Strong momentum entering basho'], weaknesses: ['Volatile historical profile', 'Not injury-proof'], projection: ['Expected wins: 8', 'Ceiling: 12+', 'Floor: 5'], verdict: 'Best value pick on your team.' },
      { pick: '3', name: 'Fujinokawa', rank: 'Maegashira 1 East', grade: 'B+', expectedWins: '7-8', notes: 'Huge honor upside, brutal schedule', recentForm: ['8-7 with Technique Prize', '10-5', '9-6', '10-5 with Fighting Spirit Prize'], strengths: ['Excellent sansho potential', 'Kinboshi upside', 'Diverse kimarite profile'], weaknesses: ['Extremely difficult joi schedule', 'Risk of getting crushed early'], projection: ['Expected wins: 7-8', 'Ceiling: 10+', 'Floor: 5'], verdict: 'High-variance honor pick.' },
      { pick: '4', name: 'Yoshinofuji', rank: 'Maegashira 2 East', grade: 'B+', expectedWins: '7-8', notes: 'Real upside, not safe', recentForm: ['7-8', '8-7 with Outstanding Performance Prize', '9-6 with Technique Prize', '11-4 with dual prizes'], strengths: ['Excellent honor scoring profile', 'Kinboshi capable', 'Strong technical reputation'], weaknesses: ['Another brutal joi schedule', 'Volatile due to rank pressure'], projection: ['Expected wins: 7-8', 'Ceiling: 10+', 'Floor: 5'], verdict: 'Very dangerous honor-track asset.' },
      { pick: '5', name: 'Shodai', rank: 'Maegashira 5 West', grade: 'B-', expectedWins: '7', notes: 'Volatile veteran', recentForm: ['8-7', '7-8', '4-11', '10-5', '9-6', '6-9'], strengths: ['Veteran adaptability', 'Kimarite diversity', 'Can spike unexpectedly'], weaknesses: ['Extremely inconsistent', 'Effort level can fluctuate', 'Low reliability'], projection: ['Expected wins: 7', 'Ceiling: 10', 'Floor: 4'], verdict: 'Acceptable pick, but not league-winning unless he runs hot.' },
      { pick: '6', name: 'Kinbozan', rank: 'Maegashira 11 West', grade: 'B+', expectedWins: '7-8', notes: 'Nice late-round value', recentForm: ['9-6', '4-11', '7-8', '7-8', '10-5'], strengths: ['Softer schedule lane', 'Good late-round win volume potential', 'Better rank environment than upper joi picks'], weaknesses: ['Not consistent', 'Can unravel quickly under pressure'], projection: ['Expected wins: 7-8', 'Ceiling: 10', 'Floor: 5'], verdict: 'Strong Round 6 value.' },
    ],
    model: [
      { rikishi: 'Atamifuji', expectedWins: 8.2, honorEv: 2.0, riskPenalty: 0.8, combined: 9.3 },
      { rikishi: 'Kotoshoho', expectedWins: 8.0, honorEv: 2.2, riskPenalty: 0.9, combined: 9.3 },
      { rikishi: 'Fujinokawa', expectedWins: 7.4, honorEv: 2.6, riskPenalty: 1.0, combined: 8.8 },
      { rikishi: 'Yoshinofuji', expectedWins: 7.6, honorEv: 2.5, riskPenalty: 1.0, combined: 9.0 },
      { rikishi: 'Shodai', expectedWins: 7.1, honorEv: 1.2, riskPenalty: 0.7, combined: 6.8 },
      { rikishi: 'Kinbozan', expectedWins: 7.5, honorEv: 1.3, riskPenalty: 0.8, combined: 7.4 },
    ],
    trackGrades: [
      { label: 'Wins Track', grade: 'B / B+', note: 'You lack a true dominant 11-13 win anchor.' },
      { label: 'Balanced Win + Honor', grade: 'A-', note: 'Strong blend if the upper-rank bets survive.' },
      { label: 'Pure Wins', grade: 'B', note: 'Solid, but not anchored by a clear monster total.' },
      { label: 'Honor Upside', grade: 'A-', note: 'Strong prize and kinboshi upside.' },
      { label: 'Risk Management', grade: 'B-', note: 'Too much concentration in the upper-rank danger zone.' },
    ],
    winConditions: ['Atamifuji and Kotoshoho both hit 8-7 or better.', 'One of Fujinokawa/Yoshinofuji lands a sansho or kinboshi run.', 'Kinbozan produces 8+ wins from M11.', 'Shodai avoids collapse.'],
    lossConditions: ['Atamifuji underperforms at Sekiwake.', 'Kotoshoho regresses after promotion.', 'Fujinokawa and Yoshinofuji both get overwhelmed by joi scheduling.', 'Shodai produces another 4-11 style tournament.'],
    finalVerdict: ['Good draft.', 'Slightly too clever at the top.', 'You are a contender. You are not a lock.', 'The mistake would be believing this roster is safer than it actually is.'],
  },
]

const placeholderOwners = ['David', 'Liz', 'Josh', 'Dolo', 'Joe']
for (const owner of placeholderOwners) {
  teamAnalyses.push({
    owner,
    slug: owner.toLowerCase(),
    title: `Fantasy Sumo Draft Report — Team ${owner}`,
    overallGrade: 'Analysis pending',
    summary: ['Dedicated analysis page created. Full written scouting report can be added here after review.'],
    roster: [],
    projectedWins: 'Pending',
    ceiling: 'Pending',
    floor: 'Pending',
    strategicSummary: { strengths: ['Roster page is live.'], vulnerabilities: ['Detailed qualitative analysis not yet added.'], tone: 'Pending full scouting report.' },
    picks: [],
    finalVerdict: ['Analysis pending.'],
  })
}

export function analysisForOwner(owner: string) {
  return teamAnalyses.find((analysis) => analysis.owner === owner)
}

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
  archetype?: { label: string; why: string }
  comparison?: Array<{ label: string; note: string }>
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
  {
    owner: 'Josh',
    slug: 'josh',
    title: 'Fantasy Sumo Draft Report — Team Josh',
    overallGrade: 'A- / 91',
    summary: [
      'This is the cleanest contender build in the room: one elite Yokozuna anchor, one high-quality san’yaku support piece, and enough maegashira leverage to keep pace if the middle rounds do not leak wins.',
      'Hoshoryu gives Team Josh the highest single-roster floor on the board. Wakatakakage adds a second top-seven model asset, so Josh is not dependent on one wrestler carrying the whole basho.',
      'The tradeoff is tail risk. Gonoyama, Abi, Oshoma, and Shishi are not all high-floor selections, and Abi in particular can drag the floor down if the losses pile up early.',
      'Pre-basho source context was favorable: Hoshoryu and Wakatakakage were both active in the official May banzuke/absence review, while rival premium picks Onosato and Aonishiki carried absence risk.',
    ],
    sources: [
      { label: 'Official banzuke', url: 'https://www.sumo.or.jp/EnHonbashoBanzuke/index/' },
      { label: 'Official kyujo notices', url: 'https://www.sumo.or.jp/EnHonbashoMain/absence/' },
      { label: 'Rikishi profiles and records', url: 'https://www.sumo.or.jp/EnSumoDataRikishi/profile/' },
    ],
    roster: [
      { pick: 'R1', rikishi: 'Hoshoryu', rank: 'Yokozuna 1 East', grade: 'A', expectedWins: '10.0', notes: 'Elite anchor and No. 2 model asset' },
      { pick: 'R2', rikishi: 'Wakatakakage', rank: 'Komusubi 1 East', grade: 'A-', expectedWins: '8.4', notes: 'Premium san’yaku value with kachi-koshi path' },
      { pick: 'R3', rikishi: 'Gonoyama', rank: 'Maegashira 4 West', grade: 'B', expectedWins: '7.2', notes: 'Volatile mid-maegashira power pick' },
      { pick: 'R4', rikishi: 'Abi', rank: 'Maegashira 9 East', grade: 'C+', expectedWins: '6.5', notes: 'High-variance style; current dashboard form is the concern' },
      { pick: 'R5', rikishi: 'Oshoma', rank: 'Maegashira 8 East', grade: 'B-', expectedWins: '6.9', notes: 'Useful depth if he reaches seven or eight wins' },
      { pick: 'R6', rikishi: 'Shishi', rank: 'Maegashira 12 East', grade: 'B-', expectedWins: '6.8', notes: 'Late-round volume swing from a softer rank band' },
    ],
    projectedWins: '~46-50',
    ceiling: '54+',
    floor: '40-43',
    strategicSummary: {
      strengths: ['Best top-two foundation in the league.', 'Hoshoryu supplies Yokozuna win volume and honor-point ceiling.', 'Wakatakakage was one of the top model alternates and gives Josh a second credible 8+ win path.', 'No Day 1 absence landmine in the premium slots.'],
      vulnerabilities: ['Back half is volatile rather than safe.', 'Abi can produce a damaging make-koshi if the matchup rhythm turns bad.', 'Gonoyama/Oshoma/Shishi need at least one overperformance to convert the anchor advantage into a league win.'],
      tone: 'This is a favorite-profile roster, but not an autopilot roster. The top is excellent; the title depends on whether the lower four tread water.',
    },
    picks: [
      { pick: '1', name: 'Hoshoryu', rank: 'Yokozuna 1 East', grade: 'A', expectedWins: '10-11', notes: 'Elite anchor and No. 2 model asset', recentForm: ['11-4', '10-5', '12-3', '13-2'], strengths: ['Highest reliable win floor on this roster', 'Yusho and jun-yusho paths are live', 'Active Yokozuna while rival premium picks had absence flags'], weaknesses: ['Yokozuna expectations leave little margin for merely okay results', 'Limited kinboshi upside because he is the Yokozuna target, not the hunter'], projection: ['Expected wins: 10-11', 'Ceiling: 13+ with yusho race', 'Floor: 8 if he is healthy but flat'], verdict: 'The right Round 1 anchor. This pick makes Josh a contender immediately.' },
      { pick: '2', name: 'Wakatakakage', rank: 'Komusubi 1 East', grade: 'A-', expectedWins: '8-9', notes: 'Premium san’yaku value with kachi-koshi path', recentForm: ['8-6-1', '9-6', '7-8', '6-9'], strengths: ['Top-seven pre-basho model score', 'Good kachi-koshi probability for the rank', 'Strong enough technique mix to bank steady wins'], weaknesses: ['San’yaku schedule still suppresses ceiling', 'Recent record is solid, not dominant'], projection: ['Expected wins: 8-9', 'Ceiling: 10+', 'Floor: 6'], verdict: 'Excellent second piece. He protects Josh from being only a Hoshoryu team.' },
      { pick: '3', name: 'Gonoyama', rank: 'Maegashira 4 West', grade: 'B', expectedWins: '7', notes: 'Volatile mid-maegashira power pick', recentForm: ['10-5', '7-8', '9-6', '1-14'], strengths: ['Recent 10-5 gives real upside', 'Oshidashi-heavy profile can generate clean win streaks', 'Kinboshi leverage exists from the upper maegashira band'], weaknesses: ['Historical 1-14 shows real collapse risk', 'M4 schedule can punish one-dimensional form'], projection: ['Expected wins: 7', 'Ceiling: 9-10 plus possible kinboshi', 'Floor: 4-5'], verdict: 'A reasonable upside third pick, but not a safety pick.' },
      { pick: '4', name: 'Abi', rank: 'Maegashira 9 East', grade: 'C+', expectedWins: '6-7', notes: 'High-variance style; current dashboard form is the concern', recentForm: ['Current dashboard: 3-6'], strengths: ['Can steal bouts quickly when the thrusting attack lands', 'Lower rank than the joi group gives some recovery lane'], weaknesses: ['Streaky style creates make-koshi risk', 'Current 3-6 dashboard state is already a drag'], projection: ['Expected wins: 6-7', 'Ceiling: 9 if he flips momentum', 'Floor: 4'], verdict: 'The roster’s biggest pressure point.' },
      { pick: '5', name: 'Oshoma', rank: 'Maegashira 8 East', grade: 'B-', expectedWins: '7', notes: 'Useful depth if he reaches seven or eight wins', recentForm: ['6-9', '7-8', '4-11', '9-6'], strengths: ['Middle-rank schedule is more forgiving than the top half', 'Rare-kimarite point is already represented in dashboard data'], weaknesses: ['Recent profile is below .500 overall', 'Needs a clean kachi-koshi to matter in a title race'], projection: ['Expected wins: 7', 'Ceiling: 9', 'Floor: 5'], verdict: 'Fine fifth-round depth, not a roster engine.' },
      { pick: '6', name: 'Shishi', rank: 'Maegashira 12 East', grade: 'B-', expectedWins: '6-7', notes: 'Late-round volume swing from a softer rank band', recentForm: ['Current dashboard: 4-5'], strengths: ['M12 slot gives a softer matchup lane', 'Late pick does not need to star if Hoshoryu/Wakatakakage hit'], weaknesses: ['Still needs to avoid a quiet 5-10 type finish', 'Limited honor ceiling compared with Josh’s top two'], projection: ['Expected wins: 6-7', 'Ceiling: 8-9', 'Floor: 4-5'], verdict: 'Acceptable Round 6 lottery ticket.' },
    ],
    model: [
      { rikishi: 'Hoshoryu', expectedWins: 10.0, honorEv: 2.4, riskPenalty: 0.6, combined: 10.7 },
      { rikishi: 'Wakatakakage', expectedWins: 8.4, honorEv: 1.4, riskPenalty: 0.7, combined: 8.5 },
      { rikishi: 'Gonoyama', expectedWins: 7.2, honorEv: 1.2, riskPenalty: 0.9, combined: 7.0 },
      { rikishi: 'Abi', expectedWins: 6.5, honorEv: 0.8, riskPenalty: 1.0, combined: 5.9 },
      { rikishi: 'Oshoma', expectedWins: 6.9, honorEv: 0.7, riskPenalty: 0.8, combined: 6.5 },
      { rikishi: 'Shishi', expectedWins: 6.8, honorEv: 0.5, riskPenalty: 0.8, combined: 6.3 },
    ],
    trackGrades: [
      { label: 'Wins Track', grade: 'A-', note: 'Hoshoryu and Wakatakakage are the strongest top-two win base in the league.' },
      { label: 'Balanced Win + Honor', grade: 'B+', note: 'Hoshoryu carries honor EV; Gonoyama adds kinboshi leverage, but the lower half is thinner.' },
      { label: 'Pure Wins', grade: 'A-', note: 'This roster can simply out-win the field if the Yokozuna posts 11+.' },
      { label: 'Honor Upside', grade: 'B+', note: 'Good but less explosive than Danny’s upper-maegashira honor stack.' },
      { label: 'Risk Management', grade: 'B', note: 'Premium slots are safe; the fourth through sixth picks are where volatility lives.' },
    ],
    archetype: { label: 'Anchor-and-depth contender', why: 'Josh bought the best available top-end stability first, then accepted lower-round variance instead of spreading risk evenly across all six slots.' },
    comparison: [
      { label: 'Versus Danny', note: 'Josh has the better single anchor and safer top two; Danny has more distributed honor-upside chaos.' },
      { label: 'League texture', note: 'If Hoshoryu wins 11+ and Wakatakakage clears kachi-koshi, Josh forces every other team to find bonus points just to keep pace.' },
    ],
    winConditions: ['Hoshoryu stays healthy and posts 10-12 wins.', 'Wakatakakage reaches kachi-koshi from Komusubi.', 'Gonoyama supplies at least seven wins or a kinboshi-style bonus swing.', 'Abi/Oshoma/Shishi combine for roughly 20 wins instead of becoming dead roster weight.'],
    lossConditions: ['Hoshoryu is merely average for a Yokozuna or exits the yusho race early.', 'Wakatakakage gets stuck below kachi-koshi.', 'Abi continues the dashboard 3-6 form and creates a large deficit.', 'The lower four all finish around 6-9 or worse, wasting the elite anchor.'],
    finalVerdict: ['Best top-two foundation in the league.', 'A real favorite if the back half can play to par.', 'The roster is less cute than Danny’s and probably safer.', 'Josh should be treated as a title contender, not just a playoff spoiler.'],
  },
]

const placeholderOwners = ['David', 'Liz', 'Dolo', 'Joe']
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

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
export interface PowerRankingRow {
  rank: number
  team: string
  grade: string
  projectedWins: string
  ceiling: string
  floor: string
  read: string
}
export const leaguePowerRanking: PowerRankingRow[] = [
  {
    rank: 1,
    team: "Josh",
    grade: "A- / 90",
    projectedWins: "45–49",
    ceiling: "53+",
    floor: "38–41",
    read: "Best active anchor; fragile mid-rounds."
  },
  {
    rank: 2,
    team: "Danny",
    grade: "B+ / 87",
    projectedWins: "45–48",
    ceiling: "52+",
    floor: "39–42",
    read: "Excellent honor build; too much joi exposure."
  },
  {
    rank: 3,
    team: "Joe",
    grade: "B+ / 86",
    projectedWins: "44–48",
    ceiling: "51+",
    floor: "38–40",
    read: "Strong Ozeki anchor plus risky M1/M2 upside."
  },
  {
    rank: 4,
    team: "Dolo",
    grade: "B / 84",
    projectedWins: "42–46",
    ceiling: "50+",
    floor: "38–40",
    read: "No anchor, but broad lower-rank win paths."
  },
  {
    rank: 5,
    team: "David",
    grade: "C+ / 76",
    projectedWins: "38–44",
    ceiling: "50+",
    floor: "31–35",
    read: "Kirishima saves it; Aonishiki absence hurts badly."
  },
  {
    rank: 6,
    team: "Liz",
    grade: "C / 72",
    projectedWins: "36–42",
    ceiling: "49+",
    floor: "30–34",
    read: "Onosato absence plus multiple health/volatility flags."
  }
]

export const leagueBluntRead = "Josh is the favorite, but not by enough to coast. Danny and Joe are live. Dolo is annoying and could grind into contention. David and Liz need their absent stars back quickly or they are playing from behind immediately."

export const categoryLeaders = [
  {
    category: "Pure wins",
    team: "Josh",
    why: "Hoshoryu gives the cleanest active 11–13 win path."
  },
  {
    category: "Honor upside",
    team: "Danny / Josh",
    why: "Danny has better maegashira honor paths; Josh has best yusho path."
  },
  {
    category: "Lowest risk",
    team: "Dolo",
    why: "No absent premium pick and spread-out schedule exposure."
  },
  {
    category: "Highest ceiling",
    team: "Josh",
    why: "Hoshoryu + Wakatakakage is the best active top two."
  },
  {
    category: "Most fragile",
    team: "Liz",
    why: "Onosato absent plus Hakunofuji/Nishikifuji/Takayasu risk stack."
  },
  {
    category: "Most damaged by kyujo",
    team: "David",
    why: "Aonishiki was R1 and is out Day 1."
  }
]

export const leagueCheatSheet = [
  "Favorite: Josh",
  "Best challenger: Danny",
  "Sneaky challenger: Joe",
  "Annoying grinder: Dolo",
  "Needs rescue news: David",
  "Most likely to get buried early: Liz"
]

export const finalLeagueRead = [
  "The league is not decided. But right now, the sober read is: Josh has the best roster, Danny has the best distributed honor upside, Joe has the cleanest active Ozeki path, and the Onosato/Aonishiki teams are already playing hurt."
]

export const reportSources = [
  { label: 'Official banzuke', url: 'https://www.sumo.or.jp/EnHonbashoBanzuke/index/' },
  { label: 'Official kyujo notices', url: 'https://www.sumo.or.jp/EnHonbashoMain/absence/' },
  { label: 'Rikishi profiles and records', url: 'https://www.sumo.or.jp/EnSumoDataRikishi/profile/' },
]

export const teamAnalyses: TeamAnalysis[] = [
  {
      owner: "Danny",
      slug: "danny",
      title: "Fantasy Sumo Draft Report — Team Danny",
      overallGrade: "B+ / 87",
      summary: [
          "This is a good draft, not a dominant draft.",
          "This is a high-upside honor-friendly roster. The core bet is that the young upper-rank names convert promise into 8–10 win tournaments. The main risk is obvious: too much exposure to the joi/top-rank meat grinder.",
          "This grade is pre-Day 1, based on the roster at 0–0.",
          "Big contextual note: Onosato and Aonishiki are officially absent from Day 1, and none of Danny's six are listed. That helps Danny because other teams drafted absent premium assets."
      ],
      sources: reportSources,
      roster: [
          {
              pick: "R1",
              rikishi: "Atamifuji",
              rank: "Sekiwake 1 East",
              grade: "B+",
              expectedWins: "8.2",
              notes: "Strong but possibly overdrafted at 1.01"
          },
          {
              pick: "R2",
              rikishi: "Kotoshoho",
              rank: "Sekiwake 1 West",
              grade: "A-",
              expectedWins: "8.0",
              notes: "Best value; recent yusho/11-win upside"
          },
          {
              pick: "R3",
              rikishi: "Fujinokawa",
              rank: "Maegashira 1 East",
              grade: "B+",
              expectedWins: "7.4",
              notes: "Big sansho/kinboshi upside; brutal schedule"
          },
          {
              pick: "R4",
              rikishi: "Yoshinofuji",
              rank: "Maegashira 2 East",
              grade: "B+",
              expectedWins: "7.6",
              notes: "Dangerous honor asset, not safe"
          },
          {
              pick: "R5",
              rikishi: "Shodai",
              rank: "Maegashira 5 West",
              grade: "B-",
              expectedWins: "7.1",
              notes: "Volatile veteran"
          },
          {
              pick: "R6",
              rikishi: "Kinbozan",
              rank: "Maegashira 11 West",
              grade: "B+",
              expectedWins: "7.5",
              notes: "Good late schedule-value pick"
          }
      ],
      projectedWins: "45–48",
      ceiling: "52+",
      floor: "39–42",
      strategicSummary: {
          strengths: [
              "Avoided the Day 1 kyujo bombs.",
              "Drafted real honor upside instead of bland 7-win filler.",
              "Got a usable lower-maegashira win-volume asset in Kinbozan."
          ],
          vulnerabilities: [
              "Atamifuji, Kotoshoho, Fujinokawa, and Yoshinofuji are all in hard schedule lanes.",
              "There is no Yokozuna/Ozeki anchor.",
              "Shodai can still give you a 4–11 type tournament if the wheels come off."
          ],
          tone: "This roster is aggressive and honor-driven. That can win the league. It can also implode if the upper-rank cluster all land around 6–7 wins."
      },
      picks: [
          {
              pick: "1",
              name: "Atamifuji",
              rank: "Sekiwake 1 East",
              grade: "B+",
              expectedWins: "8–9",
              notes: "Strong promotion profile, recent upper-rank success, but not yet a proven long-term san'yaku lock.",
              recentForm: [
                  "Strong promotion profile, recent upper-rank success, but not yet a proven long-term san'yaku lock."
              ],
              strengths: [
                  "Ascending trajectory",
                  "kachi-koshi path",
                  "9–10 win upside."
              ],
              weaknesses: [
                  "Hard schedule",
                  "no kinboshi eligibility",
                  "possibly overdrafted if taken first overall."
              ],
              projection: [
                  "Expected wins 8–9; ceiling 11+; floor 6.",
                  "Honor outlook: Kachi-koshi high; yusho low-medium; sansho low-medium; kinboshi none; kimarite bonus medium."
              ],
              verdict: "Good pick. The reach risk is draft value, not wrestler quality."
          },
          {
              pick: "2",
              name: "Kotoshoho",
              rank: "Sekiwake 1 West",
              grade: "A-",
              expectedWins: "8",
              notes: "Recent 11–4 and prior Makuuchi yusho make the ceiling real.",
              recentForm: [
                  "Recent 11–4 and prior Makuuchi yusho make the ceiling real."
              ],
              strengths: [
                  "True spike potential",
                  "yusho/jun-yusho lottery ticket",
                  "strong honor scoring profile."
              ],
              weaknesses: [
                  "Historically volatile",
                  "promotion pressure",
                  "not injury-proof."
              ],
              projection: [
                  "Expected wins 8; ceiling 12+; floor 5.",
                  "Honor outlook: Kachi-koshi medium-high; yusho medium-low; jun-yusho medium; sansho medium; kinboshi none; kimarite medium."
              ],
              verdict: "Best Danny pick. If he goes 10–5, this roster becomes dangerous."
          },
          {
              pick: "3",
              name: "Fujinokawa",
              rank: "Maegashira 1 East",
              grade: "B+",
              expectedWins: "7–8",
              notes: "Young top-division riser with recent winning records, prizes, and kinboshi history.",
              recentForm: [
                  "Young top-division riser with recent winning records, prizes, and kinboshi history."
              ],
              strengths: [
                  "Kinboshi access",
                  "sansho path",
                  "strong kimarite diversity."
              ],
              weaknesses: [
                  "M1 is a blender",
                  "early schedule can bury him."
              ],
              projection: [
                  "Expected wins 7–8; ceiling 10+; floor 5.",
                  "Honor outlook: Kachi-koshi medium; yusho low; jun-yusho low-medium; sansho high; kinboshi high; kimarite high."
              ],
              verdict: "High-variance honor pick. Correct type of gamble in Round 3."
          },
          {
              pick: "4",
              name: "Yoshinofuji",
              rank: "Maegashira 2 East",
              grade: "B+",
              expectedWins: "7–8",
              notes: "Prize-winning profile with multiple kinboshi already.",
              recentForm: [
                  "Prize-winning profile with multiple kinboshi already."
              ],
              strengths: [
                  "Excellent honor track upside",
                  "can beat elite opponents",
                  "technical profile."
              ],
              weaknesses: [
                  "Another brutal schedule",
                  "correlated downside with Fujinokawa."
              ],
              projection: [
                  "Expected wins 7–8; ceiling 10+; floor 5.",
                  "Honor outlook: Kachi-koshi medium; yusho low; jun-yusho low; sansho high; kinboshi high; kimarite medium-high."
              ],
              verdict: "Good pick, but stacking him with Fujinokawa means Danny chose volatility."
          },
          {
              pick: "5",
              name: "Shodai",
              rank: "Maegashira 5 West",
              grade: "B-",
              expectedWins: "7",
              notes: "Former Ozeki with wild record swings; capable of 9–10 wins or a full collapse.",
              recentForm: [
                  "Former Ozeki with wild record swings; capable of 9–10 wins or a full collapse."
              ],
              strengths: [
                  "Veteran adaptability",
                  "kimarite variety",
                  "rank gives some relief."
              ],
              weaknesses: [
                  "Inconsistent",
                  "not a dependable floor play."
              ],
              projection: [
                  "Expected wins 7; ceiling 10; floor 4.",
                  "Honor outlook: Kachi-koshi medium; yusho very low; sansho low; kinboshi low; kimarite medium-high."
              ],
              verdict: "Acceptable, not inspiring. Danny needs him not to crater."
          },
          {
              pick: "6",
              name: "Kinbozan",
              rank: "Maegashira 11 West",
              grade: "B+",
              expectedWins: "7–8",
              notes: "Volatile but at a soft enough rank to matter.",
              recentForm: [
                  "Volatile but at a soft enough rank to matter."
              ],
              strengths: [
                  "Lower-rank schedule",
                  "8–10 win path",
                  "useful late-round value."
              ],
              weaknesses: [
                  "Below-.500 top-division profile",
                  "streaky."
              ],
              projection: [
                  "Expected wins 7–8; ceiling 10; floor 5.",
                  "Honor outlook: Kachi-koshi medium-high; yusho low; sansho low-medium; kinboshi very low; kimarite medium."
              ],
              verdict: "Strong R6 pick. The rank context is the value."
          }
      ],
      model: [
          {
              rikishi: "Atamifuji",
              expectedWins: 8.2,
              honorEv: 2.0,
              riskPenalty: 0.8,
              combined: 9.3
          },
          {
              rikishi: "Kotoshoho",
              expectedWins: 8.0,
              honorEv: 2.2,
              riskPenalty: 0.9,
              combined: 9.3
          },
          {
              rikishi: "Fujinokawa",
              expectedWins: 7.4,
              honorEv: 2.6,
              riskPenalty: 1.0,
              combined: 8.8
          },
          {
              rikishi: "Yoshinofuji",
              expectedWins: 7.6,
              honorEv: 2.5,
              riskPenalty: 1.0,
              combined: 9.0
          },
          {
              rikishi: "Shodai",
              expectedWins: 7.1,
              honorEv: 1.2,
              riskPenalty: 0.7,
              combined: 6.8
          },
          {
              rikishi: "Kinbozan",
              expectedWins: 7.5,
              honorEv: 1.3,
              riskPenalty: 0.8,
              combined: 7.4
          }
      ],
      trackGrades: [
          {
              label: "Wins Track",
              grade: "B / B+",
              "note": "Enough win volume to contend, but no obvious 11–13 win anchor."
          },
          {
              label: "Honor Track",
              grade: "A-",
              "note": "Fujinokawa and Yoshinofuji give real kinboshi/sansho paths. Kotoshoho and Atamifuji add upper-rank honor upside."
          },
          {
              label: "Risk Profile",
              grade: "B-",
              "note": "Too much upper-rank correlated risk."
          }
      ],
      archetype: {
          label: "High-upside honor chaser with joi overexposure",
          why: "High-upside honor chaser with joi overexposure"
      },
      winConditions: [
          "Atamifuji and Kotoshoho both clear 8 wins.",
          "One of Fujinokawa/Yoshinofuji adds kinboshi or sansho.",
          "Kinbozan reaches kachi-koshi.",
          "Shodai avoids a collapse."
      ],
      lossConditions: [
          "The Sekiwake pair stalls around 7–8 combined value rather than true anchor value.",
          "Fujinokawa and Yoshinofuji both get crushed by the top schedule.",
          "Shodai goes 5–10 or worse.",
          "No one reaches double digits."
      ],
      finalVerdict: [
          "Danny is a contender, not the favorite.",
          "The mistake would be believing this roster is safe.",
          "It is not."
      ]
  },
  {
      owner: "David",
      slug: "david",
      title: "Fantasy Sumo Draft Report — Team David",
      overallGrade: "C+ / 76",
      summary: [
          "This draft has one great active anchor and one first-round disaster.",
          "This is an injury-risk lottery roster. The core bet is that Kirishima dominates while Aonishiki returns quickly enough to salvage the first-round investment. The main risk is that Aonishiki misses too much time and David starts the tournament in a hole he cannot climb out of.",
          "This grade is pre-Day 1, based on the roster at 0–0.",
          "Big contextual note: Aonishiki is officially absent from Day 1. That hurts badly. Kirishima helps, but he cannot fully erase a dead or partial R1."
      ],
      sources: reportSources,
      roster: [
          {
              pick: "R1",
              rikishi: "Aonishiki",
              rank: "Ozeki 1 West",
              grade: "D / Incomplete",
              expectedWins: "4.0",
              notes: "Elite if active; Day 1 kyujo wrecks value"
          },
          {
              pick: "R2",
              rikishi: "Kirishima",
              rank: "Ozeki 2 East",
              grade: "A",
              expectedWins: "10.0",
              notes: "Best pick; true yusho threat"
          },
          {
              pick: "R3",
              rikishi: "Asanoyama",
              rank: "Maegashira 10 East",
              grade: "B",
              expectedWins: "7.4",
              notes: "Former elite, huge injury-history tax"
          },
          {
              pick: "R4",
              rikishi: "Churanoumi",
              rank: "Maegashira 6 East",
              grade: "B-",
              expectedWins: "7.0",
              notes: "Fine middle pick, not special"
          },
          {
              pick: "R5",
              rikishi: "Wakamotoharu",
              rank: "Maegashira 5 East",
              grade: "B",
              expectedWins: "7.6",
              notes: "Bounce-back value after san'yaku beating"
          },
          {
              pick: "R6",
              rikishi: "Oshoumi",
              rank: "Maegashira 15 West",
              grade: "B",
              expectedWins: "7.3",
              notes: "Useful low-rank win lane"
          }
      ],
      projectedWins: "38–44",
      ceiling: "50+ if Aonishiki returns quickly",
      floor: "31–35",
      strategicSummary: {
          strengths: [
              "Got Kirishima, probably one of the top two active yusho candidates.",
              "Took useful rank-relief pieces in Wakamotoharu and Oshoumi.",
              "Added Asanoyama, whose upside is better than a normal M10."
          ],
          vulnerabilities: [
              "Aonishiki's Day 1 absence is brutal.",
              "Asanoyama carries major injury/absence history.",
              "Churanoumi is fine but not good enough to offset a dead first-rounder."
          ],
          tone: "This roster is top-heavy and compromised. It can win only if the injury news breaks right. It can also be functionally dead early."
      },
      picks: [
          {
              pick: "1",
              name: "Aonishiki",
              rank: "Ozeki 1 West",
              grade: "D / Incomplete",
              expectedWins: "0–9 depending on return",
              notes: "Elite young Ozeki with two top-division titles and a strong career record, but officially absent Day 1.",
              recentForm: [
                  "Elite young Ozeki with two top-division titles and a strong career record, but officially absent Day 1."
              ],
              strengths: [
                  "Massive ceiling",
                  "yusho and jun-yusho candidate when healthy",
                  "diverse kimarite profile."
              ],
              weaknesses: [
                  "Current absence",
                  "no kinboshi eligibility",
                  "unknown return timing."
              ],
              projection: [
                  "Expected wins 0–9 depending on return; modeled at 4.0.",
                  "Honor outlook: Kachi-koshi low until he returns; yusho low because absence kills margin; sansho none; kinboshi none; kimarite high if active."
              ],
              verdict: "If no substitutions exist, this is a draft-breaking risk. Reputation does not score points from the couch."
          },
          {
              pick: "2",
              name: "Kirishima",
              rank: "Ozeki 2 East",
              grade: "A",
              expectedWins: "9–11",
              notes: "March yusho at Sekiwake and recent 11-win form make him one of the cleanest active anchors.",
              recentForm: [
                  "March yusho at Sekiwake and recent 11-win form make him one of the cleanest active anchors."
              ],
              strengths: [
                  "Yusho threat",
                  "elite recent form",
                  "technique diversity."
              ],
              weaknesses: [
                  "Recent return-to-Ozeki pressure",
                  "historical neck/injury concerns not irrelevant."
              ],
              projection: [
                  "Expected wins 9–11; ceiling 13+; floor 7.",
                  "Honor outlook: Kachi-koshi very high; yusho high; jun-yusho high; sansho none; kinboshi none; kimarite high."
              ],
              verdict: "Excellent R2. This pick keeps David alive."
          },
          {
              pick: "3",
              name: "Asanoyama",
              rank: "Maegashira 10 East",
              grade: "B",
              expectedWins: "7–8",
              notes: "Former Ozeki-level talent fighting lower than peak ability; official profile history shows heavy absence totals.",
              recentForm: [
                  "Former Ozeki-level talent fighting lower than peak ability; official profile history shows heavy absence totals."
              ],
              strengths: [
                  "Skill level above rank when healthy",
                  "softer schedule",
                  "9–10 win path."
              ],
              weaknesses: [
                  "Massive injury/absence history",
                  "no longer reliable."
              ],
              projection: [
                  "Expected wins 7–8; ceiling 10+; floor 3–5 if hurt.",
                  "Honor outlook: Kachi-koshi medium; yusho low; sansho low-medium; kinboshi very low; kimarite medium."
              ],
              verdict: "Good upside pick, but calling him safe would be delusional."
          },
          {
              pick: "4",
              name: "Churanoumi",
              rank: "Maegashira 6 East",
              grade: "B-",
              expectedWins: "6–8",
              notes: "Recent 4–11 at M2 followed by rank relief; career Makuuchi profile around .500.",
              recentForm: [
                  "Recent 4–11 at M2 followed by rank relief; career Makuuchi profile around .500."
              ],
              strengths: [
                  "Better schedule than last basho",
                  "enough experience",
                  "kachi-koshi path."
              ],
              weaknesses: [
                  "Limited ceiling",
                  "not much honor punch",
                  "recent upper-rank failure."
              ],
              projection: [
                  "Expected wins 6–8; ceiling 9; floor 5.",
                  "Honor outlook: Kachi-koshi medium; yusho very low; sansho low; kinboshi low; kimarite low-medium."
              ],
              verdict: "Fine filler. It does not fix the Aonishiki problem."
          },
          {
              pick: "5",
              name: "Wakamotoharu",
              rank: "Maegashira 5 East",
              grade: "B",
              expectedWins: "7–8",
              notes: "Coming off a harsh 3–12 at Komusubi but now gets rank relief.",
              recentForm: [
                  "Coming off a harsh 3–12 at Komusubi but now gets rank relief."
              ],
              strengths: [
                  "Proven upper-rank experience",
                  "bounce-back candidate",
                  "yotsu skill."
              ],
              weaknesses: [
                  "Recent form is ugly",
                  "age/injury concerns",
                  "M5 is not exactly easy."
              ],
              projection: [
                  "Expected wins 7–8; ceiling 10; floor 5.",
                  "Honor outlook: Kachi-koshi medium-high; yusho low; sansho low-medium; kinboshi low; kimarite medium."
              ],
              verdict: "Smart R5 value. If he rebounds, David has a shot."
          },
          {
              pick: "6",
              name: "Oshoumi",
              rank: "Maegashira 15 West",
              grade: "B",
              expectedWins: "7",
              notes: "Young lower-maegashira with limited top-division résumé.",
              recentForm: [
                  "Young lower-maegashira with limited top-division résumé."
              ],
              strengths: [
                  "Soft schedule",
                  "survival motivation",
                  "can quietly hit 8."
              ],
              weaknesses: [
                  "Not proven",
                  "limited honor ceiling."
              ],
              projection: [
                  "Expected wins 7; ceiling 9; floor 5.",
                  "Honor outlook: Kachi-koshi medium; yusho very low; sansho low; kinboshi none; kimarite medium."
              ],
              verdict: "Sensible late pick."
          }
      ],
      model: [
          {
              rikishi: "Aonishiki",
              expectedWins: 4.0,
              honorEv: 1.0,
              riskPenalty: 4.0,
              combined: 0.6
          },
          {
              rikishi: "Kirishima",
              expectedWins: 10.0,
              honorEv: 5.5,
              riskPenalty: 0.8,
              combined: 12.9
          },
          {
              rikishi: "Asanoyama",
              expectedWins: 7.4,
              honorEv: 1.4,
              riskPenalty: 1.4,
              combined: 6.8
          },
          {
              rikishi: "Churanoumi",
              expectedWins: 7.0,
              honorEv: 1.0,
              riskPenalty: 0.7,
              combined: 6.9
          },
          {
              rikishi: "Wakamotoharu",
              expectedWins: 7.6,
              honorEv: 1.6,
              riskPenalty: 0.9,
              combined: 7.5
          },
          {
              rikishi: "Oshoumi",
              expectedWins: 7.3,
              honorEv: 1.0,
              riskPenalty: 0.8,
              combined: 7.1
          }
      ],
      trackGrades: [
          {
              label: "Wins Track",
              grade: "C+",
              "note": "Kirishima is elite, but Aonishiki's absence crushes the math."
          },
          {
              label: "Honor Track",
              grade: "B-",
              "note": "Kirishima can carry yusho/jun-yusho EV. Aonishiki would have been a monster if active."
          },
          {
              label: "Risk Profile",
              grade: "D+",
              "note": "Two glaring risks: Aonishiki absent and Asanoyama fragile."
          }
      ],
      archetype: {
          label: "Injury-risk lottery ticket with one elite active anchor",
          why: "Injury-risk lottery ticket with one elite active anchor"
      },
      winConditions: [
          "Aonishiki returns within the first few days.",
          "Kirishima stays in the yusho race.",
          "Asanoyama and Wakamotoharu both hit kachi-koshi.",
          "Oshoumi gets 8 from the bottom of the division."
      ],
      lossConditions: [
          "Aonishiki misses a meaningful chunk of the tournament.",
          "Kirishima posts merely 9–10 instead of 12+.",
          "Asanoyama breaks down or underperforms.",
          "Churanoumi/Oshoumi are merely average."
      ],
      finalVerdict: [
          "David is a longshot unless Aonishiki returns fast.",
          "The mistake would be pretending an absent Ozeki is still a normal first-round pick."
      ]
  },
  {
      owner: "Liz",
      slug: "liz",
      title: "Fantasy Sumo Draft Report — Team Liz",
      overallGrade: "C / 72",
      summary: [
          "This is a fragile roster built around an absent Yokozuna and several health/volatility flags.",
          "This is an honor-upside roster on paper, but the paper caught fire when Onosato was listed absent from Day 1. The core bet is that Onosato returns fast and Takayasu/Hiradoumi can grind enough wins to keep the team afloat. The main risk is that Onosato and Hakunofuji health concerns turn the roster into a partial lineup.",
          "This grade is pre-Day 1, based on the roster at 0–0.",
          "Big contextual note: Onosato is officially absent from Day 1. That is a massive downgrade. Liz did not spend R1 on him, but a second-round absent Yokozuna is still a major problem."
      ],
      sources: reportSources,
      roster: [
          {
              pick: "R1",
              rikishi: "Asakoryu",
              rank: "Maegashira 7 West",
              grade: "B-",
              expectedWins: "7.1",
              notes: "Balanced but not a true R1-level anchor"
          },
          {
              pick: "R2",
              rikishi: "Onosato",
              rank: "Yokozuna 1 West",
              grade: "D / Incomplete",
              expectedWins: "4.5",
              notes: "Elite if active; Day 1 kyujo"
          },
          {
              pick: "R3",
              rikishi: "Takayasu",
              rank: "Komusubi 1 West",
              grade: "B",
              expectedWins: "7.4",
              notes: "High résumé, age/health tax, hard schedule"
          },
          {
              pick: "R4",
              rikishi: "Hakunofuji",
              rank: "Maegashira 10 West",
              grade: "C+",
              expectedWins: "6.8",
              notes: "Talent, but recent 5–6–4 absence flag"
          },
          {
              pick: "R5",
              rikishi: "Hiradoumi",
              rank: "Maegashira 3 East",
              grade: "B-",
              expectedWins: "7.0",
              notes: "Tough rank, steady fighter"
          },
          {
              pick: "R6",
              rikishi: "Nishikifuji",
              rank: "Maegashira 9 West",
              grade: "B-",
              expectedWins: "7.0",
              notes: "Useful R6, but recent partial absence"
          }
      ],
      projectedWins: "36–42",
      ceiling: "49+ if Onosato returns quickly",
      floor: "30–34",
      strategicSummary: {
          strengths: [
              "Drafted multiple wrestlers with real top-division experience.",
              "Got Takayasu, who still has honor/scoring upside even at advanced age.",
              "Took Nishikifuji late enough that 8 wins would be useful value."
          ],
          vulnerabilities: [
              "Onosato is absent Day 1.",
              "Hakunofuji has recent kyujo history.",
              "Asakoryu as R1 is not strong enough to cover an absent R2."
          ],
          tone: "This roster is fragile and over-dependent on health news. It can still spike if Onosato returns quickly. It can also be buried before the middle weekend."
      },
      picks: [
          {
              pick: "1",
              name: "Asakoryu",
              rank: "Maegashira 7 West",
              grade: "B-",
              expectedWins: "7",
              notes: "Official profile shows a .500 Makuuchi record and a mixed oshi/yotsu profile.",
              recentForm: [
                  "Official profile shows a .500 Makuuchi record and a mixed oshi/yotsu profile."
              ],
              strengths: [
                  "Mid-rank schedule",
                  "diverse enough style",
                  "kachi-koshi possible."
              ],
              weaknesses: [
                  "Not a first-round anchor",
                  "no big honor résumé",
                  "limited ceiling."
              ],
              projection: [
                  "Expected wins 7; ceiling 9; floor 5.",
                  "Honor outlook: Kachi-koshi medium; yusho very low; sansho low; kinboshi low; kimarite medium."
              ],
              verdict: "Fine wrestler, poor R1 value. This pick needed to be stronger."
          },
          {
              pick: "2",
              name: "Onosato",
              rank: "Yokozuna 1 West",
              grade: "D / Incomplete",
              expectedWins: "0–10 depending on return",
              notes: "Elite Yokozuna with five top-division championships on official profile, but officially absent Day 1.",
              recentForm: [
                  "Elite Yokozuna with five top-division championships on official profile, but officially absent Day 1."
              ],
              strengths: [
                  "If active, huge yusho and win-volume upside."
              ],
              weaknesses: [
                  "Current absence",
                  "no sansho or kinboshi",
                  "Yokozuna injury risk punishes fantasy hard."
              ],
              projection: [
                  "Expected wins 0–10 depending on return; modeled at 4.5.",
                  "Honor outlook: Kachi-koshi low until active; yusho low after starting absent; jun-yusho medium-low if fast return; kimarite medium."
              ],
              verdict: "The name is elite. The fantasy pick is currently broken."
          },
          {
              pick: "3",
              name: "Takayasu",
              rank: "Komusubi 1 West",
              grade: "B",
              expectedWins: "7–8",
              notes: "Huge career résumé, multiple special prizes and kinboshi, but aging and at a hard rank.",
              recentForm: [
                  "Huge career résumé, multiple special prizes and kinboshi, but aging and at a hard rank."
              ],
              strengths: [
                  "Veteran power",
                  "honor history",
                  "can still beat top opponents."
              ],
              weaknesses: [
                  "Injury/age tax",
                  "Komusubi schedule",
                  "no kinboshi eligibility at san'yaku."
              ],
              projection: [
                  "Expected wins 7–8; ceiling 10; floor 4–5.",
                  "Honor outlook: Kachi-koshi medium; yusho low; sansho low-medium; kinboshi none; kimarite medium."
              ],
              verdict: "Good R3 value but not safe enough to rescue Onosato by himself."
          },
          {
              pick: "4",
              name: "Hakunofuji",
              rank: "Maegashira 10 West",
              grade: "C+",
              expectedWins: "6–7",
              notes: "Talented former Hakuoho profile with major promise and major absence history.",
              recentForm: [
                  "Talented former Hakuoho profile with major promise and major absence history."
              ],
              strengths: [
                  "Soft-ish rank",
                  "past prizes/kinboshi",
                  "strong ability if healthy."
              ],
              weaknesses: [
                  "Recent 5–6–4 profile screams risk",
                  "not stable."
              ],
              projection: [
                  "Expected wins 6–7; ceiling 10; floor 0–4 if health fails.",
                  "Honor outlook: Kachi-koshi medium-low; yusho low; sansho low-medium; kinboshi low; kimarite medium."
              ],
              verdict: "Upside pick. On this roster, another health risk was not what Liz needed."
          },
          {
              pick: "5",
              name: "Hiradoumi",
              rank: "Maegashira 3 East",
              grade: "B-",
              expectedWins: "6–8",
              notes: "Solid top-division grinder, but M3 means he sees real heat.",
              recentForm: [
                  "Solid top-division grinder, but M3 means he sees real heat."
              ],
              strengths: [
                  "Competitive against upper ranks",
                  "technique prize history",
                  "fighting style travels."
              ],
              weaknesses: [
                  "Hard schedule",
                  "limited yusho upside",
                  ".500-ish Makuuchi profile."
              ],
              projection: [
                  "Expected wins 6–8; ceiling 9–10; floor 4–5.",
                  "Honor outlook: Kachi-koshi medium; yusho low; sansho medium-low; kinboshi medium; kimarite medium."
              ],
              verdict: "Decent R5. The rank makes it riskier than it looks."
          },
          {
              pick: "6",
              name: "Nishikifuji",
              rank: "Maegashira 9 West",
              grade: "B-",
              expectedWins: "6–8",
              notes: "Coming off useful lower-rank performance but recent 6–6–3 absence history.",
              recentForm: [
                  "Coming off useful lower-rank performance but recent 6–6–3 absence history."
              ],
              strengths: [
                  "Manageable schedule",
                  "can get 8",
                  "decent late value."
              ],
              weaknesses: [
                  "Below-.500 Makuuchi record",
                  "health flag",
                  "limited honor ceiling."
              ],
              projection: [
                  "Expected wins 6–8; ceiling 9; floor 4–5.",
                  "Honor outlook: Kachi-koshi medium; yusho very low; sansho low; kinboshi low; kimarite low-medium."
              ],
              verdict: "Fine R6, but this roster needed a safer pick."
          }
      ],
      model: [
          {
              rikishi: "Asakoryu",
              expectedWins: 7.1,
              honorEv: 1.1,
              riskPenalty: 0.7,
              combined: 6.7
          },
          {
              rikishi: "Onosato",
              expectedWins: 4.5,
              honorEv: 1.4,
              riskPenalty: 4.2,
              combined: 1.1
          },
          {
              rikishi: "Takayasu",
              expectedWins: 7.4,
              honorEv: 1.7,
              riskPenalty: 1.1,
              combined: 7.2
          },
          {
              rikishi: "Hakunofuji",
              expectedWins: 6.8,
              honorEv: 1.3,
              riskPenalty: 1.7,
              combined: 5.5
          },
          {
              rikishi: "Hiradoumi",
              expectedWins: 7.0,
              honorEv: 1.5,
              riskPenalty: 1.0,
              combined: 6.8
          },
          {
              rikishi: "Nishikifuji",
              expectedWins: 7.0,
              honorEv: 1.0,
              riskPenalty: 1.0,
              combined: 6.6
          }
      ],
      trackGrades: [
          {
              label: "Wins Track",
              grade: "C",
              "note": "Too much depends on Onosato returning and everyone else avoiding merely average results."
          },
          {
              label: "Honor Track",
              grade: "B-",
              "note": "Onosato's name carries huge honor potential, but the Day 1 absence cuts the EV sharply. Takayasu/Hiradoumi can help, but not enough."
          },
          {
              label: "Risk Profile",
              grade: "D+",
              "note": "Onosato absent, Hakunofuji fragile, Nishikifuji health flag, Takayasu age/rank risk. This is not clean."
          }
      ],
      archetype: {
          label: "Health-dependent upside roster",
          why: "Health-dependent upside roster"
      },
      winConditions: [
          "Onosato returns almost immediately.",
          "Takayasu goes 8–9 at Komusubi.",
          "Hakunofuji stays healthy and hits 8+.",
          "Hiradoumi or Nishikifuji steals honor points."
      ],
      lossConditions: [
          "Onosato misses multiple days.",
          "Hakunofuji has another partial tournament.",
          "Asakoryu tops out around 7.",
          "The M3/Komusubi schedule drags Takayasu and Hiradoumi under .500."
      ],
      finalVerdict: [
          "Liz needs rescue news.",
          "The mistake would be treating Onosato's name as if it still carries full value while he is absent."
      ]
  },
  {
      owner: "Josh",
      slug: "josh",
      title: "Fantasy Sumo Draft Report — Team Josh",
      overallGrade: "A- / 90",
      summary: [
          "This is the strongest roster on paper, but not a free win.",
          "This is a top-heavy contender. The core bet is Hoshoryu delivering a Yokozuna-level 11–13 win tournament while Wakatakakage and the middle rounds hold serve. The main risk is the bottom half: Abi, Oshoma, and Shishi are not reliable enough to carry the roster if Hoshoryu is merely good.",
          "This grade is pre-Day 1, based on the roster at 0–0.",
          "Big contextual note: Onosato and Aonishiki are absent, which makes Hoshoryu's yusho path cleaner."
      ],
      sources: reportSources,
      roster: [
          {
              pick: "R1",
              rikishi: "Hoshoryu",
              rank: "Yokozuna 1 East",
              grade: "A",
              expectedWins: "10.8",
              notes: "Best active anchor"
          },
          {
              pick: "R2",
              rikishi: "Wakatakakage",
              rank: "Komusubi 1 East",
              grade: "B+",
              expectedWins: "8.0",
              notes: "Strong upside, recent absence tax"
          },
          {
              pick: "R3",
              rikishi: "Gonoyama",
              rank: "Maegashira 4 West",
              grade: "B",
              expectedWins: "7.3",
              notes: "Recent 10–5, but volatile"
          },
          {
              pick: "R4",
              rikishi: "Abi",
              rank: "Maegashira 9 East",
              grade: "B-",
              expectedWins: "7.2",
              notes: "Boom/bust, recent kyujo concern"
          },
          {
              pick: "R5",
              rikishi: "Oshoma",
              rank: "Maegashira 8 East",
              grade: "C+",
              expectedWins: "6.8",
              notes: "Weakest pick"
          },
          {
              pick: "R6",
              rikishi: "Shishi",
              rank: "Maegashira 12 East",
              grade: "B-",
              expectedWins: "7.0",
              notes: "Reasonable late-round floor"
          }
      ],
      projectedWins: "45–49",
      ceiling: "53+",
      floor: "38–41",
      strategicSummary: {
          strengths: [
              "Landed Hoshoryu, the best active single asset.",
              "Added Wakatakakage, a real second weapon.",
              "Avoided the Day 1 absent premium names."
          ],
          vulnerabilities: [
              "Bottom half is not elite.",
              "Wakatakakage and Abi have recent absence signals.",
              "Gonoyama can collapse when pushed high."
          ],
          tone: "This roster is top-heavy but dangerous. That can win the league. It can also become ordinary if Hoshoryu posts only 10 wins."
      },
      picks: [
          {
              pick: "1",
              name: "Hoshoryu",
              rank: "Yokozuna 1 East",
              grade: "A",
              expectedWins: "10–11",
              notes: "Elite active anchor with multiple recent double-digit Yokozuna records.",
              recentForm: [
                  "Elite active anchor with multiple recent double-digit Yokozuna records."
              ],
              strengths: [
                  "Best yusho path",
                  "high win ceiling",
                  "strong kimarite variety."
              ],
              weaknesses: [
                  "No sansho or kinboshi",
                  "Yokozuna injury risk still exists."
              ],
              projection: [
                  "Expected wins 10–11; ceiling 14+; floor 7–8 if compromised.",
                  "Honor outlook: Kachi-koshi very high; yusho high; jun-yusho high; sansho none; kinboshi none; kimarite high."
              ],
              verdict: "Correct R1 pick. He is why Josh is favored."
          },
          {
              pick: "2",
              name: "Wakatakakage",
              rank: "Komusubi 1 East",
              grade: "B+",
              expectedWins: "7–9",
              notes: "Proven san'yaku talent with recent 8–6–1 and 9–6 at upper maegashira.",
              recentForm: [
                  "Proven san'yaku talent with recent 8–6–1 and 9–6 at upper maegashira."
              ],
              strengths: [
                  "Technique Prize upside",
                  "high skill",
                  "can beat top opponents."
              ],
              weaknesses: [
                  "Komusubi schedule",
                  "recent fusen/absence",
                  "career absence history."
              ],
              projection: [
                  "Expected wins 7–9; ceiling 11+; floor 5–6.",
                  "Honor outlook: Kachi-koshi medium-high; yusho low; sansho medium-high; kinboshi none; kimarite medium."
              ],
              verdict: "Good R2, not safe."
          },
          {
              pick: "3",
              name: "Gonoyama",
              rank: "Maegashira 4 West",
              grade: "B",
              expectedWins: "7",
              notes: "Recent 10–5 at M10, but also a catastrophic 1–14 at M3.",
              recentForm: [
                  "Recent 10–5 at M10, but also a catastrophic 1–14 at M3."
              ],
              strengths: [
                  "Strong recent momentum",
                  "oshi power",
                  "possible upper-rank honor exposure."
              ],
              weaknesses: [
                  "Volatility",
                  "limited kimarite diversity",
                  "high-rank collapse risk."
              ],
              projection: [
                  "Expected wins 7; ceiling 10; floor 4–5.",
                  "Honor outlook: Kachi-koshi medium; sansho medium-low; kinboshi medium-low; kimarite low."
              ],
              verdict: "Fine R3. Do not overtrust the last basho."
          },
          {
              pick: "4",
              name: "Abi",
              rank: "Maegashira 9 East",
              grade: "B-",
              expectedWins: "6–8",
              notes: "Major career upside but coming off a 4–6–5.",
              recentForm: [
                  "Major career upside but coming off a 4–6–5."
              ],
              strengths: [
                  "Explosive style",
                  "strong past honor résumé",
                  "M9 schedule relief."
              ],
              weaknesses: [
                  "Recent injury/kyujo signal",
                  "boom/bust."
              ],
              projection: [
                  "Expected wins 6–8; ceiling 10; floor 3–4.",
                  "Honor outlook: Kachi-koshi medium; sansho low-medium; kinboshi low unless hot; kimarite medium."
              ],
              verdict: "Fine gamble, not a safe pick."
          },
          {
              pick: "5",
              name: "Oshoma",
              rank: "Maegashira 8 East",
              grade: "C+",
              expectedWins: "6–7",
              notes: "Below-.500 Makuuchi record with recent 6–9/7–8/4–11 trend.",
              recentForm: [
                  "Below-.500 Makuuchi record with recent 6–9/7–8/4–11 trend."
              ],
              strengths: [
                  "M8 workable",
                  "can hit 8–9 on a good basho."
              ],
              weaknesses: [
                  "Poor trend",
                  "limited ceiling",
                  "not a strong R5."
              ],
              projection: [
                  "Expected wins 6–7; ceiling 9; floor 4–5.",
                  "Honor outlook: Kachi-koshi medium-low; sansho low; kimarite medium."
              ],
              verdict: "Weakest Josh pick."
          },
          {
              pick: "6",
              name: "Shishi",
              rank: "Maegashira 12 East",
              grade: "B-",
              expectedWins: "6–8",
              notes: "Lower maegashira with 9–6/10–5 ability but below-.500 Makuuchi record.",
              recentForm: [
                  "Lower maegashira with 9–6/10–5 ability but below-.500 Makuuchi record."
              ],
              strengths: [
                  "Usable low-rank schedule",
                  "good body/force profile."
              ],
              weaknesses: [
                  "Limited honor ceiling",
                  "not proven."
              ],
              projection: [
                  "Expected wins 6–8; ceiling 9–10; floor 4–5.",
                  "Honor outlook: Kachi-koshi medium; sansho low; kimarite low-medium."
              ],
              verdict: "Reasonable R6."
          }
      ],
      model: [
          {
              rikishi: "Hoshoryu",
              expectedWins: 10.8,
              honorEv: 6.2,
              riskPenalty: 0.8,
              combined: 13.4
          },
          {
              rikishi: "Wakatakakage",
              expectedWins: 8.0,
              honorEv: 2.4,
              riskPenalty: 1.0,
              combined: 8.3
          },
          {
              rikishi: "Gonoyama",
              expectedWins: 7.3,
              honorEv: 1.7,
              riskPenalty: 0.9,
              combined: 7.3
          },
          {
              rikishi: "Abi",
              expectedWins: 7.2,
              honorEv: 1.6,
              riskPenalty: 1.3,
              combined: 6.8
          },
          {
              rikishi: "Oshoma",
              expectedWins: 6.8,
              honorEv: 0.9,
              riskPenalty: 0.8,
              combined: 6.5
          },
          {
              rikishi: "Shishi",
              expectedWins: 7.0,
              honorEv: 1.0,
              riskPenalty: 0.7,
              combined: 6.9
          }
      ],
      trackGrades: [
          {
              label: "Wins Track",
              grade: "A-",
              "note": "Best active anchor plus enough supporting volume."
          },
          {
              label: "Honor Track",
              grade: "A-",
              "note": "Hoshoryu creates the strongest yusho/jun-yusho route. Wakatakakage adds technique/sansho upside."
          },
          {
              label: "Risk Profile",
              grade: "B",
              "note": "Stronger than most teams, but the back half is fragile."
          }
      ],
      archetype: {
          label: "Top-heavy contender with fragile mid-rounds",
          why: "Top-heavy contender with fragile mid-rounds"
      },
      winConditions: [
          "Hoshoryu goes 12–3 or better.",
          "Wakatakakage reaches kachi-koshi.",
          "Abi is healthy.",
          "One of Oshoma/Shishi reaches 8."
      ],
      lossConditions: [
          "Hoshoryu is merely good, not great.",
          "Wakatakakage's March absence signal repeats.",
          "Abi is compromised.",
          "Oshoma and Shishi both land at 5–7."
      ],
      finalVerdict: [
          "Josh is the favorite.",
          "The mistake would be thinking this team is safe just because Hoshoryu is elite."
      ]
  },
  {
      owner: "Dolo",
      slug: "dolo",
      title: "Fantasy Sumo Draft Report — Team Dolo",
      overallGrade: "B / 84",
      summary: [
          "This is the no-anchor grinder roster.",
          "This is a balanced lower/mid-maegashira build. The core bet is that Dolo wins through six active wrestlers with manageable schedules rather than one superstar. The main risk is simple: no single wrestler projects for 10+ wins, so the roster needs several 8–9s.",
          "This grade is pre-Day 1, based on the roster at 0–0.",
          "Big contextual note: Dolo avoided the Onosato/Aonishiki absence trap. That matters."
      ],
      sources: reportSources,
      roster: [
          {
              pick: "R1",
              rikishi: "Ura",
              rank: "Maegashira 11 East",
              grade: "B",
              expectedWins: "7.4",
              notes: "Great kimarite/honor flavor, age/consistency risk"
          },
          {
              pick: "R2",
              rikishi: "Kotoeiho",
              rank: "Maegashira 13 East",
              grade: "B",
              expectedWins: "7.4",
              notes: "Young, useful rank, limited top-division sample"
          },
          {
              pick: "R3",
              rikishi: "Daieisho",
              rank: "Maegashira 4 East",
              grade: "B",
              expectedWins: "7.2",
              notes: "Career honor upside, current mid-joi difficulty"
          },
          {
              pick: "R4",
              rikishi: "Oho",
              rank: "Maegashira 3 West",
              grade: "B-",
              expectedWins: "7.0",
              notes: "Talent, but recent upper-rank struggles"
          },
          {
              pick: "R5",
              rikishi: "Roga",
              rank: "Maegashira 14 West",
              grade: "B-",
              expectedWins: "7.2",
              notes: "Soft schedule, limited ceiling"
          },
          {
              pick: "R6",
              rikishi: "Fujiseiun",
              rank: "Maegashira 6 West",
              grade: "B+",
              expectedWins: "7.7",
              notes: "Sneaky upside, small Makuuchi sample"
          }
      ],
      projectedWins: "42–46",
      ceiling: "50+",
      floor: "38–40",
      strategicSummary: {
          strengths: [
              "Avoided absent stars and built a full active roster.",
              "Drafted multiple wrestlers with schedule relief: Ura, Kotoeiho, Roga.",
              "Took a smart upside shot on Fujiseiun."
          ],
          vulnerabilities: [
              "No elite anchor.",
              "Daieisho and Oho are in difficult upper-maegashira slots.",
              "Several picks have below-.500 or limited Makuuchi profiles."
          ],
          tone: "This roster is balanced but underpowered at the top. That can grind into contention. It can also lose because nobody goes nuclear."
      },
      picks: [
          {
              pick: "1",
              name: "Ura",
              rank: "Maegashira 11 East",
              grade: "B",
              expectedWins: "7–8",
              notes: "Dropped from tougher ranks after 5–10 and 4–11; has unique technique profile.",
              recentForm: [
                  "Dropped from tougher ranks after 5–10 and 4–11; has unique technique profile."
              ],
              strengths: [
                  "Kimarite upside",
                  "rank relief",
                  "fan-favorite chaos can score bonus techniques."
              ],
              weaknesses: [
                  "Age/injury history",
                  "recent losing records",
                  "limited yusho path."
              ],
              projection: [
                  "Expected wins 7–8; ceiling 10; floor 4–5.",
                  "Honor outlook: Kachi-koshi medium; yusho low; sansho low-medium; kinboshi very low; kimarite high."
              ],
              verdict: "Fun R1 but not a true R1 anchor. This is where Dolo's roster ceiling gets capped."
          },
          {
              pick: "2",
              name: "Kotoeiho",
              rank: "Maegashira 13 East",
              grade: "B",
              expectedWins: "7–8",
              notes: "Small Makuuchi sample, current top-division record around even.",
              recentForm: [
                  "Small Makuuchi sample, current top-division record around even."
              ],
              strengths: [
                  "Young",
                  "soft schedule",
                  "8–9 win path."
              ],
              weaknesses: [
                  "Limited proven top-division résumé",
                  "low honor ceiling."
              ],
              projection: [
                  "Expected wins 7–8; ceiling 9–10; floor 5.",
                  "Honor outlook: Kachi-koshi medium-high; yusho very low; sansho low; kimarite low-medium."
              ],
              verdict: "Better fantasy pick than name value suggests."
          },
          {
              pick: "3",
              name: "Daieisho",
              rank: "Maegashira 4 East",
              grade: "B",
              expectedWins: "7",
              notes: "Former champion with major kinboshi/sansho résumé; recent 7–8s at M4.",
              recentForm: [
                  "Former champion with major kinboshi/sansho résumé; recent 7–8s at M4."
              ],
              strengths: [
                  "Proven upper-rank wins",
                  "honor history",
                  "can beat elite opponents."
              ],
              weaknesses: [
                  "Recent middling form",
                  "style can become one-dimensional",
                  "M4 schedule is not soft."
              ],
              projection: [
                  "Expected wins 7; ceiling 10; floor 5.",
                  "Honor outlook: Kachi-koshi medium; sansho medium; kinboshi medium; kimarite medium."
              ],
              verdict: "Good R3. Not safe, but the upside is real."
          },
          {
              pick: "4",
              name: "Oho",
              rank: "Maegashira 3 West",
              grade: "B-",
              expectedWins: "6–8",
              notes: "Recent 7–8 at M3 after 4–11 at Komusubi.",
              recentForm: [
                  "Recent 7–8 at M3 after 4–11 at Komusubi."
              ],
              strengths: [
                  "Size/power",
                  "upper-rank exposure creates honor chances",
                  "can spike."
              ],
              weaknesses: [
                  "Under-.500 Makuuchi profile",
                  "inconsistent against the top."
              ],
              projection: [
                  "Expected wins 6–8; ceiling 10; floor 4.",
                  "Honor outlook: Kachi-koshi medium-low; sansho medium-low; kinboshi medium; kimarite medium."
              ],
              verdict: "Risky but defensible."
          },
          {
              pick: "5",
              name: "Roga",
              rank: "Maegashira 14 West",
              grade: "B-",
              expectedWins: "7",
              notes: "Recent 5–10 and 7–8, but now lower down.",
              recentForm: [
                  "Recent 5–10 and 7–8, but now lower down."
              ],
              strengths: [
                  "Soft schedule",
                  "yotsu profile",
                  "kachi-koshi path."
              ],
              weaknesses: [
                  "Below-.500 Makuuchi record",
                  "limited honor ceiling."
              ],
              projection: [
                  "Expected wins 7; ceiling 9; floor 5.",
                  "Honor outlook: Kachi-koshi medium; yusho very low; sansho low; kimarite low-medium."
              ],
              verdict: "Fine late pick. Not a league-winner."
          },
          {
              pick: "6",
              name: "Fujiseiun",
              rank: "Maegashira 6 West",
              grade: "B+",
              expectedWins: "7–8",
              notes: "Official profile shows limited Makuuchi sample but a strong 10–5 top-division record entering this rank band.",
              recentForm: [
                  "Official profile shows limited Makuuchi sample but a strong 10–5 top-division record entering this rank band."
              ],
              strengths: [
                  "Fresh upside",
                  "8–10 win path",
                  "some Fighting Spirit upside if he overperforms."
              ],
              weaknesses: [
                  "Tiny top-division sample",
                  "rank jump risk",
                  "unknown against stronger schedule."
              ],
              projection: [
                  "Expected wins 7–8; ceiling 10; floor 5.",
                  "Honor outlook: Kachi-koshi medium-high; yusho low; sansho medium; kinboshi low; kimarite medium-low."
              ],
              verdict: "Best Dolo pick. This is how a no-anchor team finds upside."
          }
      ],
      model: [
          {
              rikishi: "Ura",
              expectedWins: 7.4,
              honorEv: 1.6,
              riskPenalty: 1.0,
              combined: 7.3
          },
          {
              rikishi: "Kotoeiho",
              expectedWins: 7.4,
              honorEv: 1.1,
              riskPenalty: 0.8,
              combined: 7.2
          },
          {
              rikishi: "Daieisho",
              expectedWins: 7.2,
              honorEv: 1.9,
              riskPenalty: 0.9,
              combined: 7.2
          },
          {
              rikishi: "Oho",
              expectedWins: 7.0,
              honorEv: 1.6,
              riskPenalty: 1.0,
              combined: 6.9
          },
          {
              rikishi: "Roga",
              expectedWins: 7.2,
              honorEv: 0.9,
              riskPenalty: 0.7,
              combined: 7.0
          },
          {
              rikishi: "Fujiseiun",
              expectedWins: 7.7,
              honorEv: 1.5,
              riskPenalty: 0.9,
              combined: 7.5
          }
      ],
      trackGrades: [
          {
              label: "Wins Track",
              grade: "B",
              "note": "Solid aggregate volume, no anchor."
          },
          {
              label: "Honor Track",
              grade: "B",
              "note": "Daieisho/Oho have kinboshi/sansho paths; Ura has kimarite upside; Fujiseiun can get a prize if he overperforms."
          },
          {
              label: "Risk Profile",
              grade: "B+",
              "note": "No Day 1 absence issues and less reliance on one superstar. But the talent ceiling is lower."
          }
      ],
      archetype: {
          label: "Balanced active grinder with no superstar",
          why: "Balanced active grinder with no superstar"
      },
      winConditions: [
          "Fujiseiun validates the hype with 9+ wins.",
          "Ura and Kotoeiho both get kachi-koshi.",
          "Daieisho or Oho lands kinboshi/sansho.",
          "No one collapses below 6 wins."
      ],
      lossConditions: [
          "No wrestler reaches 10 wins.",
          "Daieisho/Oho get beaten up by the upper schedule.",
          "Ura continues his recent losing trend.",
          "Kotoeiho/Roga are merely 6–7 win filler."
      ],
      finalVerdict: [
          "Dolo is dangerous but underpowered.",
          "The mistake would be assuming balance automatically beats elite anchors."
      ]
  },
  {
      owner: "Joe",
      slug: "joe",
      title: "Fantasy Sumo Draft Report — Team Joe",
      overallGrade: "B+ / 86",
      summary: [
          "This is a strong anchor roster with a risky high-maegashira back half.",
          "This is a Kotozakura-led contender. The core bet is that Kotozakura gives 10–11 wins while Takanosho and Ichiyamamoto turn brutal rank positions into honor points rather than losses. The main risk is that the M1/M2 picks get chewed up and the lower picks are not strong enough to offset it.",
          "This grade is pre-Day 1, based on the roster at 0–0.",
          "Big contextual note: Joe avoided the Day 1 absent Yokozuna/Ozeki names. That matters. Kotozakura's path is also helped by Onosato and Aonishiki being absent."
      ],
      sources: reportSources,
      roster: [
          {
              pick: "R1",
              rikishi: "Kotozakura",
              rank: "Ozeki 1 East",
              grade: "A-",
              expectedWins: "9.8",
              notes: "Strong active anchor; lower yusho ceiling than Hoshoryu/Kirishima"
          },
          {
              pick: "R2",
              rikishi: "Takanosho",
              rank: "Maegashira 1 West",
              grade: "B",
              expectedWins: "7.2",
              notes: "Kinboshi/sansho upside, brutal schedule"
          },
          {
              pick: "R3",
              rikishi: "Tokihayate",
              rank: "Maegashira 12 West",
              grade: "B-",
              expectedWins: "7.1",
              notes: "Soft rank, recent 5–10 warning"
          },
          {
              pick: "R4",
              rikishi: "Tamawashi",
              rank: "Maegashira 13 West",
              grade: "C+",
              expectedWins: "6.8",
              notes: "Legendary, but age/recent form risk"
          },
          {
              pick: "R5",
              rikishi: "Fujiryoga",
              rank: "Maegashira 17 East",
              grade: "B-",
              expectedWins: "7.0",
              notes: "Bottom-rank survival upside, tiny sample"
          },
          {
              pick: "R6",
              rikishi: "Ichiyamamoto",
              rank: "Maegashira 2 West",
              grade: "B",
              expectedWins: "7.1",
              notes: "Honor upside, but very hard rank"
          }
      ],
      projectedWins: "44–48",
      ceiling: "51+",
      floor: "38–40",
      strategicSummary: {
          strengths: [
              "Took Kotozakura, a clean active Ozeki anchor.",
              "Added real kinboshi paths with Takanosho and Ichiyamamoto.",
              "Took bottom/lower-rank survival bets in Fujiryoga and Tokihayate."
          ],
          vulnerabilities: [
              "Takanosho and Ichiyamamoto are both in punishing top-rank lanes.",
              "Tamawashi is a name-value trap if you ignore age and recent form.",
              "Fujiryoga is unproven."
          ],
          tone: "This roster is anchor-led with volatile honor shots. That can beat Danny if the M1/M2 picks steal prizes. It can also bleed 5–6 win records."
      },
      picks: [
          {
              pick: "1",
              name: "Kotozakura",
              rank: "Ozeki 1 East",
              grade: "A-",
              expectedWins: "9–10",
              notes: "Recent 10–5 and 8–7 at Ozeki; official profile shows strong Makuuchi record and high technique diversity.",
              recentForm: [
                  "Recent 10–5 and 8–7 at Ozeki; official profile shows strong Makuuchi record and high technique diversity."
              ],
              strengths: [
                  "Safe active anchor",
                  "kachi-koshi very likely",
                  "yusho/jun-yusho path."
              ],
              weaknesses: [
                  "Less explosive than Hoshoryu/Kirishima",
                  "no sansho/kinboshi."
              ],
              projection: [
                  "Expected wins 9–10; ceiling 12+; floor 7.",
                  "Honor outlook: Kachi-koshi high; yusho medium; jun-yusho medium-high; sansho none; kinboshi none; kimarite high."
              ],
              verdict: "Good R1. Not the best anchor, but clean and active."
          },
          {
              pick: "2",
              name: "Takanosho",
              rank: "Maegashira 1 West",
              grade: "B",
              expectedWins: "6–8",
              notes: "Recent 9–6 at M4 after 5–10 at M3.",
              recentForm: [
                  "Recent 9–6 at M4 after 5–10 at M3."
              ],
              strengths: [
                  "Kinboshi access",
                  "proven veteran",
                  "can punish top opponents."
              ],
              weaknesses: [
                  "M1 schedule is brutal",
                  "record swings."
              ],
              projection: [
                  "Expected wins 6–8; ceiling 10; floor 4–5.",
                  "Honor outlook: Kachi-koshi medium; yusho low; sansho medium; kinboshi high; kimarite low-medium."
              ],
              verdict: "Good honor shot, not a safe R2."
          },
          {
              pick: "3",
              name: "Tokihayate",
              rank: "Maegashira 12 West",
              grade: "B-",
              expectedWins: "7",
              notes: "Recent 5–10 at M9; current rank gives relief.",
              recentForm: [
                  "Recent 5–10 at M9; current rank gives relief."
              ],
              strengths: [
                  "Softer schedule",
                  "diverse yotsu/throw profile",
                  "8-win path."
              ],
              weaknesses: [
                  "Below-.500 Makuuchi record",
                  "limited honor ceiling."
              ],
              projection: [
                  "Expected wins 7; ceiling 9; floor 5.",
                  "Honor outlook: Kachi-koshi medium; yusho very low; sansho low; kinboshi very low; kimarite medium-high."
              ],
              verdict: "Acceptable R3, but not exciting."
          },
          {
              pick: "4",
              name: "Tamawashi",
              rank: "Maegashira 13 West",
              grade: "C+",
              expectedWins: "6–7",
              notes: "Legendary durability and two Makuuchi titles, but recent form/age risk is obvious.",
              recentForm: [
                  "Legendary durability and two Makuuchi titles, but recent form/age risk is obvious."
              ],
              strengths: [
                  "Experience",
                  "past honor résumé",
                  "lower-rank schedule."
              ],
              weaknesses: [
                  "Age",
                  "recent poor form",
                  "style has limited diversity."
              ],
              projection: [
                  "Expected wins 6–7; ceiling 9; floor 4.",
                  "Honor outlook: Kachi-koshi medium-low; yusho very low; sansho low; kinboshi very low; kimarite low."
              ],
              verdict: "Name-value trap risk. At R4, Joe needed more than nostalgia."
          },
          {
              pick: "5",
              name: "Fujiryoga",
              rank: "Maegashira 17 East",
              grade: "B-",
              expectedWins: "6–8",
              notes: "Very small top-division sample; recent 7–8 at the bottom of Makuuchi.",
              recentForm: [
                  "Very small top-division sample; recent 7–8 at the bottom of Makuuchi."
              ],
              strengths: [
                  "Bottom-rank schedule",
                  "desperation factor",
                  "8-win survival path."
              ],
              weaknesses: [
                  "Unproven",
                  "narrow oshi profile",
                  "one bad week can mean make-koshi."
              ],
              projection: [
                  "Expected wins 6–8; ceiling 9; floor 4–5.",
                  "Honor outlook: Kachi-koshi medium; yusho very low; sansho low; kinboshi none; kimarite low."
              ],
              verdict: "Reasonable late survival bet."
          },
          {
              pick: "6",
              name: "Ichiyamamoto",
              rank: "Maegashira 2 West",
              grade: "B",
              expectedWins: "6–8",
              notes: "Recent 9–6 at M6, but 4–11 at M1 before that.",
              recentForm: [
                  "Recent 9–6 at M6, but 4–11 at M1 before that."
              ],
              strengths: [
                  "Kinboshi path",
                  "oshi/tsuki pressure",
                  "honor exposure."
              ],
              weaknesses: [
                  "Very hard schedule",
                  "can collapse against elite opponents."
              ],
              projection: [
                  "Expected wins 6–8; ceiling 10; floor 4.",
                  "Honor outlook: Kachi-koshi medium-low; yusho low; sansho medium; kinboshi high; kimarite medium."
              ],
              verdict: "Good R6 upside. Dangerous, but that is what late picks are for."
          }
      ],
      model: [
          {
              rikishi: "Kotozakura",
              expectedWins: 9.8,
              honorEv: 4.4,
              riskPenalty: 0.8,
              combined: 12.2
          },
          {
              rikishi: "Takanosho",
              expectedWins: 7.2,
              honorEv: 2.3,
              riskPenalty: 1.0,
              combined: 7.5
          },
          {
              rikishi: "Tokihayate",
              expectedWins: 7.1,
              honorEv: 1.0,
              riskPenalty: 0.7,
              combined: 6.9
          },
          {
              rikishi: "Tamawashi",
              expectedWins: 6.8,
              honorEv: 0.8,
              riskPenalty: 1.1,
              combined: 6.1
          },
          {
              rikishi: "Fujiryoga",
              expectedWins: 7.0,
              honorEv: 0.9,
              riskPenalty: 0.9,
              combined: 6.6
          },
          {
              rikishi: "Ichiyamamoto",
              expectedWins: 7.1,
              honorEv: 2.0,
              riskPenalty: 1.0,
              combined: 7.2
          }
      ],
      trackGrades: [
          {
              label: "Wins Track",
              grade: "B+",
              "note": "Kotozakura gives a clean anchor. The rest is more volatile than it looks."
          },
          {
              label: "Honor Track",
              grade: "B+",
              "note": "Takanosho and Ichiyamamoto can earn kinboshi and sansho-style attention. Kotozakura adds yusho/jun-yusho upside."
          },
          {
              label: "Risk Profile",
              grade: "B-",
              "note": "Active roster, but high schedule risk plus Tamawashi/Fujiryoga volatility."
          }
      ],
      archetype: {
          label: "Active Ozeki anchor plus volatile kinboshi shots",
          why: "Active Ozeki anchor plus volatile kinboshi shots"
      },
      winConditions: [
          "Kotozakura hits 11+.",
          "Takanosho or Ichiyamamoto beats a Yokozuna and/or reaches kachi-koshi.",
          "Tokihayate and Fujiryoga provide 8-win floor results.",
          "Tamawashi avoids a veteran fade."
      ],
      lossConditions: [
          "Kotozakura is only 9–6.",
          "Takanosho and Ichiyamamoto both go 5–10.",
          "Tamawashi is no longer fantasy viable.",
          "Fujiryoga's tiny sample gets exposed."
      ],
      finalVerdict: [
          "Joe is live.",
          "The mistake would be assuming the active Ozeki alone offsets two brutal schedule picks."
      ]
  },
]

export function analysisForOwner(owner: string) {
  return teamAnalyses.find((analysis) => analysis.owner === owner)
}

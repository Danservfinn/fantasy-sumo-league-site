export type Side = 'East' | 'West'
export type RikishiStatus = 'active' | 'monitor' | 'kyujo'

export interface Rikishi {
  name: string
  rank: string
  side: Side
  wins: number
  losses: number
  honorPoints: number
  kinboshi: number
  notableKimarite: number
  rareKimarite: number
  status: RikishiStatus
  note?: string
}

export interface Team {
  owner: string
  color: string
  rikishi: Rikishi[]
}

export const scoringRules = [
  { label: 'Yusho', points: 10 },
  { label: 'Zensho bonus', points: 5 },
  { label: 'Jun-yusho', points: 4 },
  { label: 'Outstanding performance', points: 5 },
  { label: 'Fighting spirit', points: 4 },
  { label: 'Technique prize', points: 4 },
  { label: 'Kinboshi', points: 3 },
  { label: 'Kachi-koshi at 8 wins', points: 2 },
  { label: 'Each win after kachi-koshi', points: 1 },
  { label: 'Notable kimarite', points: 1 },
  { label: 'Rare kimarite', points: 3 },
]

export const leagueTeams: Team[] = [
  {
    owner: 'Danny',
    color: '#7170ff',
    rikishi: [
      { name: 'Atamifuji', rank: 'Sekiwake 1', side: 'East', wins: 6, losses: 3, honorPoints: 0, kinboshi: 0, notableKimarite: 2, rareKimarite: 0, status: 'active' },
      { name: 'Kotoshoho', rank: 'Sekiwake 1', side: 'West', wins: 5, losses: 4, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
      { name: 'Fujinokawa', rank: 'Maegashira 1', side: 'East', wins: 7, losses: 2, honorPoints: 4, kinboshi: 1, notableKimarite: 0, rareKimarite: 1, status: 'active' },
      { name: 'Yoshinofuji', rank: 'Maegashira 2', side: 'East', wins: 4, losses: 5, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
      { name: 'Shodai', rank: 'Maegashira 5', side: 'West', wins: 5, losses: 4, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Kinbozan', rank: 'Maegashira 11', side: 'West', wins: 6, losses: 3, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
    ],
  },
  {
    owner: 'David',
    color: '#f59e0b',
    rikishi: [
      { name: 'Aonishiki', rank: 'Ozeki 1', side: 'West', wins: 0, losses: 0, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'monitor', note: 'Absence/watch-list flag; update from official kyokai source.' },
      { name: 'Kirishima', rank: 'Ozeki 2', side: 'East', wins: 5, losses: 4, honorPoints: 0, kinboshi: 0, notableKimarite: 2, rareKimarite: 0, status: 'active' },
      { name: 'Asanoyama', rank: 'Maegashira 10', side: 'East', wins: 4, losses: 5, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Churanoumi', rank: 'Maegashira 6', side: 'East', wins: 6, losses: 3, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
      { name: 'Wakamotoharu', rank: 'Maegashira 5', side: 'East', wins: 5, losses: 4, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Oshoumi', rank: 'Maegashira 15', side: 'West', wins: 6, losses: 3, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'active' },
    ],
  },
  {
    owner: 'Liz',
    color: '#10b981',
    rikishi: [
      { name: 'Asakoryu', rank: 'Maegashira 7', side: 'West', wins: 5, losses: 4, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
      { name: 'Onosato', rank: 'Yokozuna 1', side: 'West', wins: 0, losses: 0, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'monitor', note: 'Absence/watch-list flag; update from official kyokai source.' },
      { name: 'Takayasu', rank: 'Komusubi 1', side: 'West', wins: 6, losses: 3, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
      { name: 'Hakunofuji', rank: 'Maegashira 10', side: 'West', wins: 7, losses: 2, honorPoints: 4, kinboshi: 0, notableKimarite: 2, rareKimarite: 0, status: 'active' },
      { name: 'Hiradoumi', rank: 'Maegashira 3', side: 'East', wins: 4, losses: 5, honorPoints: 0, kinboshi: 1, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Nishikifuji', rank: 'Maegashira 9', side: 'West', wins: 5, losses: 4, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'active' },
    ],
  },
  {
    owner: 'Josh',
    color: '#ef4444',
    rikishi: [
      { name: 'Hoshoryu', rank: 'Yokozuna 1', side: 'East', wins: 8, losses: 1, honorPoints: 2, kinboshi: 0, notableKimarite: 2, rareKimarite: 0, status: 'active' },
      { name: 'Wakatakakage', rank: 'Komusubi 1', side: 'East', wins: 6, losses: 3, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
      { name: 'Gonoyama', rank: 'Maegashira 4', side: 'West', wins: 5, losses: 4, honorPoints: 0, kinboshi: 1, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Abi', rank: 'Maegashira 9', side: 'East', wins: 3, losses: 6, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Oshoma', rank: 'Maegashira 8', side: 'East', wins: 5, losses: 4, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 1, status: 'active' },
      { name: 'Shishi', rank: 'Maegashira 12', side: 'East', wins: 4, losses: 5, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
    ],
  },
  {
    owner: 'Dolo',
    color: '#38bdf8',
    rikishi: [
      { name: 'Ura', rank: 'Maegashira 11', side: 'East', wins: 7, losses: 2, honorPoints: 0, kinboshi: 0, notableKimarite: 3, rareKimarite: 1, status: 'active' },
      { name: 'Kotoeiho', rank: 'Maegashira 13', side: 'East', wins: 6, losses: 3, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Daieisho', rank: 'Maegashira 4', side: 'East', wins: 4, losses: 5, honorPoints: 0, kinboshi: 1, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Oho', rank: 'Maegashira 3', side: 'West', wins: 5, losses: 4, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
      { name: 'Roga', rank: 'Maegashira 14', side: 'West', wins: 3, losses: 6, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Fujiseiun', rank: 'Maegashira 6', side: 'West', wins: 5, losses: 4, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
    ],
  },
  {
    owner: 'Joe',
    color: '#a78bfa',
    rikishi: [
      { name: 'Kotozakura', rank: 'Ozeki 1', side: 'East', wins: 7, losses: 2, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
      { name: 'Takanosho', rank: 'Maegashira 1', side: 'West', wins: 4, losses: 5, honorPoints: 0, kinboshi: 1, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Tokihayate', rank: 'Maegashira 12', side: 'West', wins: 5, losses: 4, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Tamawashi', rank: 'Maegashira 13', side: 'West', wins: 6, losses: 3, honorPoints: 0, kinboshi: 0, notableKimarite: 1, rareKimarite: 0, status: 'active' },
      { name: 'Fujiryoga', rank: 'Maegashira 17', side: 'East', wins: 4, losses: 5, honorPoints: 0, kinboshi: 0, notableKimarite: 0, rareKimarite: 0, status: 'active' },
      { name: 'Ichiyamamoto', rank: 'Maegashira 2', side: 'West', wins: 5, losses: 4, honorPoints: 0, kinboshi: 1, notableKimarite: 1, rareKimarite: 0, status: 'active' },
    ],
  },
]

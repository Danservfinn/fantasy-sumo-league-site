export interface LiveEvent {
  day: number
  title: string
  summary: string
  time: string
  source: 'sse' | 'snapshot' | 'mock'
}

export interface LiveSnapshot {
  day: number
  lastUpdated: string
  sourceStatus: 'connected' | 'snapshot' | 'mock-fallback' | 'offline'
  provider: string
  events: LiveEvent[]
}

const mockEvents: LiveEvent[] = [
  { day: 9, title: 'Hoshoryu reaches kachi-koshi pace', summary: 'Yokozuna anchor keeps Josh near the top of the board.', time: '15:42 JST', source: 'mock' },
  { day: 9, title: 'Ura technique bonus watch', summary: 'Dolo gains separation from creative kimarite points.', time: '15:12 JST', source: 'mock' },
  { day: 9, title: 'Fujinokawa upset value', summary: 'Danny gets maegashira leverage from kinboshi and rare-technique scoring.', time: '14:51 JST', source: 'mock' },
]

export async function loadLiveSnapshot(): Promise<LiveSnapshot> {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 900)
  try {
    const response = await fetch('/data/live-snapshot.json', { signal: controller.signal })
    if (!response.ok) throw new Error(`snapshot ${response.status}`)
    const snapshot = (await response.json()) as LiveSnapshot
    return { ...snapshot, sourceStatus: 'snapshot', provider: 'local JSON snapshot' }
  } catch {
    return {
      day: 9,
      lastUpdated: new Date().toISOString(),
      sourceStatus: 'mock-fallback',
      provider: 'in-browser mock provider; replace with official source adapter when available',
      events: mockEvents,
    }
  } finally {
    window.clearTimeout(timeout)
  }
}

export function connectLiveEvents(onUpdate: (snapshot: LiveSnapshot) => void): () => void {
  if ('EventSource' in window) {
    const events = new EventSource('/api/live')
    events.onmessage = (message) => {
      try {
        onUpdate(JSON.parse(message.data) as LiveSnapshot)
      } catch {
        // Ignore malformed server messages and keep fallback path alive.
      }
    }
    events.onerror = () => {
      events.close()
      void loadLiveSnapshot().then(onUpdate)
    }
    return () => events.close()
  }

  let cancelled = false
  const poll = async () => {
    if (!cancelled) onUpdate(await loadLiveSnapshot())
  }
  void poll()
  const timer = globalThis.setInterval(poll, 30000)
  return () => {
    cancelled = true
    globalThis.clearInterval(timer)
  }
}

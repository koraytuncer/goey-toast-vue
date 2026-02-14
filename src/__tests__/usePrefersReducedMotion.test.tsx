import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { usePrefersReducedMotion } from '../usePrefersReducedMotion'

describe('usePrefersReducedMotion', () => {
  let listeners: Array<(event: MediaQueryListEvent) => void>
  let matchesMock: boolean

  beforeEach(() => {
    listeners = []
    matchesMock = false
    vi.stubGlobal('matchMedia', vi.fn((query: string) => ({
      matches: matchesMock,
      media: query,
      addEventListener: (_: string, cb: (event: MediaQueryListEvent) => void) => {
        listeners.push(cb)
      },
      removeEventListener: (_: string, cb: (event: MediaQueryListEvent) => void) => {
        listeners = listeners.filter(l => l !== cb)
      },
    })))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns false when reduced motion is not preferred', () => {
    matchesMock = false
    const { result } = renderHook(() => usePrefersReducedMotion())
    expect(result.current).toBe(false)
  })

  it('returns true when reduced motion is preferred', () => {
    matchesMock = true
    const { result } = renderHook(() => usePrefersReducedMotion())
    expect(result.current).toBe(true)
  })

  it('updates when preference changes', () => {
    matchesMock = false
    const { result } = renderHook(() => usePrefersReducedMotion())
    expect(result.current).toBe(false)

    act(() => {
      for (const listener of listeners) {
        listener({ matches: true } as MediaQueryListEvent)
      }
    })

    expect(result.current).toBe(true)
  })

  it('cleans up event listener on unmount', () => {
    matchesMock = false
    const { unmount } = renderHook(() => usePrefersReducedMotion())
    expect(listeners).toHaveLength(1)

    unmount()
    expect(listeners).toHaveLength(0)
  })
})

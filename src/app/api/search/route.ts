import { NextResponse } from 'next/server'
import { searchVaults } from '../../../api/vaults'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const term = searchParams.get('term')
  
  if (!term) {
    return NextResponse.json({ error: 'Search term required' }, { status: 400 })
  }

  try {
    const results = await searchVaults(term)
    return NextResponse.json(results)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ error: 'Failed to fetch vaults' }, { status: 500 })
  }
} 
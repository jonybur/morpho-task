import { NextRequest } from 'next/server'
import { searchVaults } from '@/api/vaults'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const term = searchParams.get('term')
    
    if (!term) {
      return Response.json(
        { error: 'Search term required' }, 
        { status: 400 }
      )
    }

    const results = await searchVaults(term)
    return Response.json(results)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return Response.json({ error: message }, { status: 500 })
  }
} 
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Test database connection
    const venueCount = await prisma.venue.count()
    const courtCount = await prisma.court.count()
    
    const venues = await prisma.venue.findMany({
      include: {
        courts: true
      }
    })

    return NextResponse.json({
      success: true,
      data: {
        venueCount,
        courtCount,
        venues
      },
      message: 'Database connection successful'
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Database connection failed'
    }, { status: 500 })
  }
}
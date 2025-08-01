import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create sample venues
  const venue1 = await prisma.venue.create({
    data: {
      name: 'Downtown Padel Club',
      address: '123 Main St, Downtown, NY 10001',
      latitude: 40.7128,
      longitude: -74.0060,
      contactInfo: {
        phone: '+1-555-0123',
        email: 'info@downtownpadel.com',
        website: 'https://downtownpadel.com'
      },
      amenities: {
        parking: true,
        showers: true,
        equipment_rental: true,
        cafe: true
      },
      pricingRules: {
        weekday_rate: 50,
        weekend_rate: 70,
        peak_hours: [18, 19, 20, 21]
      }
    }
  })

  const venue2 = await prisma.venue.create({
    data: {
      name: 'Riverside Padel Center',
      address: '456 River Rd, Brooklyn, NY 11201',
      latitude: 40.6892,
      longitude: -73.9442,
      contactInfo: {
        phone: '+1-555-0456',
        email: 'bookings@riversidepadel.com',
        website: 'https://riversidepadel.com'
      },
      amenities: {
        parking: true,
        showers: false,
        equipment_rental: true,
        cafe: false
      },
      pricingRules: {
        weekday_rate: 45,
        weekend_rate: 60,
        peak_hours: [19, 20, 21]
      }
    }
  })

  // Create courts for venues
  await prisma.court.createMany({
    data: [
      {
        venueId: venue1.id,
        name: 'Court 1',
        courtType: 'INDOOR',
        surfaceType: 'Artificial Grass',
        hourlyRate: 50
      },
      {
        venueId: venue1.id,
        name: 'Court 2',
        courtType: 'INDOOR',
        surfaceType: 'Artificial Grass',
        hourlyRate: 50
      },
      {
        venueId: venue1.id,
        name: 'Court 3',
        courtType: 'OUTDOOR',
        surfaceType: 'Artificial Grass',
        hourlyRate: 45
      },
      {
        venueId: venue2.id,
        name: 'Court A',
        courtType: 'OUTDOOR',
        surfaceType: 'Artificial Grass',
        hourlyRate: 45
      },
      {
        venueId: venue2.id,
        name: 'Court B',
        courtType: 'OUTDOOR',
        surfaceType: 'Artificial Grass',
        hourlyRate: 45
      }
    ]
  })

  console.log('✅ Database seeded successfully!')
  console.log(`Created venues: ${venue1.name}, ${venue2.name}`)
  console.log('Created 5 courts total')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
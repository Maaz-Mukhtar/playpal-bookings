export interface Venue {
  id: string
  name: string
  address: string
  latitude?: number
  longitude?: number
  contactInfo?: Record<string, unknown>
  amenities?: Record<string, unknown>
  pricingRules?: Record<string, unknown>
  courts: Court[]
}

export interface Court {
  id: string
  venueId: string
  name: string
  courtType: 'INDOOR' | 'OUTDOOR'
  surfaceType?: string
  hourlyRate: number
  venue: Venue
}

export interface Booking {
  id: string
  courtId: string
  userId: string
  startTime: Date
  endTime: Date
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
  totalAmount: number
  paymentId?: string
  court: Court
  user: User
}

export interface User {
  id: string
  email: string
  name?: string
  phone?: string
  skillLevel: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'
  subscriptionTier: 'FREE' | 'PREMIUM'
}

export interface BookingFormData {
  courtId: string
  date: string
  startTime: string
  endTime: string
  totalAmount: number
}
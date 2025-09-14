export interface Service {
  id: string
  title: string
  description: string
  price: string
  duration: string
  image?: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  image: string
  specialties: string[]
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  review: string
  service?: string
  image?: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: {
    [key: string]: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
} 
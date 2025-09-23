export interface Review {
  id: string
  name: string
  rating: number
  date: string
  text: string
  service?: string
}

export function getAverageRating(): number {
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  return totalRating / reviews.length
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Edward Hernandez',
    rating: 5,
    date: '4 months ago',
    text: 'Great follow up on calls from customers to the landscaper. Great ability to diagnose problems with our landscape. The customer service experience is on point with ability to handle the problem and correct the issue. He is quite honest and transparent.',
    service: 'Landscape Design'
  },
  {
    id: '2',
    name: 'Ruzanna Allakhverdova',
    rating: 5,
    date: '4 months ago',
    text: 'We had an incredible experience with GreenScape Miami. Our sprinkler system failed during a drought, and they came to the rescue faster than we expected. From the first phone call, they were friendly, professional, and genuinely cared about solving our problem.',
    service: 'Emergency Cleanup'
  },
  {
    id: '3',
    name: 'Castillo Pro Services',
    rating: 5,
    date: '4 months ago',
    text: 'Impeccable technical service – highly recommended. As a professional in the industry, I highly value punctuality, technical knowledge, and transparency in work. GreenScape Miami delivers on all of that and more. Their approach to landscape maintenance is thorough and professional.',
    service: 'Lawn Maintenance'
  },
  {
    id: '4',
    name: 'Kevin Kapoor',
    rating: 5,
    date: '4 months ago',
    text: 'GreenScape Miami did a whole property landscape design and installed irrigation systems for me. They were excellent, very knowledgeable, professional and punctual. I would highly recommend them!',
    service: 'Irrigation Systems'
  },
  {
    id: '5',
    name: 'Sergio Vega',
    rating: 5,
    date: '4 months ago',
    text: 'Blendi provides exceptional service, characterized by speed and reliability. It is uncommon to find a contractor as trustworthy and committed to client needs, handling projects of all sizes with equal dedication.',
    service: 'Commercial Landscaping'
  },
  {
    id: '6',
    name: 'William Vega',
    rating: 5,
    date: '4 months ago',
    text: 'Top notch company. The Owner is hands on and always willing to make sure the customer is beyond satisfied and happy. I would recommend him to anyone. As long as Mr. Blendi is around I will never call anyone else.',
    service: 'Landscape Design'
  },
  {
    id: '7',
    name: 'Vasil Penchev',
    rating: 5,
    date: '3 months ago',
    text: 'Job well done. We experienced some opportunities with the city, however the gentleman handled all communications with the officials in a professional and prompt manner. Will definitely work with this company again.',
    service: 'Hardscaping'
  },
  {
    id: '8',
    name: 'Mick Nenezic',
    rating: 5,
    date: '4 months ago',
    text: 'Great service! Very experienced and knowledgeable team. Very easy communication. Solved my landscape problem that a few other companies couldn\'t. Highly recommended.',
    service: 'Tree & Shrub Care'
  },
  {
    id: '9',
    name: 'Bleris Caka',
    rating: 5,
    date: 'a year ago',
    text: 'Amazing work! Me and my wife needed to get our irrigation fixed - it stopped watering our plants, GreenScape Miami came to the rescue and restored our landscape! Took them only an hour and it was a little sprinkler head issue, the owner was straight to the point and fair pricing!',
    service: 'Irrigation Systems'
  },
  {
    id: '10',
    name: 'Irena Elmstrom',
    rating: 5,
    date: 'a year ago',
    text: 'Fantastic work! Blendi came right away and had our landscape looking like new in no time. This is our second time using his company for service. We will definitely recommend him to all of our friends and family. Thank you very much.',
    service: 'Emergency Cleanup'
  },
  {
    id: '11',
    name: 'HANAN IBRAHIM',
    rating: 5,
    date: 'a year ago',
    text: 'GreenScape Miami is one of the best companies that I ever dealt with. I am a president of an association in Hollywood and Blendi did 3 landscape installations and maintenance in our building. He is very professional, right on time, very competitive prices. Highly recommend!',
    service: 'Commercial Landscaping'
  },
  {
    id: '12',
    name: 'C H',
    rating: 5,
    date: 'a year ago',
    text: 'GreenScape Miami is THE company to call when you need anything landscaping done with a smile and meticulous attention to everything they do! GreenScape is the best company I\'ve ever used to help with our landscaping by far. From the unbeatable quality of work to the amazing customer service!',
    service: 'Lawn Maintenance'
  },
  {
    id: '13',
    name: 'Sam Alkoubey',
    rating: 5,
    date: 'a year ago',
    text: 'GreenScape Miami: From Chaos to Beauty in Record Time! If you\'re looking for heroes in Miami, look no further than GreenScape Miami! They rescued our landscape from storm damage with incredible speed and professionalism.',
    service: 'Emergency Cleanup'
  },
  {
    id: '14',
    name: 'Emanuida K',
    rating: 5,
    date: 'a year ago',
    text: 'Blendi came right away when we called him. He fixed the irrigation issue very quickly for a reasonable price. Highly recommend as other companies couldn\'t get someone out until the next day which was unacceptable for us with new plants dying!',
    service: 'Emergency Cleanup'
  },
  {
    id: '15',
    name: 'Geysel Hernandez',
    rating: 5,
    date: '4 months ago',
    text: 'Very professional and dedicated company. Good communication with customers. In my experience and opinion this is a service first company.',
    service: 'Landscape Design'
  },
  {
    id: '16',
    name: 'Jean Carlos Sahdala',
    rating: 5,
    date: 'a year ago',
    text: 'One of most efficient and fast crew that you can get on the market is GreenScape Miami. These guys have the knowledge on this business that can guarantee your job will be done properly. Thank You GreenScape for your services and always fast response A++',
    service: 'Lawn Maintenance'
  },
  {
    id: '17',
    name: 'Katya Hubbard',
    rating: 5,
    date: 'a year ago',
    text: 'Our company has been working with GreenScape Miami for numerous years, and continuously have the best experience with the provided service! GreenScape Miami is our number one company for our landscaping work between Broward and Dade county! Thank you for all your hard work and dedication!',
    service: 'Commercial Landscaping'
  },
  {
    id: '18',
    name: 'Julian Santos',
    rating: 5,
    date: 'a year ago',
    text: 'Mr. Blendi was here at our property and as always he and his team do great work and very affordable prices and very knowledgeable. They always get the job done right the first time and also very friendly and kind staff.',
    service: 'Lawn Maintenance'
  }
]
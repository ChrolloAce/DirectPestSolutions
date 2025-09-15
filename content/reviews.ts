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
    text: 'Great follow up on calls from customers to the mechanic. Great ability to diagnose a problem on your unit. The customer service experience is on point with ability to handle the problem and correct the problem. He is quite honest and transparent.',
    service: 'AC Repair'
  },
  {
    id: '2',
    name: 'Ruzanna Allakhverdova',
    rating: 5,
    date: '4 months ago',
    text: 'We had an incredible experience with CBE Air Services. Our AC stopped working during a heatwave, and they came to the rescue faster than we expected. From the first phone call, they were friendly, professional, and genuinely cared about solving our problem.',
    service: 'Emergency Service'
  },
  {
    id: '3',
    name: 'Castillo Pro Services',
    rating: 5,
    date: '4 months ago',
    text: 'Impeccable technical service – highly recommended. As a professional in the industry, I highly value punctuality, technical knowledge, and transparency in work. CBE Air Services delivers on all of that and more. Their approach to A/C system maintenance is thorough and professional.',
    service: 'AC Maintenance'
  },
  {
    id: '4',
    name: 'Kevin Kapoor',
    rating: 5,
    date: '4 months ago',
    text: 'CBE Air did a whole house central AC install and several services of mini split units for me. They were excellent, very knowledgeable, professional and punctual. I would highly recommend them!',
    service: 'AC Installation'
  },
  {
    id: '5',
    name: 'Sergio Vega',
    rating: 5,
    date: '4 months ago',
    text: 'Blendi provides exceptional service, characterized by speed and reliability. It is uncommon to find a contractor as trustworthy and committed to client needs, handling projects of all sizes with equal dedication.',
    service: 'Commercial HVAC'
  },
  {
    id: '6',
    name: 'William Vega',
    rating: 5,
    date: '4 months ago',
    text: 'Top notch company. The Owner is hands on and always willing to make sure the customer is beyond satisfied and happy. I would recommend him to anyone. As long as Mr. Blendi is around I will never call anyone else.',
    service: 'AC Repair'
  },
  {
    id: '7',
    name: 'Vasil Penchev',
    rating: 5,
    date: '3 months ago',
    text: 'Job well done. We experienced some opportunities with the city, however the gentleman handled all communications with the officials in a professional and prompt manner. Will definitely work with this company again.',
    service: 'AC Installation'
  },
  {
    id: '8',
    name: 'Mick Nenezic',
    rating: 5,
    date: '4 months ago',
    text: 'Great service! Very experienced and knowledgeable team. Very easy communication. Solved my problem that a few other companies couldn\'t. Highly recommended.',
    service: 'AC Repair'
  },
  {
    id: '9',
    name: 'Bleris Caka',
    rating: 5,
    date: 'a year ago',
    text: 'Amazing work! Me and my wife needed to get our A/C fixed it stopped blowing cool air, CBE Air services came to the rescue and restored my home with cool air! Took them only an hour and it was a little refrigeration leak, the owner was straight to the point and fair pricing!',
    service: 'AC Repair'
  },
  {
    id: '10',
    name: 'Irena Elmstrom',
    rating: 5,
    date: 'a year ago',
    text: 'Fantastic work! Blendi came right away and had our AC running like new in no time. This is our second time using his company for service. We will definitely recommend him to all of our friends and family. Thank you very much.',
    service: 'Emergency Service'
  },
  {
    id: '11',
    name: 'HANAN IBRAHIM',
    rating: 5,
    date: 'a year ago',
    text: 'CBE is one of the best companies that I ever dealt with. I am a president of an association in Hollywood and Blendi did 3 AC installations and replacement in our building. He is very professional, right on time, very competitive prices. Highly recommend!',
    service: 'AC Installation'
  },
  {
    id: '12',
    name: 'C H',
    rating: 5,
    date: 'a year ago',
    text: 'CBE AIR SERVICES is THE company to call when you need anything A/C done with a smile and meticulous attention to everything they do! CBE is the best company I\'ve ever used to help with our A/C by far. From the unbeatable quality of work to the amazing customer service!',
    service: 'AC Maintenance'
  },
  {
    id: '13',
    name: 'Sam Alkoubey',
    rating: 5,
    date: 'a year ago',
    text: 'CBE Air Services: From Sweltering to Serenity in Record Time! If you\'re looking for heroes in Miami, look no further than CBE Air Services! They rescued us from the Miami heat with incredible speed and professionalism.',
    service: 'Emergency Service'
  },
  {
    id: '14',
    name: 'Emanuida K',
    rating: 5,
    date: 'a year ago',
    text: 'Blendi came right away when we called him. He fixed the issue very quickly for a reasonable price. Highly recommend as other companies couldn\'t get someone out until the next day which was unacceptable for us with a baby in the house!',
    service: 'Emergency Service'
  },
  {
    id: '15',
    name: 'Geysel Hernandez',
    rating: 5,
    date: '4 months ago',
    text: 'Very professional and dedicated company. Good communication with customers. In my experience and opinion this is a service first company.',
    service: 'AC Service'
  },
  {
    id: '16',
    name: 'Jean Carlos Sahdala',
    rating: 5,
    date: 'a year ago',
    text: 'One of most efficient and fast crew that you can get on the market is CBE Air Services. These guys have the knowledge on this business that can guarantee your job will be done properly. Thank You CBE for your services and always fast response A++',
    service: 'AC Repair'
  },
  {
    id: '17',
    name: 'Katya Hubbard',
    rating: 5,
    date: 'a year ago',
    text: 'Our company has been working with CBE Air for numerous years, and continuously have the best experience with the provided service! CBE Air is our number one company for our mechanical work between Broward and Dade county! Thank you for all your hard work and dedication!',
    service: 'Commercial HVAC'
  },
  {
    id: '18',
    name: 'Julian Santos',
    rating: 5,
    date: 'a year ago',
    text: 'Mr. Blendi was here at our property and as always he and his team do great work and very affordable prices and very knowledgeable. They always get the job done right the first time and also very friendly and kind staff.',
    service: 'AC Maintenance'
  }
]
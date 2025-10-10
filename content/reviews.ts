export interface Review {
  id: string
  name: string
  rating: number
  date: string
  text: string
  service?: string
  timeAgo?: string
}

export function getAverageRating(): number {
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  return totalRating / reviews.length
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Mikey Perez',
    rating: 5,
    date: '2024-09-10',
    timeAgo: 'a month ago',
    text: 'One will never go wrong with Direct Pest Solutions Control. Jose is one of the most professional knowledgeable fumigators I have ever worked with. I totally recommend this company',
    service: 'Pest Control Service'
  },
  {
    id: '2',
    name: 'Lily Rodriguez',
    rating: 5,
    date: '2024-09-10',
    timeAgo: 'a month ago',
    text: 'Rey is part of the family now—just ask our Golden Retriever! Rey from Direct Pest Solutions has been caring for our home for over 5 years, and he is simply the best. Professional, kind, reliable, and meticulous—he keeps our home pest-free.',
    service: 'Ongoing Pest Maintenance'
  },
  {
    id: '3',
    name: 'Andrea Alexandra',
    rating: 5,
    date: '2024-08-10',
    timeAgo: '2 months ago',
    text: 'We had an outstanding experience with this company thanks to Jorge! He was punctual, professional, and incredibly thorough with our pest control service. From the moment he arrived, Jorge took the time to explain every step of the process.',
    service: 'Pest Control Service'
  },
  {
    id: '4',
    name: 'Kemely Guzman',
    rating: 5,
    date: '2024-08-10',
    timeAgo: '2 months ago',
    text: 'I\'m very pleased with the service provided by this company! Jorge came out to handle our pest control needs and did an excellent job. He was punctual, professional, and took the time to explain everything he was doing. You can tell he takes pride in his work.',
    service: 'Pest Control Service'
  },
  {
    id: '5',
    name: 'JJ Martin',
    rating: 5,
    date: '2024-08-10',
    timeAgo: '2 months ago',
    text: 'I have been using Direct Pest for the past four years, and I am extremely satisfied with their service. They truly care about their customers and take the time to thoroughly inspect every spot inside and outside the house during each visit.',
    service: 'Ongoing Pest Service'
  },
  {
    id: '6',
    name: 'Alina Cruz',
    rating: 5,
    date: '2024-07-10',
    timeAgo: '3 months ago',
    text: 'I recently used Direct Pest Solutions for a pest control issue at my home, and I couldn\'t be more impressed with the entire experience. From the moment I contacted them, their customer service was prompt, professional, and incredibly reassuring.',
    service: 'Pest Control Service'
  },
  {
    id: '7',
    name: 'Micheal Filips',
    rating: 5,
    date: '2024-08-10',
    timeAgo: '2 months ago',
    text: 'I had a great experience with Javier from Direct Pest Solutions. They were professional, knowledgeable, and really listened to my concerns. After a thorough inspection, they provided effective solutions for my pest issues.',
    service: 'Pest Control Service'
  },
  {
    id: '8',
    name: 'manuel gonzalez',
    rating: 5,
    date: '2024-09-10',
    timeAgo: 'a month ago',
    text: 'Jorge did an excellent job! He was punctual, professional, and explained everything clearly. The service was thorough, and I feel confident my home is well-protected. Highly recommend!',
    service: 'Pest Control Service'
  },
  {
    id: '9',
    name: 'Evelyn Alfaro',
    rating: 5,
    date: '2024-07-10',
    timeAgo: '3 months ago',
    text: 'Direct Pest Solution is hands down the best pest control company I\'ve worked with! They\'re always on time, incredibly knowledgeable, and take the time to explain everything clearly. I appreciate how much they prioritize safety—especially with pets and kids in the home.',
    service: 'Pest Control Service'
  },
  {
    id: '10',
    name: 'Hannah Hernandez',
    rating: 5,
    date: '2024-06-10',
    timeAgo: '4 months ago',
    text: 'In south Florida, a reputable, trustworthy company is hard to come across. Although, I recently purchased a home and used this amazing team for our inspection process and cannot recommend an entire team more.',
    service: 'Home Inspection'
  },
  {
    id: '11',
    name: 'Rob Becker',
    rating: 5,
    date: '2024-06-10',
    timeAgo: '4 months ago',
    text: 'Now I know why all of the ratings are 5 star. Exceptional customer service and professionalism.',
    service: 'Pest Control Service'
  },
  {
    id: '12',
    name: 'Richard Sanchez',
    rating: 5,
    date: '2024-08-10',
    timeAgo: '2 months ago',
    text: 'I\'ve been a loyal customer for over 20 years, and I can confidently say they are second to none. Whether it\'s routine maintenance or addressing an urgent issue, they always show up on time, work efficiently, and leave my property protected.',
    service: 'Pest Control Service'
  },
  {
    id: '13',
    name: 'Isel Fernandez',
    rating: 5,
    date: '2024-10-03',
    timeAgo: 'a week ago',
    text: 'I have been using this company for a few years already and I am super happy with them. Very professional, on time. Jose is a pleasure to work with. Thank you!',
    service: 'Pest Control Service'
  },
  {
    id: '14',
    name: 'Katherine McAninch',
    rating: 5,
    date: '2024-08-10',
    timeAgo: '2 months ago',
    text: 'Direct Pest Solutions have been servicing our home for over 7 years now. Rey has been amazing, thorough and always friendly. I 10000% recommend them, without doubt- the best in the biz!',
    service: 'Pest Control Service'
  },
  {
    id: '15',
    name: 'Maria REDERO',
    rating: 5,
    date: '2024-08-10',
    timeAgo: '2 months ago',
    text: 'Is a pleasure to have Direct Pest Solutions taking care of my issues. Good service, reasonable price and very aware of the problems. Leonardo is very pleasant to deal with and the office Wendy always available to help you. Thank you for your service.',
    service: 'Pest Control Service'
  },
  {
    id: '16',
    name: 'V Quiroz',
    rating: 5,
    date: '2024-07-10',
    timeAgo: '3 months ago',
    text: 'We\'ve been using Direct Pest Solutions for many years and have always been impressed with their professionalism, reliability, and effectiveness. Their team is friendly, punctual, and thorough. Highly recommend for all your pest control needs! 👍 5 stars ⭐️',
    service: 'Pest Control Service'
  },
  {
    id: '17',
    name: 'Mauricio Camacho',
    rating: 5,
    date: '2024-08-10',
    timeAgo: '2 months ago',
    text: 'Been dealing with the owner Leo for a lot of years now, service is puntual and at a fair price. My wife\'s favorite observation is the shoe liners they wear inside the house to maintain it clean. Highly recommend for all your fumigation needs.',
    service: 'Fumigation Service'
  },
  {
    id: '18',
    name: 'Vivienne',
    rating: 5,
    date: '2024-08-10',
    timeAgo: '2 months ago',
    text: 'An extremely reliable company that acts quick. Wendy is so nice to deal with - always quick to schedule and share important information. Jorge is a great technician and have used their services for sometime now for maintenance.',
    service: 'Pest Maintenance'
  },
  {
    id: '19',
    name: 'Carlos Sardinas',
    rating: 5,
    date: '2024-08-10',
    timeAgo: '2 months ago',
    text: 'Reynaldo has been our technician for a very long time and he is extremely professional, knowledgeable and willing to help. We are very satisfied with the company and with him. Both are highly recommended.',
    service: 'Pest Control Service'
  },
  {
    id: '20',
    name: 'Hector Martinez',
    rating: 5,
    date: '2024-09-20',
    timeAgo: '3 weeks ago',
    text: 'This is a great company. Honest and trustworthy. Jorge Hernandez that serviced our home is excellent. Today we had Attic termite treatment for drywood termites. They did the whole atic with a termicide. I also had scheduled for them to come back in a few months for a follow-up.',
    service: 'Termite Treatment'
  },
  {
    id: '21',
    name: 'Rosena Francois',
    rating: 5,
    date: '2024-05-10',
    timeAgo: '5 months ago',
    text: 'I recently hired this pest control company after getting quotes from four different providers, and I\'m so glad I chose them. They offered the most comprehensive services at the most reasonable price. Their pricing is truly affordable and competitive.',
    service: 'Pest Control Service'
  },
  {
    id: '22',
    name: 'Luis Perdomo',
    rating: 5,
    date: '2024-07-10',
    timeAgo: '3 months ago',
    text: 'Jose is the epitome of a model employee. On time, courteous, personable, informative, helpful, efficient and detail oriented. He took time to address my concerns and explained it in terms that were easily digestible. He\'s my go to whenever I need pest control!',
    service: 'Pest Control Service'
  },
  {
    id: '23',
    name: 'Ignacio Vazquez',
    rating: 5,
    date: '2024-08-10',
    timeAgo: '2 months ago',
    text: 'We have been working with Direct Pest Solutions for years now. Excellent work, and service.',
    service: 'Pest Control Service'
  },
  {
    id: '24',
    name: 'Michael Perez',
    rating: 5,
    date: '2024-09-10',
    timeAgo: 'a month ago',
    text: 'Great company. They will always put the Customer and their needs first and most. And some occasions I\'ve asked them to return for extra services and they did not hesitate to resolve the issues.',
    service: 'Pest Control Service'
  },
]

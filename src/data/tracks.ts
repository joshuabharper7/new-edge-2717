import type { Track } from '../types';

export const TRACKS: Track[] = [
  {
    id: 'mens',
    title: "Men's Mentorship Track",
    subtitle: "Sharpening Character & Calling",
    description: "1-on-1 and small group pairing dedicated to building spiritual character, biblical integrity, and life direction for men in Washoe County.",
    audience: "Men seeking spiritual accountability, leadership development, and authentic brotherhood.",
    format: "1-on-1 & Small Group Pairing",
    cadence: "Bi-weekly 45–60 min check-ins + monthly gatherings",
    features: [
      "Targeted 1-on-1 pairing with experienced Christian men",
      "Spiritual accountability & character sharpening",
      "Structured core curriculum focused on biblical manhood",
      "Quarterly brotherhood fellowship events in Reno"
    ],
    image: "/images/mens-track.jpg",
    iconName: "Shield",
    badge: "1-on-1 Pairing"
  },
  {
    id: 'womens',
    title: "Women's Mentorship Track",
    subtitle: "Relational Discipleship & Wisdom",
    description: "Relational discipleship led by experienced Christian women, walking together through life stages, faith development, and intentional community.",
    audience: "Women desiring intentional wisdom, spiritual depth, and life-stage mentorship.",
    format: "Relational 1-on-1 Pairing",
    cadence: "Bi-weekly 45–60 min check-ins + quarterly events",
    features: [
      "Relational 1-on-1 matching with mature women leaders",
      "Navigating life transitions & faith through biblical wisdom",
      "Safe, confidential space for spiritual growth & prayer",
      "Seasonal women's gatherings & fellowship"
    ],
    image: "/images/womens-track.jpg",
    iconName: "HeartHandshake",
    badge: "Relational Pairing"
  },
  {
    id: 'young_adult',
    title: "Young Adult Discipleship",
    subtitle: "Bridging the Post-High-School Gap",
    description: "Addressing the 18+ post-high-school gap with intentional community, weekly gatherings, biblical grounding, and off-site retreats.",
    audience: "Young adults (ages 18–25+) navigating college, early career, and independence.",
    format: "Weekly Small Groups & Mentorship",
    cadence: "Weekly gatherings + bi-weekly 1-on-1 check-ins",
    features: [
      "Bridging the post-high-school faith transition",
      "Weekly community gatherings & biblically grounded study",
      "Personal career, identity & calling mentorship",
      "Annual off-site retreats and community outreach"
    ],
    image: "/images/young-adult-track.jpg",
    iconName: "Compass",
    badge: "18+ Community"
  }
];

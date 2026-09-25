import type { PathwayStep } from '../types';

export const PATHWAY_STEPS: PathwayStep[] = [
  {
    stepNumber: 1,
    title: "Connect",
    tagline: "Low-Friction Intake & Personal Conversation",
    description: "Submit a simple interest intake and meet with a Track Leader for an informal conversation to share your story, goals, and spiritual background.",
    duration: "Week 1–2",
    keyActions: [
      "Submit intake form online or at a partner church",
      "One-on-one conversation with a Track Leader",
      "Goal setting & readiness evaluation"
    ],
    iconName: "UserPlus"
  },
  {
    stepNumber: 2,
    title: "Match",
    tagline: "Intentional Pairing & 6–12 Month Covenant",
    description: "Carefully matched with a compatible mentor or group leader based on personality, life stage, and spiritual trajectory, sealed with a commitment covenant.",
    duration: "Week 3–4",
    keyActions: [
      "Strategic matching by Track Leadership",
      "Initial introductory coffee / alignment meeting",
      "Signing of the 6–12 Month Mentorship Covenant"
    ],
    iconName: "GitMerge"
  },
  {
    stepNumber: 3,
    title: "Sharpen",
    tagline: "Bi-Weekly Check-Ins & Core Curriculum",
    description: "Engage in regular 45–60 minute bi-weekly check-ins. Walk through core discipleship teaching series covering scripture, character, prayer, and calling.",
    duration: "Months 2–12",
    keyActions: [
      "Bi-weekly 45–60 min structured check-ins",
      "Guided study of scripture & core discipleship series",
      "Quarterly cohort gatherings for group iron-sharpening"
    ],
    iconName: "Zap"
  },
  {
    stepNumber: 4,
    title: "Multiply",
    tagline: "Equipped Mentees Become Mentors",
    description: "As the covenant period completes, equipped mentees transition into serving as mentors for the next generation, carrying the pattern forward.",
    duration: "Ongoing",
    keyActions: [
      "End-of-covenant reflection & celebration",
      "Mentor training pathway for graduating mentees",
      "Stepping into 1-on-1 mentorship of others"
    ],
    iconName: "Users"
  }
];

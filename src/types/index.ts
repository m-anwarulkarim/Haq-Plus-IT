export type Language = 'bn' | 'en';

export interface Service {
  id: string;
  iconName: string;
  titleBn: string;
  titleEn: string;
  descriptionBn: string;
  descriptionEn: string;
  featuresBn: string[];
  featuresEn: string[];
  badgeBn?: string;
  badgeEn?: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'enterprise' | 'ecommerce';
  image: string;
  descriptionBn: string;
  descriptionEn: string;
  tags: string[];
  demoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar: string;
  rating: number;
  commentBn: string;
  commentEn: string;
}

export interface FAQItem {
  id: string;
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
}

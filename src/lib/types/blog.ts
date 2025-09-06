import type { ComponentType } from 'svelte';

export interface Post {
  title: string;
  slug: string;
  datePublished: string;
  description: string;
  image: string;
  imageAlt: string;
  content: ComponentType;
} 
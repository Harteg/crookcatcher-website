import type { ComponentType } from 'svelte';

export interface Post {
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  content: ComponentType;
} 
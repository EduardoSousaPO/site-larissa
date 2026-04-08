import type { Tables, TablesInsert, TablesUpdate } from '../types/database';

export type BlogPost = Tables<'blog_posts'>;
export type BlogPostInsert = TablesInsert<'blog_posts'>;
export type BlogPostUpdate = TablesUpdate<'blog_posts'>;
export type BlogCategory = BlogPost['category'];
export type BlogStatus = BlogPost['status'];

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  logoterapia: 'Logoterapia',
  ansiedade: 'Ansiedade',
  depressao: 'Depressao',
  proposito: 'Proposito',
  vocacional: 'Vocacional',
  geral: 'Geral',
};

export const BLOG_CATEGORY_OPTIONS = Object.entries(BLOG_CATEGORY_LABELS).map(([value, label]) => ({
  value: value as BlogCategory,
  label,
}));

export function formatCategoryLabel(category: BlogCategory) {
  return BLOG_CATEGORY_LABELS[category];
}

export function calculateReadingTime(content: string) {
  const plainText = stripHtml(content).trim();
  const words = plainText ? plainText.split(/\s+/).length : 0;

  return Math.max(1, Math.ceil(words / 200));
}

export function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

export function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
}

export function parseTags(value: string) {
  return value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export function ensureSummaryLength(value: string, maxLength = 155) {
  const normalized = value.trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}

export function getPublishedAt(status: BlogStatus, previousPublishedAt?: string | null) {
  if (status === 'published') {
    return previousPublishedAt ?? new Date().toISOString();
  }

  return null;
}

export function buildArticlePath(slug: string) {
  return `/blog/${slug}`;
}

import { supabase } from './supabase';
import type { BlogPost, BlogPostInsert, BlogPostUpdate } from '../lib/blog';
import { slugify } from '../lib/blog';

export async function getPublishedBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false, nullsFirst: false });

  if (error) {
    throw error;
  }

  return data satisfies BlogPost[];
}

export async function getPublishedBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as BlogPost | null;
}

export async function getBlogPostsForAdmin() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data satisfies BlogPost[];
}

export async function getRelatedBlogPosts(category: BlogPost['category'], currentId: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .eq('category', category)
    .neq('id', currentId)
    .order('published_at', { ascending: false, nullsFirst: false })
    .limit(3);

  if (error) {
    throw error;
  }

  return data satisfies BlogPost[];
}

export async function createBlogPost(payload: BlogPostInsert) {
  const { data, error } = await supabase.from('blog_posts').insert(payload).select().single();

  if (error) {
    throw error;
  }

  return data as BlogPost;
}

export async function updateBlogPost(id: string, payload: BlogPostUpdate) {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(payload)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as BlogPost;
}

export async function deleteBlogPost(id: string) {
  const { error } = await supabase.from('blog_posts').delete().eq('id', id);

  if (error) {
    throw error;
  }
}

export async function ensureUniqueSlug(title: string, currentId?: string) {
  const baseSlug = slugify(title);
  let candidate = baseSlug;
  let counter = 1;

  while (true) {
    let query = supabase.from('blog_posts').select('id').eq('slug', candidate).limit(1);

    if (currentId) {
      query = query.neq('id', currentId);
    }

    const { data, error } = await query.maybeSingle();

    if (error) {
      throw error;
    }

    if (!data) {
      return candidate;
    }

    counter += 1;
    candidate = `${baseSlug}-${counter}`;
  }
}

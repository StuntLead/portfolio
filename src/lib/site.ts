/**
 * Centralized site configuration.
 * 
 * IMPORTANT: The production domain is currently unknown.
 * Do not fabricate a production URL (e.g. example.com or localhost) for public metadata.
 * Sitemaps, JSON-LD, and Canonical URLs will selectively disable or throw if this is missing.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? null;

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

Personal website at [beforeitwasround.com](https://beforeitwasround.com), built with Jekyll and hosted on GitHub Pages.

## Setup

```sh
script/bootstrap
```

Requires: npm, bower, gulp, bundler, phantomjs.

## Common Commands

| Task | Command |
|------|---------|
| Run local server | `script/server` |
| Build site | `bundle exec jekyll build` |
| Check domain health | `script/check` |

The local server uses both `_config.yml` and `_config_local.yml` (sets `url: http://localhost:4000`), serves drafts, and uses incremental regeneration.

## Content Workflow

**Create a draft:**
```sh
script/draft "Post Title Here"
# Creates _drafts/<slug>.md
```

**Publish a draft:**
```sh
script/publish _drafts/<slug>.md
# Moves to _posts/YYYY-MM-DD-<slug>.md
```

Post front matter uses `layout: post` with `published: true` and a `categories` list.

## Architecture

- **`_layouts/`** — Liquid templates; `default.html` is the base, `post.html` and `page.html` extend it, `error.html` is for 404.
- **`_includes/sidebar.html`** — Sidebar nav auto-populates from pages with `layout: page`.
- **`_posts/`** — Blog posts in Markdown, named `YYYY-MM-DD-slug.md`.
- **`_drafts/`** — Unpublished drafts (excluded from build, visible with `--drafts` flag).
- **`src/scss/`** — Source SCSS; processed externally (not via Jekyll's built-in Sass). `core/` has custom styles; `vendor/` has Poole/Hyde theme files.
- **`_config.yml`** — Production config. Permalink format: `/:year/:month/:title.html`.

Active Jekyll plugins: `jekyll-sitemap`, `jekyll-feed` (outputs `atom.xml`), `jekyll-redirect-from`, `jekyll-seo-tag`.

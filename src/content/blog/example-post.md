---
title: "How to write a post"
description: "A template you can copy. Delete this file once you have written your first real post."
date: 2026-08-17
tags: ["meta"]
draft: true
---

This file is a template, not a published post. It has `draft: true` in the block above,
so it never appears on the site. To publish something:

1. Copy this file to `src/content/blog/my-new-post.md`. The filename becomes the URL:
   `my-new-post.md` → `marcosanchioni.com/blog/my-new-post`.
2. Edit the block at the top — `title`, `description`, `date`, `tags`.
3. Delete the line `draft: true`.
4. Commit and push. The site rebuilds and publishes itself in about a minute.

The `description` is what appears in the blog index, in the RSS feed, and in the preview
card when someone shares the link. Write it as a real sentence, not a keyword list.

## Headings

Second-level headings (`##`) appear in the table of contents, which shows up automatically
once a post has more than two of them. Third-level headings (`###`) do not.

## What you can write

Ordinary Markdown: *emphasis*, **bold**, [links](https://www.marcosanchioni.com),
lists, and block quotes.

> A quotation, set off from the body text.

Footnotes, code blocks, and images all work. For images, put the file in
`public/assets/` and reference it as `![Caption](/assets/filename.jpg)`.

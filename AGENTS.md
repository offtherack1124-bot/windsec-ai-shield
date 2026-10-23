<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep Products and Documentation as separate TanStack leaf routes, with shared navigation and footer in `src/components/site.tsx`, so each page has a stable URL and its own metadata.
- Use the uploaded bird asset pointer for site imagery and a downscaled raster in `public/` for the favicon, because browser icons must be served as actual files.
- Render site bird artwork through `RoeBird` using the original asset as a CSS mask and semantic current-color tokens, so its silhouette stays exact while its contrast follows the surrounding section.

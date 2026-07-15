# gloo-ds

Gloo's design system source, built on [shadcn/ui](https://ui.shadcn.com) with the Gloo brand theme. Gloo's registry binds to the components in this repo via code_refs.

## Structure

- `src/components/ui/` — all shadcn/ui components (radix base)
- `src/index.css` — global stylesheet: Tailwind v4 + Gloo theme variables (`:root` light, `.dark` dark)
- `gloo-theme.css` — the standalone brand theme source
- `src/App.tsx` — component sampler for visual verification

## Development

```sh
npm install
npm run dev    # sampler at http://localhost:5173
npm run build
```

Add or update components with `npx shadcn@latest add <name>` — config lives in `components.json`.

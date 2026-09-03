Sponsors live here, one markdown file each. `_`-prefixed files (like this one)
are skipped, which is also what keeps this folder in git while it's empty.

    ---
    name: Acme AB
    order: 1
    # logo: /sponsors/acme.svg
    # url: https://acme.example
    # background: dark
    ---

Create one with:

    npm run new:sponsor -- "Acme AB" 1

Only `name` and `order` are required. Logos go in public/sponsors/. Tiles are a
light chip by default, since most brands publish a dark mark; set
`background: dark` for a brand that only has a white one. Without a logo the
sponsor's name is shown as text instead.

With no sponsor files at all the section falls back to the dashed placeholder
rail, so it never renders empty.

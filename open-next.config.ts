import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default {
  // The homepage sets `revalidate = 3600` so the upcoming/past event split
  // isn't frozen at build time. That needs somewhere to keep the regenerated
  // page, or every isolate re-renders it on its own — hence the R2 bucket.
  ...defineCloudflareConfig({ incrementalCache: r2IncrementalCache }),

  // OpenNext shells out to `npm run build` by default, and that script is this
  // adapter — so it has to be pointed at Next directly or it recurses forever.
  // This is what lets Cloudflare's stock `npm run build` produce the worker.
  buildCommand: "npx next build",
};

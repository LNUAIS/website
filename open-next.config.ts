import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";

export default {
  // The homepage sets `revalidate = 3600` so the upcoming/past event split
  // isn't frozen at build time. The regenerated page needs somewhere to live,
  // and the adapter's default cache is a no-op. Workers KV rather than R2:
  // same job here, and R2 has to be enabled on the account first.
  ...defineCloudflareConfig({ incrementalCache: kvIncrementalCache }),

  // OpenNext shells out to `npm run build` by default, and that script is this
  // adapter — so it has to be pointed at Next directly or it recurses forever.
  // This is what lets Cloudflare's stock `npm run build` produce the worker.
  buildCommand: "npx next build",
};

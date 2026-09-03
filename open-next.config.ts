import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

// The homepage sets `revalidate = 3600` so the upcoming/past event split isn't
// frozen at build time. That needs somewhere to keep the regenerated page, or
// every isolate re-renders it on its own — hence the R2 bucket.
export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
});

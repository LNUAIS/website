import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Revalidation re-renders on the server, and the file tracer resolves paths
  // statically — it can't see readdirSync(join(process.cwd(), ...)), so the
  // event markdown has to be named explicitly or it's missing at runtime.
  outputFileTracingIncludes: {
    "/": ["./src/content/events/**"],
  },
};

export default nextConfig;

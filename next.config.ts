import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Revalidation re-renders on the server, and the file tracer resolves paths
  // statically — it can't see readdirSync(join(process.cwd(), ...)), so every
  // content collection has to be named or it goes missing at runtime.
  outputFileTracingIncludes: {
    "/": ["./src/content/**"],
  },
};

export default nextConfig;

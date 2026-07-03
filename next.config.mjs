/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    loadPaths: ["./node_modules/@uswds/uswds/packages"],
    additionalData: `@use "@/styles/forward-uswds.scss" as *;`,
    quietDeps: true,
  },
};

export default nextConfig;

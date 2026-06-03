import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting...",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta httpEquiv="refresh" content="0; url=/zh" />
      </head>
      <body>{children}</body>
    </html>
  );
}

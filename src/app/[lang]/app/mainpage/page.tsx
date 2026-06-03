import { getDictionary, Locale } from "@/dictionaries";
import AppMainpageClient from "./AppMainpageClient";

export default async function AppMainpagePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <AppMainpageClient dict={dict} lang={lang} />;
}

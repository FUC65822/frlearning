import { getDictionary, Locale } from "@/dictionaries";
import AppMainpageClient from "../mainpage/AppMainpageClient";

export default async function AppHelpPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <AppMainpageClient dict={dict} lang={lang} />;
}

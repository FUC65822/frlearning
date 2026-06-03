import { getDictionary, Locale } from "@/dictionaries";
import MagasinClient from "./MagasinClient";

export default async function MagasinPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <MagasinClient dict={dict} lang={lang} />;
}

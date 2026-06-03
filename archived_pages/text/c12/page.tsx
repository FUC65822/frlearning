import { getDictionary, Locale } from "@/dictionaries";
import TextC12Client from "./TextC12Client";

export default async function TextC12Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <TextC12Client dict={dict} lang={lang} />;
}

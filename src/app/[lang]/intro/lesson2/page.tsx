import { getDictionary } from "@/dictionaries";
import Lesson2Client from "./Lesson2Client";

export default async function Lesson2Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  return <Lesson2Client dict={dict} lang={lang} />;
}

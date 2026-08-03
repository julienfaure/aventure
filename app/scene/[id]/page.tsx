import { notFound } from "next/navigation";
import Passage from "@/components/Passage";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ScenePage({ params }: Props) {
  const { id } = await params;

  let passage;

  try {
    passage = (
      await import(`@/contenus/passages/chapitre-1/${id}`)
    ).default;
  } catch {
    notFound();
  }

  return <Passage passage={passage} />;
}
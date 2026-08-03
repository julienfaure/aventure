import { notFound } from "next/navigation";

import Passage from "@/components/Passage";

import scene1 from "@/contenus/passages/chapitre-1/scene-1";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ScenePage({ params }: Props) {
  const { id } = await params;

  switch (id) {
    case "scene-1":
      return <Passage passage={scene1} />;

    default:
      notFound();
  }
}
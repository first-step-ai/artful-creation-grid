import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

export type StackCard = {
  id: string | number;
  content: React.ReactNode;
};

type Props = {
  cards: StackCard[];
  cardDimensions?: { width: number; height: number };
  sensitivity?: number;
  randomRotation?: boolean;
  sendToBackOnClick?: boolean;
  className?: string;
};

export function CardStack({
  cards: initialCards,
  cardDimensions = { width: 520, height: 640 },
  sensitivity = 180,
  randomRotation = true,
  sendToBackOnClick = true,
  className,
}: Props) {
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    setCards(initialCards);
  }, [initialCards]);

  const rotations = useMemo(
    () =>
      initialCards.map(() =>
        randomRotation ? Math.random() * 6 - 3 : 0,
      ),
    [initialCards, randomRotation],
  );

  const sendToBack = (id: StackCard["id"]) => {
    setCards((prev) => {
      const next = [...prev];
      const idx = next.findIndex((c) => c.id === id);
      if (idx === -1) return prev;
      const [card] = next.splice(idx, 1);
      next.unshift(card);
      return next;
    });
  };

  const bringToFront = (id: StackCard["id"]) => {
    setCards((prev) => {
      const next = [...prev];
      const idx = next.findIndex((c) => c.id === id);
      if (idx === -1) return prev;
      const [card] = next.splice(idx, 1);
      next.push(card);
      return next;
    });
  };

  return (
    <div
      className={`relative select-none ${className ?? ""}`}
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const isTop = index === cards.length - 1;
        const offset = cards.length - 1 - index;
        return (
          <motion.div
            key={card.id}
            className="absolute inset-0"
            style={{ transformOrigin: "90% 90%", zIndex: index }}
            animate={{
              rotateZ: (cards.length - index - 1) * 3 + rotations[index % rotations.length],
              scale: 1 + 0.04 * index - cards.length * 0.04,
              y: offset * -6,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <motion.div
              className="h-full w-full cursor-grab active:cursor-grabbing rounded-md overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] bg-burgundy"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.6}
              dragSnapToOrigin
              onDragStart={() => {
                if (!isTop) bringToFront(card.id);
              }}
              onDragEnd={(_, info) => {
                if (
                  isTop &&
                  (Math.abs(info.offset.x) > sensitivity ||
                    Math.abs(info.offset.y) > sensitivity)
                ) {
                  sendToBack(card.id);
                }
              }}
              onClickCapture={(e) => {
                if (!isTop) {
                  e.preventDefault();
                  e.stopPropagation();
                  bringToFront(card.id);
                } else if (sendToBackOnClick) {
                  sendToBack(card.id);
                }
              }}
            >
              {card.content}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

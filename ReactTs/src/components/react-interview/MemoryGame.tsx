import { useState } from "react"
export const shuffleArray = (array: string[]) => {
  const shuffled = [...array] // Create a copy to avoid mutating the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]] // Swap elements
  }
  return shuffled
}
// card interface
interface Card {
  id: number
  imageUrl: string
  isFlipped: boolean
  isMatched: boolean
}

const MemoryGame = ({ images }: { images: string[] }) => {
  const [cards, setCards] = useState<Card[]>(() => {
    const duplicateImages = [...images, ...images]
    const suffledImages = shuffleArray(duplicateImages)
    return suffledImages.map((image, index) => ({
      id: index,
      imageUrl: image,
      isFlipped: false,
      isMatched: false,
    }))
  })

  // check if their imageUrls are same
  // loop through cards and find the given card1 or card2
  // once found check if imageUrl are matched then set isMatched to true
  // if imageUrl is not matched then set flipped to false

  const handleMatchedCard = (card1: Card, card2: Card) => {
    const isMatch = card1.imageUrl === card2.imageUrl
    setCards((prev) => {
      const newCards = prev.map((pc) => {
        if (pc.id === card1.id || pc.id === card2.id) {
          if (isMatch) {
            pc.isMatched = true
          } else {
            pc.isFlipped = false
          }
        }
        return pc
      })
      return newCards
    })
  }

  //   loop through array anc check for the given card and flip the card
  // also check if there are 2 flipped cards, which is unmatched
  // if there are 2 flipped unmatched cards send them to check for match: handleMatchCard

  const handleCardFlip = (card: Card) => {
    if (card.isFlipped || card.isMatched) return
    const updatedCard = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    )

    setCards(updatedCard)

    const flippedCards = cards.filter(
      (card) => card.isFlipped && !card.isMatched
    )

    if (flippedCards.length === 2) {
      handleMatchedCard(flippedCards[0], flippedCards[1])
    }
  }

  return (
    <div>
      <h1>Memory Game</h1>
      <p>Build your memory game! </p>
      <p>Here are the sample images:</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          borderRadius: "16px",
        }}
      >
        {cards.map((card) => (
          <div
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid black",
              backgroundColor: "#3f3f3f00",
              borderRadius: "16px",
            }}
            onClick={() => handleCardFlip(card)}
          >
            {(card.isFlipped || card.isMatched) && (
              <img
                key={card.imageUrl}
                src={card.imageUrl}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "16px",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MemoryGame

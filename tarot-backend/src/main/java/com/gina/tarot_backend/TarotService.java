package com.gina.tarot_backend;

import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class TarotService {

    private List<TarotCard> cards = List.of(
        new TarotCard(
            "The Fool",
            "New beginnings, spontaneity, adventure"
        ),
        new TarotCard(
            "The Magician",
            "Manifestation, skill, confidence, personal power"
        ),
        new TarotCard(
            "The High Priestess",
            "Intuition, mystery, inner wisdom, subconscious knowledge"
        ),
        new TarotCard(
            "The Empress",
            "Abundance, nurturing, creativity, fertility"
        ),
        new TarotCard(
            "The Emperor",
            "Structure, authority, stability, leadership"
        ),
        new TarotCard(
            "The Hierophant",
            "Tradition, spiritual guidance, conformity, learning"
        ),
        new TarotCard(
            "The Lovers", 
            "Relationships, harmony, choices, alignment"
        ),
        new TarotCard(
            "The Chariot",
            "Determination, control, willpower, victory"
        ),
        new TarotCard(
            "Strength", 
            "Courage, compassion, resilience, inner strength"
        ),
        new TarotCard(
            "The Hermit", 
            "Introspection, solitude, wisdom, self-discovery"
        ),
        new TarotCard(
            "Wheel of Fortune", 
            "Change, cycles, fate, turning points"
        ),
        new TarotCard(
            "Justice",
            "Fairness, truth, accountability, balance"
        ),
        new TarotCard(
            "The Hanged Man",
            "Surrender, perspective, pause, letting go"
        ),
         new TarotCard(
            "Death",
            "Transformation, endings, transition, rebirth"
        ),
         new TarotCard(
            "Temperance",
            "Balance, moderation, patience, harmony"
        ),
         new TarotCard(
            "The Devil",
            "Attachment, temptation, materialism, restriction"
        ),
        new TarotCard(
            "The Tower", 
            "Sudden change, upheaval, revelation"
        ),
        new TarotCard(
            "The Star", 
            "Hope, inspiration, renewal"
        ),
         new TarotCard(
            "The Moon",
            "Illusion, uncertainty, intuition, hidden truths"
        ),
         new TarotCard(
            "The Sun",
            "Joy, success, vitality, positivity"
        ),
         new TarotCard(
            "Judgment",
            "Reflection, awakening, reckoning, renewal"
        ),
         new TarotCard(
            "The World",
            "Completion, fulfillment, achievement, wholeness"
        )
    );

    public TarotCard drawCard() {
        Random random = new Random();
        int index = random.nextInt(cards.size());
        return cards.get(index);
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarotDeck {
  
  deck: { 
    name: string;
    image: string;
    uprightMeaning: string; 
    reversedMeaning: string;
   }[] = [];

  createDeck() {
    this.deck = [
      { 
        name: 'the fool',
        image: ,
        uprightMeaning: 'new beginnings, innocence, spontaneity, adventure, taking a leap of faith',
        reversedMeaning: 'recklessness, naivety, poor judgment, hesitation, fear of the unknown'
      },
      {
        name: 'the magician',
        image: ,
        uprightMeaning: 'manifestation, confidence, power, skill, inspired, action',
        reversedMeaning: 'manipulation, illusion, deception, misuse of power, lack of direction'
      },
      {
        name: 'the high priestess',
        image: ,
        uprightMeaning: 'intuition, mystery, inner wisdom, spiritual insight, subconscious mind',
        reversedMeaning: 'hidden motives, blocked intuition, confusion, secrets, disconnection'
      },
      {
        name: 'the empress',
        image: ,
        uprightMeaning: 'abundance, creativity, nurturing, beauty, fertility, compassion',
        reversedMeaning: 'dependence, creative block, smothering, insecurity, lack of self-care'
      },
      {
        name: 'the emperor',
        image: ,
        uprightMeaning: 'authority, structure, stability, leadership, discipline',
        reversedMeaning: 'control issues, rigidity, domination, stubbornness, instability'
      },
      {
        name: 'the hierophant',
        image: ,
        uprightMeaning: 'tradition, spiritual wisdom, guidance, conformity, leaning',
        reversedMeaning: 'rebellion, unconventional beliefs, restriction, challenging traditions'
      },
      {
        name: 'the lovers',
        image: ,
        uprightMeaning: 'love, harmony, relationships, alignment, important choices',
        reversedMeaning: 'imbalance, separation, miscommunication, conflict, indecision'
      },
      {
        name: 'the chariot',
        image: ,
        uprightMeaning: 'determination, victory, willpower, ambition, self-control',
        reversedMeaning: ' lack of direction, aggression, obstacles, loss of control'
      },
      {
        name: 'strength',
        image: ,
        uprightMeaning: 'courage, patience, compassion, inner strength, resilience',
        reversedMeaning: 'insecurity, self-doubt, weakness, fear, emotional imbalance'
      },
      {
        name: 'the hermit',
        image: ,
        uprightMeaning: 'introspection, solitude, wisdom, guidance, self-discovery',
        reversedMeaning: 'isolation, loneliness, withdrawal, avoidance, feeling lost'
      },
      {
        name: 'wheel of fortune',
        image: ,
        uprightMeaning: 'luck, destiny, change, cycles, opportunity',
        reversedMeaning: 'bad luck, setbacks, resistance to change, lack of control'
      },
      {
        name: 'justice',
        image: ,
        uprightMeaning: 'fairness, truth, accountability, balance, integrity',
        reversedMeaning: 'dishonesty, unfairness, avoidance of responsibility, imbalance'
      },
      {
        name: 'the hanged man',
        image: ,
        uprightMeaning: 'surrender, perspective, pause, letting go, sacrifice',
        reversedMeaning: 'stalling, indecision, resistance, fear of change'
      },
      {
        name: 'death',
        image: ,
        uprightMeaning: 'transformation, endings, rebirth, transition, release',
        reversedMeaning: 'resistance to change, stagnation, fear of endings'
      },
      {
        name: 'temperance',
        image: ,
        uprightMeaning: 'balance, moderation, harmony, patience, healing',
        reversedMeaning: 'excess, imbalance, conflict, lack of moderation'
      },
      {
        name: 'the devil',
        image: ,
        uprightMeaning: 'temptation, addiction, attachment, materialism, unhealthy patterns',
        reversedMeaning: 'release, freedom, recovery, breaking negative cycles'
      },
      {
        name: 'the tower',
        image: ,
        uprightMeaning: 'upheaval, sudden change, revelation, destruction, awakening',
        reversedMeaning: 'fear of change, avoidance, delayed disaster, denial'
      },
      {
        name: 'the star',
        image: ,
        uprightMeaning: 'hope, inspiration, healing, renewal, faith',
        reversedMeaning: 'despair, insecurity, discouragement, lack of faith'
      },
      {
        name: 'the moon',
        image: ,
        uprightMeaning: 'intuition, illusion, dreams, uncertainty, subconscious fears',
        reversedMeaning: 'confusion lifting, clarity, truth revealed, overcoming fear'
      },
      {
        name: 'the sun',
        image: ,
        uprightMeaning: 'joy, success, positivity, vitality, confidence',
        reversedMeaning: 'temporary sadness, lack of enthusiasm, delays, self-doubt'
      },
      {
        name: 'judgement',
        image: ,
        uprightMeaning: 'awakening, reflection, reckoning, renewal, self-evaluation',
        reversedMeaning: 'self-doubt, avoidance, denial, refusing accountability'
      },
      {
        name: 'the world',
        image: ,
        uprightMeaning: 'completion, accomplishment, fulfillment, travel, success',
        reversedMeaning: 'unfinished business, delays, lack of closure, stagnation'
      },
      {
        name: 'ace of wands',
        image: ,
        uprightMeaning: 'inspiration, passion, creativity, new opportunities',
        reversedMeaning: 'delays, lack of energy, creative blocks'
      },
      {
        name: 'two of wands',
        image: ,
        uprightMeaning: 'planning, progress, discovery, future decisions',
        reversedMeaning: 'fear of change, poor planning, indecision'
      },
      {
        name: 'three of wands',
        image: ,
        uprightMeaning: 'expansion, foresight, growth, opportunities',
        reversedMeaning: 'obstacles, delays, frustration, setbacks'
      },
      {
        name: 'four of wands',
        image: ,
        uprightMeaning: 'celebration, harmony, homecoming, community',
        reversedMeaning: 'instability, tension, lack of support'
      },
      {
        name: 'five of wands',
        image: ,
        uprightMeaning: 'competition, conflict, disagreements, tension',
        reversedMeaning: 'compromise, resolution, avoiding conflict'
      },
      {
        name: 'six of wands',
        image: ,
        uprightMeaning: 'victory, recognition, confidence, achievement',
        reversedMeaning: 'arrogance, self-doubt, lack of recognition'
      },
      {
        name: 'seven of wands',
        image: ,
        uprightMeaning: 'perseverance, defense, determination, courage',
        reversedMeaning: 'exhaustion, giving up, feeling overwhelmed'
      },
      {
        name: 'eight of wands',
        image: ,
        uprightMeaning: 'momentum, fast movement, communication, progress',
        reversedMeaning: 'delays, confusion, frustration, miscommunication'
      },
      {
        name: 'nine of wands',
        image: ,
        uprightMeaning: 'resilience, persistence, boundaries, determination',
        reversedMeaning: 'fatigue, paranoia, burnout, defensiveness'
      },
      {
        name: 'ten of wands',
        image: ,
        uprightMeaning: 'burden, responsibility, stress, hard work',
        reversedMeaning: 'release, delegation, burnout, overwhelm'
      },
      { 
        name: 'page of wands',
        image: ,
        uprightMeaning: 'enthusiasm, discovery, creativity, excitement',
        reversedMeaning: 'setbacks, lack of direction, immaturity'
      },
      { 
        name: 'knight of wands',
        image: ,
        uprightMeaning: 'passion, adventure, confidence, impulsiveness',
        reversedMeaning: 'recklessness, impatience, anger, instability'
      },
      {
        name: 'queen of wands',
        image: ,
        uprightMeaning: 'confidence, independence, charisma, determination',
        reversedMeaning: 'jealousy, insecurity, selfishness, moodiness'
      },
      {
        name: 'king of wands',
        image: ,
        uprightMeaning: 'leadership, vision, ambition, boldness',
        reversedMeaning: 'arrogance, impulsiveness, domineering behavior'
      },
      { 
        name: 'ace of cups',
        image: ,
        uprightMeaning: 'emotional fulfillment, love, compassion, new relationships',
        reversedMeaning: 'emotional blockage, emptiness, repressed feelings'
      },
      { 
        name: 'two of cups',
        image: ,
        uprightMeaning: 'partnership, unity, attraction, mutual respect',
        reversedMeaning: 'imbalance, conflict, separation, tension'
      },
      { 
        name: 'three of cups',
        image: ,
        uprightMeaning: 'celebration, friendship, community, joy',
        reversedMeaning: 'gossip, overindulgence, isolation, conflict in friendships'
      },
      { 
        name: 'four of cups',
        image: ,
        uprightMeaning: 'contemplation, apathy, reevaluation, emotional withdrawal',
        reversedMeaning: 'renewed interest, awareness, acceptance, motivation'
      },
      { 
        name: 'five of cups',
        image: ,
        uprightMeaning: 'grief, regret, disappointment, sadness',
        reversedMeaning: 'acceptance, healing, moving on, forgiveness'
      },
      { 
        name: 'six of cups',
        image: ,
        uprightMeaning: 'nostalgia, childhood memories, innocence, reunion',
        reversedMeaning: 'being stuck in the past, immaturity, unrealistic thinking'
      },
      { 
        name: 'seven of cups',
        image: ,
        uprightMeaning: 'choices, imagination, illusion, opportunities',
        reversedMeaning: 'clarity, focus, realistic thinking, decisiveness'
      },
      { 
        name: 'eight of cups',
        image: ,
        uprightMeaning: 'walking away, emotional growth, searching for meaning',
        reversedMeaning: 'avoidance, fear of change, stagnation'
      },
      { 
        name: 'nine of cups',
        image: ,
        uprightMeaning: 'satisfaction, wishes fulfilled, pleasure, abundance',
        reversedMeaning: 'dissatisfaction, greed, superficial happiness'
      },
      { 
        name: 'ten of cups',
        image: ,
        uprightMeaning: 'emotional harmony, happiness, family fulfillment, peace',
        reversedMeaning: 'broken relationships, conflict, unrealistic expectations'
      },
      { 
        name: 'page of cups',
        image: ,
        uprightMeaning: 'creativity, emotional messages, intuition, curiosity',
        reversedMeaning: 'emotional immaturity, insecurity, blocked creativity'
      },
      { 
        name: 'knight of cups',
        image: ,
        uprightMeaning: 'romance, charm, idealism, emotional pursuit',
        reversedMeaning: 'moodiness, manipulation, unrealistic expectations'
      },
      { 
        name: 'queen of cups',
        image: ,
        uprightMeaning: 'compassion, intuition, emotional security, empathy',
        reversedMeaning: 'emotional overwhelm, dependence, insecurity'
      },
      { 
        name: 'king of cups',
        image: ,
        uprightMeaning: 'emotional balance, wisdom, diplomacy, calmness',
        reversedMeaning: 'manipulation, emotional suppression, volatility'
      },
      { 
        name: 'ace of swords',
        image: ,
        uprightMeaning: 'clarity, truth, breakthroughs, mental focus',
        reversedMeaning: 'confusion, misinformation, lack of clarity'
      },
      { 
        name: 'two of swords',
        image: ,
        uprightMeaning: 'difficult choices, stalemate, indecision, balance',
        reversedMeaning: 'confusion, emotional overwhelm, avoidance'
      },
      { 
        name: 'three of swords',
        image: ,
        uprightMeaning: 'heartbreak, grief, sorrow, emotional pain',
        reversedMeaning: ' healing, forgiveness, recovery, releasing pain'
      },
      { 
        name: 'four of swords',
        image: ,
        uprightMeaning: 'rest, recovery, contemplation, healing',
        reversedMeaning: 'burnout, restlessness, stress, exhaustion'
      },
      { 
        name: 'five of swords',
        image: ,
        uprightMeaning: 'conflict, tension, defeat, selfishness',
        reversedMeaning: 'reconciliation, compromise, resolution'
      },
      { 
        name: 'six of swords',
        image: ,
        uprightMeaning: 'transition, moving on, healing, progress',
        reversedMeaning: 'emotional baggage, resistance, unfinished issues'
      },
      { 
        name: 'seven of swords',
        image: ,
        uprightMeaning: 'deception, strategy, secrecy, dishonesty',
        reversedMeaning: 'confession, truth revealed, accountability'
      },
      { 
        name: 'eight of swords',
        image: ,
        uprightMeaning: 'restriction, fear, self-doubt, feeling trapped',
        reversedMeaning: 'freedom, empowerment, overcoming fear'
      },
      { 
        name: 'nine of swords',
        image: ,
        uprightMeaning: 'anxiety, worry, nightmares, stress',
        reversedMeaning: 'recovery, hope, overcoming fear, relief'
      },
      { 
        name: 'ten of swords',
        image: ,
        uprightMeaning: 'painful endings, betrayal, collapse, defeat',
        reversedMeaning: 'recovery, resilience, renewal, survival'
      },
      { 
        name: 'page of swords',
        image: ,
        uprightMeaning: 'curiosity, ideas, vigilance, communication',
        reversedMeaning: 'gossip, impulsiveness, deceit, immaturity'
      },
      { 
        name: 'knight of swords',
        image: ,
        uprightMeaning: 'ambition, action, determination, speed',
        reversedMeaning: 'recklessness, aggression, impulsiveness'
      },
      { 
        name: 'queen of swords',
        image: ,
        uprightMeaning: 'independence, honesty, wisdom, clear boundaries',
        reversedMeaning: 'bitterness, coldness, harsh judgment'
      },
      { 
        name: 'king of swords',
        image: ,
        uprightMeaning: 'authority, logic, truth, discipline, intellect',
        reversedMeaning: 'manipulation, abuse of power, coldness'
      },
      { 
        name: 'ace of pentacles',
        image: ,
        uprightMeaning: 'prosperity, opportunity, stability, financial beginnings',
        reversedMeaning: 'missed opportunities, financial instability, delays'
      },
      { 
        name: 'two of pentacles',
        image: ,
        uprightMeaning: 'balance, adaptability, multitasking, flexibility',
        reversedMeaning: 'overwhelm, imbalance, disorganization, stress'
      },
      { 
        name: 'three of pentacles',
        image: ,
        uprightMeaning: 'teamwork, collaboration, skill-building, learning',
        reversedMeaning: 'poor teamwork, conflict, lack of effort'
      },
      { 
        name: 'four of pentacles',
        image: ,
        uprightMeaning: 'security, saving money, control, stability',
        reversedMeaning: 'greed, possessiveness, financial insecurity'
      },
      { 
        name: 'five of pentacles',
        image: ,
        uprightMeaning: 'hardship, struggle, insecurity, financial loss',
        reversedMeaning: 'recovery, support, hope, improvement'
      },
      { 
        name: 'six of pentacles',
        image: ,
        uprightMeaning: 'generosity, charity, sharing, support',
        reversedMeaning: 'inequality, strings attached, imbalance, debt'
      },
      { 
        name: 'seven of pentacles',
        image: ,
        uprightMeaning: 'patience, long-term growth, perseverance, investment',
        reversedMeaning: 'impatience, wasted effort, lack of reward'
      },
      { 
        name: 'eight of pentacles',
        image: ,
        uprightMeaning: 'diligence, craftsmanship, mastery, hard work',
        reversedMeaning: 'perfectionism, boredom, lack of focus, low effort'
      },
      { 
        name: 'nine of pentacles',
        image: ,
        uprightMeaning: 'independence, luxury, self-sufficiency, confidence',
        reversedMeaning: ' dependence, overspending, insecurity'
      },
      { 
        name: 'ten of pentacles',
        image: ,
        uprightMeaning: 'wealth, family legacy, long-term success, stability',
        reversedMeaning: 'financial conflict, instability, family disputes'
      },
      { 
        name: 'page of pentacles',
        image: ,
        uprightMeaning: 'ambition, learning, new opportunities, discipline',
        reversedMeaning: 'procrastination, lack of focus, missed chances'
      },
      { 
        name: 'knight of pentacles',
        image: ,
        uprightMeaning: 'reliability, persistence, routine, responsibility',
        reversedMeaning: 'stubbornness, laziness, boredom, lack of motivation'
      },
      { 
        name: 'queen of pentacles',
        image: ,
        uprightMeaning: 'nurturing, practicality, abundance, security',
        reversedMeaning: 'work-life imbalance, insecurity, overprotectiveness'
      },
      { 
        name: 'king of pentacles',
        image: ,
        uprightMeaning: 'success, wealth, leadership, stability, discipline',
        reversedMeaning: 'greed, stubbornness, materialism, misuse of power'
      }
    ];
  }

  shuffle() {
    for (let i = this.deck.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  cutDeck() {
    const mid = Math.floor(this.deck.length / 2);
    this.deck = [
      ...this.deck.slice(mid),
      ...this.deck.slice(0, mid)
    ]
  }

  drawCards(amount: number) {
    const drawn = [];

    for (let i = 0; i < amount; i++) {
      const card = this.deck.splice(0, 1)[0];

      drawn.push({
        ...card,
        reversed: Math.random() < 0.5
      });
    }

    return drawn;
  }
}

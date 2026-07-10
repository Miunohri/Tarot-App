# Tarot App
An interactive tarot reading application built with Angular and TypeScript. Users can select a tarot spread, ask a question, shuffle and cut the deck, draw cards, and receive an interactive reading with upright and reversed card interpretations.

## Features

### Current Features
- Select from multiple tarot spreads:
  - Single card
  - Three card
  - Five card
  - Celtic Cross
  - Horseshoe
  - Mandala
  - Tree of Life
- Enter a question or intention before a reading
- Shuffle and cut the tarot deck
- Draw cards based on the selected spread
- Randomly assign upright or reversed card orientations
- Display tarot cards with corresponding interpretations
- Track reading progress through application state

## Technologies Used

### Frontend
- Angular
- TypeScript
- HTML
- CSS

### Backend (In Development)
- Java
- Spring Boot

## Project Structure
tarot-app/
│
├── tarot-frontend/ # Angular frontend application
│ ├── src/
│ │ ├── app/
| |  ├── home/ # Home page
│ │  ├── spread/ # Tarot spread selection
│ │  ├── question/ # User question input
│ │  ├── shuffle/ # Deck shuffling, cutting, and card drawing
│ │  ├── reading/ # Display drawn cards and interpretations
│ │  ├── tarot-deck/ # Tarot card data and deck logic
│ │  └── tarot-state/ # Shared application state management
│ │
│ └── package.json
│
├── tarot-backend/ # Spring Boot backend application
│ ├── src/
│ │ ├── main/
│ │  ├── java/ # Controllers, services, and models
│ │  
│ └── pom.xml
│
└── README.md

## How It Works
1. The user selects a tarot spread.
2. The user enters a question or intention.
3. The deck is shuffled and cut.
4. Cards are drawn according to the selected spread.
5. Each card is randomly assigned an upright or reversed orientation.
6. The reading page displays the drawn cards and their interpretations.

## Future Improvements
- Connect Angular frontend with Spring Boot backend
- Store tarot card data through REST API endpoints
- Add user accounts and saved reading history
- Add card artwork and animations
- Improve reading layouts based on selected spreads
- Add additional interpretation features

## Screenshots
[Will add screenshots here]

![image](https://github.com/user-attachments/assets/50ccd05b-32ef-4a99-862d-26bfedbf4f1c)
# 🐦 MockingBird - Mental Health Companion  
_Your empathetic guide to self-care and mental well-being (Project in Active Development)_

[![React](https://img.shields.io/badge/React-18.2-%2361DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4-%23646CFF?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features
- Mental health assessments (Depression, OCD, Stress, Trauma)
- Interactive mood tracking
- Personalized care resources
- Modern UI with horizontal scroll components
- Backend deployed on Render with MongoDB Atlas

## Project Structure
```bash
anonymousknight07-mockingbird/
├── configs/
│   ├── eslint.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── tsconfig.*
├── public/
├── server/
│   └── API routes & MongoDB models
└── src/
    ├── components/  # Reusable UI components
    ├── data/        # Quiz datasets
    ├── pages/       # Application screens
    └── services/    # API communication
```
## Quick Start
1. Clone repo
   ```bash
   git clone https://github.com/anonymousknight07/mockingbird.git
   cd mockingbird
   ```
2. Install dependencies
   ```bash
     # Client
       cd anonymousknight07-mockingbird
       npm install

    # Server
      cd server
      npm install
   ```
3. Start development servers
  ```bash
   # In root directory (client)
     npm run dev

  # In server directory
    node index.js
  ```
## Contributing
We welcome contributions! Here's how you can help:
- Add new quiz modules in /src/data
- Improve UI components in /src/components
- Enhance server API endpoints
- Suggest better mental health resources
- Report bugs or suggest features via issues

## License
Distributed under MIT License. See LICENSE for details.

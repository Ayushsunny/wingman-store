# Wingman Dashboard Challenge

## Project Overview

This is a React-based dashboard application developed for the Wingman Frontend Engineering Role coding challenge. The project demonstrates a responsive, pixel-perfect implementation of the provided Figma design using Next.js, Shadcn UI, and Tailwind CSS.


## Technologies Used

- **Framework**: Next.js 15
- **Styling**: 
  - Tailwind CSS
  - Shadcn UI Components
- **Charting**: Recharts
- **Icons**: Lucide React
- **Language**: TypeScript

## Features

- Responsive dashboard layout
- Interactive charts for consultations and period comparisons
- Metrics overview with trend indicators
- Orders table with detailed information
- Modern, clean UI design

## Project Structure

```
src/
├── app/
│   └── page.tsx
├── components/
│   ├── dashboard/
│   │   ├── MetricCard.tsx
│   │   ├── NavItem.tsx
│   │   ├── HeaderTab.tsx
│   ├── charts/
│   │   ├── ConsultationsChart.tsx
│   │   └── VsPeriodChart.tsx
│   │   └── ForecastsCard.tsx
│   └── OrdersTable.tsx
├── data/
│   └── mockData.ts
└── types/
    └── dashboard.ts
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/wingman-dashboard.git
   ```

2. Install dependencies
   ```bash
   cd wingman-dashboard
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

Deployed on Vercel: [Live Dashboard Link](https://wingman-store.vercel.app/)

## Bonus Tasks Implemented

- [ ] Sorting functionality for orders table
- [ ] Interactive chat feature
- [ ] Pagination implementation

## Improvements & Future Enhancements

- Implement actual data fetching from backend API
- Add more interactive features
- Enhance responsive design for smaller screens
- Add authentication and user management

## Design Considerations

- Pixel-perfect implementation of Figma design
- Responsive layout using Tailwind CSS
- Modular component architecture
- Type-safe implementation with TypeScript

## Contact

Your Name - ayush100anand@gmail.com

Project Link: https://github.com/Ayushsunny/wingman-store

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)
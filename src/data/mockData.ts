import { ConsultationData, VsPeriodData, Order } from '../types/dashboard';

export const consultationsData: ConsultationData[] = [
  { day: 'Mon', incoming: 32, answered: 28, expertsOnline: 25 },
  { day: 'Tue', incoming: 34, answered: 26, expertsOnline: 25 },
  { day: 'Wed', incoming: 45, answered: 32, expertsOnline: 30 },
  { day: 'Thu', incoming: 52, answered: 45, expertsOnline: 30 },
  { day: 'Fri', incoming: 48, answered: 35, expertsOnline: 25 },
  { day: 'Sat', incoming: 50, answered: 35, expertsOnline: 25 },
  { day: 'Sun', incoming: 55, answered: 38, expertsOnline: 25 },
];

export const vsPeriodData: VsPeriodData[] = [
  { name: 'This week', consultations: 20, ordersClosed: 15 },
  { name: 'Last week', consultations: 15, ordersClosed: 10 },
];

export const ordersData: Order[] = [
    {
        productName: "Product Name...",
        date: "24 Apr '2024",
        time: "10:24 AM",
        timeSpent: "2h 5m",
        orderValue: 120.21,
        commission: 55,
      },
      {
        productName: "Product Name...",
        date: "24 Apr '2024",
        time: "10:24 AM",
        timeSpent: "2h 5m",
        orderValue: 120.21,
        commission: 55,
      },
      {
        productName: "Product Name...",
        date: "24 Apr '2024",
        time: "10:24 AM",
        timeSpent: "2h 5m",
        orderValue: 120.21,
        commission: 55,
      },
      {
        productName: "Product Name...",
        date: "24 Apr '2024",
        time: "10:24 AM",
        timeSpent: "2h 5m",
        orderValue: 120.21,
        commission: 55,
      }
];
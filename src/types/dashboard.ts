export interface MetricCardProps {
    title: string;
    value: string;
    change: number;
    trend: "increase" | "decrease";
  }
  
  export interface NavItemProps {
    href?: string;
    icon: React.ReactNode;
  }
  
  export interface HeaderTabProps {
    children: React.ReactNode;
    active?: boolean;
  }
  
  export interface Order {
    productName: string;
    date: string;
    time: string;
    timeSpent: string;
    orderValue: number;
    commission: number;
  }
  
  export interface ConsultationData {
    day: string;
    incoming: number;
    answered: number;
    expertsOnline: number;
  }
  
  export interface VsPeriodData {
    name: string;
    consultations: number;
    ordersClosed: number;
  }
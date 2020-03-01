import { OrderListDetail } from './order-list-detail';

export class OrderListItem {
    orderId: number;
    address: string;
    city: string;
    company: string;
    customer: string;
    customerId: number;
    data: OrderListDetail[];//Resumen de la venta (Total De la Venta, Impuestos, Importe General)
    orderDate: string;    
    phone: string;
    statusId: string;
    statusName: string;
}
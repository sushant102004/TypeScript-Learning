// Eums are named constants.

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED
}

const myStatus = OrderStatus.PENDING

const isShipped = (status: OrderStatus): boolean => {
    return status === OrderStatus.SHIPPED
}

console.log(isShipped(OrderStatus.DELIVERED))
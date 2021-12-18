import socketClient from 'socket.io-client';
class Connection {
    constructor() {
        this.ENDPOINT = "http://127.0.0.1:4000";
    }
    getOrderData(callBack) {
        const socket = socketClient(this.ENDPOINT);
        socket.on("order_event", callBack);
    }
}

export default new Connection();
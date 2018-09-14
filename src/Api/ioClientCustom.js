import ioClient from 'socket.io-client'

let onevent = ioClient.Socket.prototype.onevent;

ioClient.Socket.prototype.onAny = function (event, data) {};

ioClient.Socket.prototype.onevent = function (packet) {
	let [event, data] = packet.data || [];

	onevent.call (this, packet);
	this.onAny(event, data)
};

export default ioClient;

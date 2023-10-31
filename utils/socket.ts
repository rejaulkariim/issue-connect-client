import { io } from "socket.io-client";
const socketUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
const socket = io(socketUrl);

export default socket;

export enum ActionTypes {
    LOAD_ME = 'LOAD_ME',
    CALL_STARTED = 'CALL_STARTED',
    CALL_SUCCEEDED = 'CALL_SUCCEEDED',
    CALL_FAILED = 'CALL_FAILED'
}

export enum SocketHandles {
    MY_ID = 'MY_ID',
    JOIN_ROOM = 'JOIN_ROOM',
    LEAVE_ROOM = 'LEAVE_ROOM',
    MEMBER_JOINED = 'MEMBER_JOINED',
    MEMBER_LEFT = 'MEMBER_LEFT',
    SEND_MESSAGE = 'SEND_MESSAGE',
    MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
    // core
    CONNECTION = 'connection', // server-side
    CONNECT = 'connect', // client-side
    DISCONNECT = 'disconnect',
    ERROR = 'error'
}

export interface UserIF {
    socketId?: string
    id?: string
    image: string
    lastName: string
    name: string
    statusText: string
}

export interface MessageIF {
    text: string
    user: string
    createdAt: Date
}

export interface MemberIF {
    socketId: string
    chatroomName: string
    user: UserIF
}

export interface ChatroomIF {
    chatroomName: string
    members: MemberIF[]
}

export interface ChatState {
    rooms: ChatroomIF[]
}

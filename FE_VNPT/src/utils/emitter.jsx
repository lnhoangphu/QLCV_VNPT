import EventEmitter from 'events';

const emitter = new EventEmitter();
emitter.setMaxListeners(0); // Cho phép nhiều listener không giới hạn

export default emitter;
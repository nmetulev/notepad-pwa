
 export type EventHandler<E = void> = (event: E) => void;

 export class EventDispatcher<E = void> {
    private eventHandlers: Map<string, Array<EventHandler<E>>>;

    constructor() {
        this.eventHandlers = new Map();
    }

    public fire(eventName: string, event: E) {
        const handlers = this.eventHandlers.get(eventName);
        if (handlers && handlers.length) {
            for (const handler of handlers) {
                handler(event);
            }
        }
    }

    public add(eventName: string, eventHandler: EventHandler<E>) {
        let handlers = this.eventHandlers.get(eventName);
        if (!handlers) {
            handlers = [];
            this.eventHandlers.set(eventName, handlers);
        }

        handlers.push(eventHandler);
    }

    public remove(eventName: string, eventHandler: EventHandler<E>) {
        const handlers = this.eventHandlers.get(eventName);
        if (handlers) {
            for (let i = 0; i < handlers.length; i++) {
                if (handlers[i] === eventHandler) {
                  handlers.splice(i, 1);
                  i--;
                }
              }
        }
    }
 }

 export class EventProducer<T> {
    protected _eventDispatcher = new EventDispatcher<T>();

    on(eventName: string, handler: EventHandler<T>) {
        this._eventDispatcher.add(eventName, handler);
    }

    removeListener(eventName: string, handler: EventHandler<T>) {
        this._eventDispatcher.remove(eventName, handler);
    }

    protected fire(eventName: string, event: T) {
        this._eventDispatcher.fire(eventName, event);
    }
 }
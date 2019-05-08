export class EventEmitter {
  constructor() {
    this._listeners = new Map();
  }

  addEventLister(type, listener) {
    if (!this._listeners.has(type)) {
      this._listeners.set(type, new Set());
    }
    this._listeners.get(type).add(listener);
  }

  emit(type) {
    const listenerSet = this._listeners.get(type)
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach(listener => {
      listener.call(this);
    });
  }

  removeEventLister(type, listener) {
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
        return;
    }
    listenerSet.forEach(ownListener => {
        if (ownListener === listener) {
            listenerSet.delete(listener);
        }
    });
  }
}

class Registry {
    constructor() {
        this.values = {};
    }

    get(value) {
        if (this.values.hasOwnProperty(value)) {
            return this.values[value];
        }

        return null;
    }

    set(key, value) {
        this.values[key] = value;
    }
}

export let registry = new Registry();
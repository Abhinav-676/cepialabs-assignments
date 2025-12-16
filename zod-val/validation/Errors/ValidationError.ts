

export class ValidationError extends Error {
    public errors: object = {}

    constructor(errors: object) {
        super()
        this.errors = errors
    }
}
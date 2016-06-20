export declare abstract class ProgressIndicator {
    abstract configure(options: Object): ProgressIndicator;
    abstract set(n: number): ProgressIndicator;
    abstract isStarted(): boolean;
    abstract start(): ProgressIndicator;
    abstract done(force?: boolean): ProgressIndicator;
    abstract inc(amount?: number): ProgressIndicator;
    abstract trickle(): ProgressIndicator;
}

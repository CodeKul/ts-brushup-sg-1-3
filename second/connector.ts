import { Connectable } from './connectable';

export class Connector implements Connectable {

    connect(url: string): void {
        console.log(`connecting to facebook`);
    }
}
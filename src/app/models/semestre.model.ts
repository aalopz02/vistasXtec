
export class semestreModel {

    periodo: number;
    anno: number;

    public constructor(init?: Partial<semestreModel>) {
        Object.assign(this, init);
    }
}

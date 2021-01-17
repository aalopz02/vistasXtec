
export class semestreModel {

    periodo: string;
    anno: string;

    public constructor(init?: Partial<semestreModel>) {
        Object.assign(this, init);
    }
}

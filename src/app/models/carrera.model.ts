
export class cursoModel {

    Nombre: string;
    ID: number;

    public constructor(init: Partial<cursoModel>) {
        Object.assign(this, init);
    }
}

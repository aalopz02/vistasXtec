
export class profesorModel {

    Nombre: string;
    Cedula: string;

    public constructor(init?: Partial<profesorModel>) {
        Object.assign(this, init);
    }
    
}

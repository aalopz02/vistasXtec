
export class profesorModel {

    nombre: string;
    cedula: number;

    public constructor(init?: Partial<profesorModel>) {
        Object.assign(this, init);
    }
    
}

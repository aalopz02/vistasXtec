
export class cursoCrear {

    Codigo: string;
    Nombre: string;
    Creditos: string;
    Carrera_ID: number;

    public constructor(codigo : string, nombre : string, creditos : string, id : string) {
        this.Codigo = codigo;
        this.Nombre = nombre;
        this.Creditos = creditos;
        this.Carrera_ID = parseInt(id);
    }
}


export class cursoModel {

    codigoCurso: string;
    numeroGrupo: number;
    profesor1: number;
    profesor2: number;
    grupo : any[]; 

    public constructor(init: Partial<cursoModel>,lista : any[]) {
        Object.assign(this, init);
        this.grupo = lista;
    }
}


export class cursoModel {

    codigoCurso: string;
    numeroGrupo: string;
    profesor1: string;
    profesor2: string;
    grupo : any[]; 

    public constructor(init: Partial<cursoModel>,lista : any[]) {
        Object.assign(this, init);
        this.grupo = lista;
    }
}

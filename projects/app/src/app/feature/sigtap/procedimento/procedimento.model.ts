// TODO: Estudar para onde devo mover esta interface
interface Financiamento {
    id: string;
    codigo: string;
    nome: string;
}

export interface Procedimento {
    id: number;
    codigo: string;
    codigoDisplay: string;
    nome: string;
    tipoComplexidade: string;
    tipoSexo: string;
    quantidadeMaximaExecucao: number;
    quantidadeMaximaExecucaoDisplay: string;
    quantidadeDiasPermanencia: number;
    quantidadeDiasPermanenciaDisplay: string;
    quantidadePontos: number;
    quantidadePontosDisplay: string;
    idadeMinima: number;
    idadeMinimaDisplay: string;
    idadeMaxima: number;
    idadeMaximaDisplay: string;
    valorSh: number;
    valorSa: number;
    valorSp: number;
    codigoRubrica: string;
    quantidadeTempoPermanencia: number;
    quantidadeTempoPermanenciaDisplay: string;
    financiamento: Financiamento;
}

export interface ClienteDTO {
    id: string;
    nome: string;
    email: string;
    imageUrl?:string;
    //? serve para informar que o campo não é obrigatório
}
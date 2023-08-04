export declare class AppController {
    getData(): {
        Saludo: string;
        Lista: number[];
    };
    getDatosComida(): Promise<{
        comidas: {
            ingredientes: string[];
            id: number;
            nombre: string;
        }[];
    }>;
}

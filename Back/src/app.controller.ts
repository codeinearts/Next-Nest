import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getComidas = async() => {
  const comidas = await prisma.comida.findMany({
    include: {
      ingredientes: {
        select : {
          nombre: true
        }
      }
    },
  });

  const comidasSort = comidas.map(comida => 
    ({...comida, ingredientes: comida.ingredientes.map(ingrediente => 
      ingrediente.nombre),}));

  return comidasSort;

}

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get('api/data')
    getData(){
      return { Saludo : 'Hello world',
      Lista : [ 1, 2, 3, 4 ,5]
    }
  }
  @Get('api/comidas')
    async getDatosComida(){
      const comidas = await getComidas();
      return {comidas};
    }

}


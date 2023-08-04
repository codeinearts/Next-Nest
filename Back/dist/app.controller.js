"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getComidas = async () => {
    const comidas = await prisma.comida.findMany({
        include: {
            ingredientes: {
                select: {
                    nombre: true
                }
            }
        },
    });
    const comidasSort = comidas.map(comida => ({ ...comida, ingredientes: comida.ingredientes.map(ingrediente => ingrediente.nombre), }));
    return comidasSort;
};
let AppController = exports.AppController = class AppController {
    getData() {
        return { Saludo: 'Hello world',
            Lista: [1, 2, 3, 4, 5]
        };
    }
    async getDatosComida() {
        const comidas = await getComidas();
        return { comidas };
    }
};
__decorate([
    (0, common_1.Get)('api/data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
__decorate([
    (0, common_1.Get)('api/comidas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getDatosComida", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map
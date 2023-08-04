/*
  Warnings:

  - You are about to drop the `_comidatoingredientes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ingredientes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_comidatoingredientes` DROP FOREIGN KEY `_ComidaToIngredientes_A_fkey`;

-- DropForeignKey
ALTER TABLE `_comidatoingredientes` DROP FOREIGN KEY `_ComidaToIngredientes_B_fkey`;

-- DropTable
DROP TABLE `_comidatoingredientes`;

-- DropTable
DROP TABLE `ingredientes`;

-- CreateTable
CREATE TABLE `Ingrediente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `comidaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ingrediente` ADD CONSTRAINT `Ingrediente_comidaId_fkey` FOREIGN KEY (`comidaId`) REFERENCES `Comida`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

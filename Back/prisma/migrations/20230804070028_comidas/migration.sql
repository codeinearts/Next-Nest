/*
  Warnings:

  - You are about to drop the column `ingredientes` on the `comida` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `comida` DROP COLUMN `ingredientes`;

-- CreateTable
CREATE TABLE `Ingredientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ComidaToIngredientes` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ComidaToIngredientes_AB_unique`(`A`, `B`),
    INDEX `_ComidaToIngredientes_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ComidaToIngredientes` ADD CONSTRAINT `_ComidaToIngredientes_A_fkey` FOREIGN KEY (`A`) REFERENCES `Comida`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ComidaToIngredientes` ADD CONSTRAINT `_ComidaToIngredientes_B_fkey` FOREIGN KEY (`B`) REFERENCES `Ingredientes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

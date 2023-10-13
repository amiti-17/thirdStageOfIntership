/*
  Warnings:

  - You are about to drop the column `weatherId` on the `Current` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Current_weatherId_key";

-- AlterTable
ALTER TABLE "Current" DROP COLUMN "weatherId";

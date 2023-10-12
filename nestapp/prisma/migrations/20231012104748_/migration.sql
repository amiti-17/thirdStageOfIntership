/*
  Warnings:

  - A unique constraint covering the columns `[currentDt]` on the table `Weathers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Locations" DROP CONSTRAINT "Locations_weatherId_fkey";

-- DropForeignKey
ALTER TABLE "Weathers" DROP CONSTRAINT "Weathers_currentDt_fkey";

-- AlterTable
ALTER TABLE "Current" ADD COLUMN     "weatherId" INTEGER;

-- AlterTable
ALTER TABLE "Locations" ALTER COLUMN "weatherId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Weathers" ALTER COLUMN "currentDt" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Weathers_currentDt_key" ON "Weathers"("currentDt");

-- AddForeignKey
ALTER TABLE "Locations" ADD CONSTRAINT "Locations_weatherId_fkey" FOREIGN KEY ("weatherId") REFERENCES "Weathers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weathers" ADD CONSTRAINT "Weathers_currentDt_fkey" FOREIGN KEY ("currentDt") REFERENCES "Current"("dt") ON DELETE SET NULL ON UPDATE CASCADE;

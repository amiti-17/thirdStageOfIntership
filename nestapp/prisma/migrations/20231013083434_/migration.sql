/*
  Warnings:

  - You are about to drop the column `currentDt` on the `Weathers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[currentId]` on the table `Weathers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Weathers" DROP CONSTRAINT "Weathers_currentDt_fkey";

-- DropIndex
DROP INDEX "Current_current_key";

-- DropIndex
DROP INDEX "Current_dt_key";

-- DropIndex
DROP INDEX "Days_daily_key";

-- DropIndex
DROP INDEX "Weathers_currentDt_key";

-- AlterTable
ALTER TABLE "Weathers" DROP COLUMN "currentDt",
ADD COLUMN     "currentId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Weathers_currentId_key" ON "Weathers"("currentId");

-- AddForeignKey
ALTER TABLE "Weathers" ADD CONSTRAINT "Weathers_currentId_fkey" FOREIGN KEY ("currentId") REFERENCES "Current"("id") ON DELETE CASCADE ON UPDATE CASCADE;

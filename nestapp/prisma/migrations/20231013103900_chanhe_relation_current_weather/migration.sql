/*
  Warnings:

  - A unique constraint covering the columns `[weatherId]` on the table `Current` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Weathers" DROP CONSTRAINT "Weathers_currentId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Current_weatherId_key" ON "Current"("weatherId");

-- AddForeignKey
ALTER TABLE "Current" ADD CONSTRAINT "Current_weatherId_fkey" FOREIGN KEY ("weatherId") REFERENCES "Weathers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `weatherId` on the `Days` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Days" DROP CONSTRAINT "Days_weatherId_fkey";

-- AlterTable
ALTER TABLE "Days" DROP COLUMN "weatherId";

-- CreateTable
CREATE TABLE "_DaysToWeathers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DaysToWeathers_AB_unique" ON "_DaysToWeathers"("A", "B");

-- CreateIndex
CREATE INDEX "_DaysToWeathers_B_index" ON "_DaysToWeathers"("B");

-- AddForeignKey
ALTER TABLE "_DaysToWeathers" ADD CONSTRAINT "_DaysToWeathers_A_fkey" FOREIGN KEY ("A") REFERENCES "Days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DaysToWeathers" ADD CONSTRAINT "_DaysToWeathers_B_fkey" FOREIGN KEY ("B") REFERENCES "Weathers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

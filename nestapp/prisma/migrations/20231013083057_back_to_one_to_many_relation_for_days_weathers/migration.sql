/*
  Warnings:

  - You are about to drop the `_DaysToWeathers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DaysToWeathers" DROP CONSTRAINT "_DaysToWeathers_A_fkey";

-- DropForeignKey
ALTER TABLE "_DaysToWeathers" DROP CONSTRAINT "_DaysToWeathers_B_fkey";

-- AlterTable
ALTER TABLE "Days" ADD COLUMN     "weatherId" INTEGER;

-- DropTable
DROP TABLE "_DaysToWeathers";

-- AddForeignKey
ALTER TABLE "Days" ADD CONSTRAINT "Days_weatherId_fkey" FOREIGN KEY ("weatherId") REFERENCES "Weathers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

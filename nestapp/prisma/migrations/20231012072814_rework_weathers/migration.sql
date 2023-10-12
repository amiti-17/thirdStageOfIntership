/*
  Warnings:

  - You are about to drop the column `locations_id` on the `Weathers` table. All the data in the column will be lost.
  - You are about to drop the `_CurrentToWeathers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `currentDt` to the `Weathers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Weathers" DROP CONSTRAINT "Weathers_locations_id_fkey";

-- DropForeignKey
ALTER TABLE "_CurrentToWeathers" DROP CONSTRAINT "_CurrentToWeathers_A_fkey";

-- DropForeignKey
ALTER TABLE "_CurrentToWeathers" DROP CONSTRAINT "_CurrentToWeathers_B_fkey";

-- DropIndex
DROP INDEX "Weathers_locations_id_key";

-- AlterTable
ALTER TABLE "Locations" ADD COLUMN     "weatherId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "Weathers" DROP COLUMN "locations_id",
ADD COLUMN     "currentDt" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_CurrentToWeathers";

-- AddForeignKey
ALTER TABLE "Locations" ADD CONSTRAINT "Locations_weatherId_fkey" FOREIGN KEY ("weatherId") REFERENCES "Weathers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weathers" ADD CONSTRAINT "Weathers_currentDt_fkey" FOREIGN KEY ("currentDt") REFERENCES "Current"("dt") ON DELETE RESTRICT ON UPDATE CASCADE;

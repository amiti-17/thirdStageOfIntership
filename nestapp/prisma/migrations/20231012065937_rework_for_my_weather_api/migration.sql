/*
  Warnings:

  - You are about to drop the `Hours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RefreshToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HoursToWeathers` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[dt]` on the table `Days` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dt]` on the table `Time_stamps` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dt` to the `Days` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dt` to the `Time_stamps` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_HoursToWeathers" DROP CONSTRAINT "_HoursToWeathers_A_fkey";

-- DropForeignKey
ALTER TABLE "_HoursToWeathers" DROP CONSTRAINT "_HoursToWeathers_B_fkey";

-- DropIndex
DROP INDEX "Days_daily_key";

-- DropIndex
DROP INDEX "Time_stamps_current_key";

-- AlterTable
ALTER TABLE "Days" ADD COLUMN     "dt" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Time_stamps" ADD COLUMN     "dt" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Hours";

-- DropTable
DROP TABLE "RefreshToken";

-- DropTable
DROP TABLE "_HoursToWeathers";

-- CreateIndex
CREATE UNIQUE INDEX "Days_dt_key" ON "Days"("dt");

-- CreateIndex
CREATE UNIQUE INDEX "Time_stamps_dt_key" ON "Time_stamps"("dt");

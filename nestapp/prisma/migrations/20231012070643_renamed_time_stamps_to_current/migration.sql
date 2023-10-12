/*
  Warnings:

  - You are about to drop the `Time_stamps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Time_stampsToWeathers` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[daily]` on the table `Days` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_Time_stampsToWeathers" DROP CONSTRAINT "_Time_stampsToWeathers_A_fkey";

-- DropForeignKey
ALTER TABLE "_Time_stampsToWeathers" DROP CONSTRAINT "_Time_stampsToWeathers_B_fkey";

-- DropTable
DROP TABLE "Time_stamps";

-- DropTable
DROP TABLE "_Time_stampsToWeathers";

-- CreateTable
CREATE TABLE "Current" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dt" INTEGER NOT NULL,
    "current" JSONB NOT NULL,

    CONSTRAINT "Current_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CurrentToWeathers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Current_dt_key" ON "Current"("dt");

-- CreateIndex
CREATE UNIQUE INDEX "Current_current_key" ON "Current"("current");

-- CreateIndex
CREATE UNIQUE INDEX "_CurrentToWeathers_AB_unique" ON "_CurrentToWeathers"("A", "B");

-- CreateIndex
CREATE INDEX "_CurrentToWeathers_B_index" ON "_CurrentToWeathers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Days_daily_key" ON "Days"("daily");

-- AddForeignKey
ALTER TABLE "_CurrentToWeathers" ADD CONSTRAINT "_CurrentToWeathers_A_fkey" FOREIGN KEY ("A") REFERENCES "Current"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CurrentToWeathers" ADD CONSTRAINT "_CurrentToWeathers_B_fkey" FOREIGN KEY ("B") REFERENCES "Weathers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

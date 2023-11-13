/*
  Warnings:

  - You are about to drop the `Current` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Days` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Days" DROP CONSTRAINT "Days_weatherId_fkey";

-- DropForeignKey
ALTER TABLE "Weathers" DROP CONSTRAINT "Weathers_currentId_fkey";

-- DropTable
DROP TABLE "Current";

-- DropTable
DROP TABLE "Days";

-- CreateTable
CREATE TABLE "CurrentWeather" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dt" INTEGER NOT NULL,
    "current" JSONB NOT NULL,

    CONSTRAINT "CurrentWeather_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyWeather" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dt" INTEGER NOT NULL,
    "daily" JSONB NOT NULL,
    "weatherId" INTEGER,

    CONSTRAINT "DailyWeather_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Weathers" ADD CONSTRAINT "Weathers_currentId_fkey" FOREIGN KEY ("currentId") REFERENCES "CurrentWeather"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyWeather" ADD CONSTRAINT "DailyWeather_weatherId_fkey" FOREIGN KEY ("weatherId") REFERENCES "Weathers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

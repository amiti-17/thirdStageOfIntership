/*
  Warnings:

  - A unique constraint covering the columns `[weatherId]` on the table `Locations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Locations_weatherId_key" ON "Locations"("weatherId");

/*
  Warnings:

  - Added the required column `name` to the `Locations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Locations" ADD COLUMN     "country" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "state" TEXT;

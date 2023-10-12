-- AlterTable
ALTER TABLE "Locations" ALTER COLUMN "weatherId" DROP DEFAULT;
DROP SEQUENCE "Locations_weatherId_seq";

-- DropForeignKey
ALTER TABLE "Current" DROP CONSTRAINT "Current_weatherId_fkey";

-- AddForeignKey
ALTER TABLE "Weathers" ADD CONSTRAINT "Weathers_currentId_fkey" FOREIGN KEY ("currentId") REFERENCES "Current"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "Weathers" DROP CONSTRAINT "Weathers_currentDt_fkey";

-- AddForeignKey
ALTER TABLE "Weathers" ADD CONSTRAINT "Weathers_currentDt_fkey" FOREIGN KEY ("currentDt") REFERENCES "Current"("dt") ON DELETE CASCADE ON UPDATE CASCADE;

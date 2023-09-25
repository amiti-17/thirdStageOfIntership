-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Locations" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lat" INTEGER NOT NULL,
    "lon" INTEGER NOT NULL,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weathers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "locations_id" INTEGER NOT NULL,

    CONSTRAINT "Weathers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Days" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "daily" JSONB NOT NULL,

    CONSTRAINT "Days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hours" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hourly" JSONB NOT NULL,

    CONSTRAINT "Hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Time_stamps" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "current" JSONB NOT NULL,

    CONSTRAINT "Time_stamps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LocationsToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DaysToWeathers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_HoursToWeathers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Time_stampsToWeathers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Locations_lat_lon_key" ON "Locations"("lat", "lon");

-- CreateIndex
CREATE UNIQUE INDEX "Weathers_locations_id_key" ON "Weathers"("locations_id");

-- CreateIndex
CREATE UNIQUE INDEX "Days_daily_key" ON "Days"("daily");

-- CreateIndex
CREATE UNIQUE INDEX "Hours_hourly_key" ON "Hours"("hourly");

-- CreateIndex
CREATE UNIQUE INDEX "Time_stamps_current_key" ON "Time_stamps"("current");

-- CreateIndex
CREATE UNIQUE INDEX "_LocationsToUsers_AB_unique" ON "_LocationsToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_LocationsToUsers_B_index" ON "_LocationsToUsers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DaysToWeathers_AB_unique" ON "_DaysToWeathers"("A", "B");

-- CreateIndex
CREATE INDEX "_DaysToWeathers_B_index" ON "_DaysToWeathers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HoursToWeathers_AB_unique" ON "_HoursToWeathers"("A", "B");

-- CreateIndex
CREATE INDEX "_HoursToWeathers_B_index" ON "_HoursToWeathers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Time_stampsToWeathers_AB_unique" ON "_Time_stampsToWeathers"("A", "B");

-- CreateIndex
CREATE INDEX "_Time_stampsToWeathers_B_index" ON "_Time_stampsToWeathers"("B");

-- AddForeignKey
ALTER TABLE "Weathers" ADD CONSTRAINT "Weathers_locations_id_fkey" FOREIGN KEY ("locations_id") REFERENCES "Locations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationsToUsers" ADD CONSTRAINT "_LocationsToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Locations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationsToUsers" ADD CONSTRAINT "_LocationsToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DaysToWeathers" ADD CONSTRAINT "_DaysToWeathers_A_fkey" FOREIGN KEY ("A") REFERENCES "Days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DaysToWeathers" ADD CONSTRAINT "_DaysToWeathers_B_fkey" FOREIGN KEY ("B") REFERENCES "Weathers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HoursToWeathers" ADD CONSTRAINT "_HoursToWeathers_A_fkey" FOREIGN KEY ("A") REFERENCES "Hours"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HoursToWeathers" ADD CONSTRAINT "_HoursToWeathers_B_fkey" FOREIGN KEY ("B") REFERENCES "Weathers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Time_stampsToWeathers" ADD CONSTRAINT "_Time_stampsToWeathers_A_fkey" FOREIGN KEY ("A") REFERENCES "Time_stamps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Time_stampsToWeathers" ADD CONSTRAINT "_Time_stampsToWeathers_B_fkey" FOREIGN KEY ("B") REFERENCES "Weathers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

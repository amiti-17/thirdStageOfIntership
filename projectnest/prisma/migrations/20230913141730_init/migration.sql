-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lat" INTEGER NOT NULL,
    "lon" INTEGER NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weather" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "locations_id" INTEGER NOT NULL,

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "_LocationToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DaysToWeather" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_HoursToWeather" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Time_stampsToWeather" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Location_lat_lon_key" ON "Location"("lat", "lon");

-- CreateIndex
CREATE UNIQUE INDEX "Weather_locations_id_key" ON "Weather"("locations_id");

-- CreateIndex
CREATE UNIQUE INDEX "Days_daily_key" ON "Days"("daily");

-- CreateIndex
CREATE UNIQUE INDEX "Hours_hourly_key" ON "Hours"("hourly");

-- CreateIndex
CREATE UNIQUE INDEX "Time_stamps_current_key" ON "Time_stamps"("current");

-- CreateIndex
CREATE UNIQUE INDEX "_LocationToUser_AB_unique" ON "_LocationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_LocationToUser_B_index" ON "_LocationToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DaysToWeather_AB_unique" ON "_DaysToWeather"("A", "B");

-- CreateIndex
CREATE INDEX "_DaysToWeather_B_index" ON "_DaysToWeather"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HoursToWeather_AB_unique" ON "_HoursToWeather"("A", "B");

-- CreateIndex
CREATE INDEX "_HoursToWeather_B_index" ON "_HoursToWeather"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Time_stampsToWeather_AB_unique" ON "_Time_stampsToWeather"("A", "B");

-- CreateIndex
CREATE INDEX "_Time_stampsToWeather_B_index" ON "_Time_stampsToWeather"("B");

-- AddForeignKey
ALTER TABLE "Weather" ADD CONSTRAINT "Weather_locations_id_fkey" FOREIGN KEY ("locations_id") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToUser" ADD CONSTRAINT "_LocationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToUser" ADD CONSTRAINT "_LocationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DaysToWeather" ADD CONSTRAINT "_DaysToWeather_A_fkey" FOREIGN KEY ("A") REFERENCES "Days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DaysToWeather" ADD CONSTRAINT "_DaysToWeather_B_fkey" FOREIGN KEY ("B") REFERENCES "Weather"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HoursToWeather" ADD CONSTRAINT "_HoursToWeather_A_fkey" FOREIGN KEY ("A") REFERENCES "Hours"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HoursToWeather" ADD CONSTRAINT "_HoursToWeather_B_fkey" FOREIGN KEY ("B") REFERENCES "Weather"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Time_stampsToWeather" ADD CONSTRAINT "_Time_stampsToWeather_A_fkey" FOREIGN KEY ("A") REFERENCES "Time_stamps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Time_stampsToWeather" ADD CONSTRAINT "_Time_stampsToWeather_B_fkey" FOREIGN KEY ("B") REFERENCES "Weather"("id") ON DELETE CASCADE ON UPDATE CASCADE;

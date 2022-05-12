-- CreateTable
CREATE TABLE "Ajolonauta" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL DEFAULT 0,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ajolonauta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ajolonauta_name_key" ON "Ajolonauta"("name");

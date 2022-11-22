-- CreateTable
CREATE TABLE "PiianoUsers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "SSN" INTEGER NOT NULL,

    CONSTRAINT "PiianoUsers_pkey" PRIMARY KEY ("id")
);

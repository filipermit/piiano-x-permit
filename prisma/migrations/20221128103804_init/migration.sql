/*
  Warnings:

  - You are about to drop the column `SSN` on the `piianousers` table. All the data in the column will be lost.
  - Added the required column `ssn` to the `piianousers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "piianousers" DROP COLUMN "SSN",
ADD COLUMN     "ssn" TEXT NOT NULL;

-- CreateEnum
CREATE TYPE "Position" AS ENUM ('WOODWINDS', 'BRASS', 'PERCUSSION');

-- AlterTable
ALTER TABLE "UserAuth" ADD COLUMN     "position" "Position" NOT NULL DEFAULT 'WOODWINDS',
ADD COLUMN     "salary" MONEY NOT NULL DEFAULT 0.0;

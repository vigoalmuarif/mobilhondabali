/*
  Warnings:

  - You are about to drop the column `item_id` on the `Meta` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Meta` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Meta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meta" DROP COLUMN "item_id",
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Meta_slug_key" ON "Meta"("slug");

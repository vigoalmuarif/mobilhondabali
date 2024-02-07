/*
  Warnings:

  - A unique constraint covering the columns `[type_id]` on the table `Featured` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Featured_type_id_key" ON "Featured"("type_id");

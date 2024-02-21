-- CreateEnum
CREATE TYPE "CategoryPageMeta" AS ENUM ('product', 'blog');

-- CreateTable
CREATE TABLE "Meta" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "category" "CategoryPageMeta" NOT NULL,
    "meta_title" TEXT,
    "meta_desc" TEXT,
    "meta_keyword" TEXT,
    "meta_image" TEXT,
    "og_title" TEXT,
    "og_desc" TEXT,
    "og_keyword" TEXT,
    "og_image" TEXT,

    CONSTRAINT "Meta_pkey" PRIMARY KEY ("id")
);

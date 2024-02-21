-- DropForeignKey
ALTER TABLE "Color_Varian" DROP CONSTRAINT "Color_Varian_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Content_Featured" DROP CONSTRAINT "Content_Featured_featured_id_fkey";

-- DropForeignKey
ALTER TABLE "Image_Type" DROP CONSTRAINT "Image_Type_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Model" DROP CONSTRAINT "Model_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Specification" DROP CONSTRAINT "Specification_model_id_fkey";

-- AlterTable
ALTER TABLE "Color_Varian" ALTER COLUMN "type_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Content_Featured" ALTER COLUMN "featured_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Image_Type" ALTER COLUMN "type_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Model" ALTER COLUMN "type_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Specification" ALTER COLUMN "model_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Color_Varian" ADD CONSTRAINT "Color_Varian_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Specification" ADD CONSTRAINT "Specification_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image_Type" ADD CONSTRAINT "Image_Type_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content_Featured" ADD CONSTRAINT "Content_Featured_featured_id_fkey" FOREIGN KEY ("featured_id") REFERENCES "Featured"("id") ON DELETE SET NULL ON UPDATE CASCADE;

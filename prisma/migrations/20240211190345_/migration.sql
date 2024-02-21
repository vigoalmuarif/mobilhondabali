-- DropForeignKey
ALTER TABLE "Featured" DROP CONSTRAINT "Featured_type_id_fkey";

-- AlterTable
ALTER TABLE "Featured" ALTER COLUMN "type_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Featured" ADD CONSTRAINT "Featured_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
